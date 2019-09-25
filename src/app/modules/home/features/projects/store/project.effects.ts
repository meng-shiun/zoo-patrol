import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, tap, catchError, withLatestFrom, mergeMap } from 'rxjs/operators';
import { of, pipe, forkJoin } from 'rxjs';

import { IProject, IProjectDetails, IProjectBudgetField } from '@app/shared';
import * as fromProjects from './';
import * as ProjectActions from './project.actions';
import { ProjectService } from '../project.service';

@Injectable()
export class ProjectEffects {
  loadAllProjects$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.loadAllInfo),
      switchMap(action => this.projectService.getProjects()
        .pipe(
          map((allProjects: IProject[]) => ProjectActions.loadAllInfoSuccess({ result: allProjects })),
          catchError(err => of(ProjectActions.loadAllInfoFail({ error: err })))
        ))
    )
  );


  loadProject$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.loadProject),
      switchMap(action => this.projectService.getProject(action.id)
        .pipe(
          map((project: IProject) => ProjectActions.loadProjectSuccess({ project })),
          catchError(err => of(ProjectActions.loadProjectFail({ error: err })))
        ))
    )
  );

  // Update project
  updateProject$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.updateProject),
      switchMap(action => this.projectService.updateProject(action.project))
    ), { dispatch: false }
  );

  // Load project details & project info
  loadProjectDetail$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.loadDetailById),
      switchMap(action =>
        this.projectService.getProjectDetails(action.id).pipe(
          map((details: IProjectDetails) => ProjectActions.loadDetailByIdSuccess({ result: details })),
          catchError(err => of(ProjectActions.loadDetailByIdFail({ error: err })))
        )
      )
    )
  );

  // Update project details & project info
  updateProjectDetails$ = createEffect(
    () => this.actions$.pipe(
    ofType(ProjectActions.updateProjectDetails),
    withLatestFrom(this.store.pipe(select(fromProjects.selectProject))),
    mergeMap(([target, currentProject]) =>
        this.projectService.updateProjectDetails(target.projectDetails).pipe(
          mergeMap(() => {
            const updatedProject: IProject = {
              ...target.projectDetails,
              deadline: currentProject.deadline
            };

            return [
              ProjectActions.updateProjectDetailsSuccess({ projectDetails: target.projectDetails }),
              ProjectActions.updateProject({ project: updatedProject })
            ];
          }),
          catchError(err => of(ProjectActions.updateProjectDetailsFail({ error: err })))
        )
      )
    )
  );

  // Navigate back to details page when project details is updated
  updateProjectDetailsSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.updateProjectDetailsSuccess),
      tap(action => this.router.navigate(['projects']))
    ), { dispatch: false }
  );

  // Load budget field / total hours / total budget
  loadProjectBudgetField$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.loadBudgetFieldById),
      switchMap(action =>
        this.projectService.getProjectBudgetField(action.id).pipe(
          switchMap((budgetField: IProjectBudgetField) => {
            return [
              ProjectActions.loadBudgetFieldByIdSuccess({ result: budgetField }),
              ProjectActions.loadTotalHours(),
              ProjectActions.loadTotalBudget()
            ];
          }),
          catchError(err => of(ProjectActions.loadBudgetFieldByIdFail({ error: err })))
        )
      )
    )
  );

  // Create budget details/planning/budgetField... when a project is created
  createProjectBundle$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.createProjectBundle),
      switchMap(action => {
        return [
          ProjectActions.createProject({ result: action.project }),
          ProjectActions.createProjectDetails({ result: action.projectDetails }),
          ProjectActions.createBudgetField({ budgetField: action.budgetField })
        ];
      })
    )
  );

  createProject$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.createProject),
      switchMap(action =>
        this.projectService.createProject(action.result).pipe(
          map((project: IProject) => ProjectActions.createProjectSuccess({ result: project })),
          catchError(err => of(ProjectActions.createProjectFail({ error: err })))
        )
      )
    )
  );

   // Navigate to details page when a project is created successfully
  createProjectSuccess$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.createProjectSuccess),
      tap(action => this.router.navigateByUrl(`projects/running/${action.result.id}`))
    ), { dispatch: false }
  );

  // Delete budget details/planning/budgetField... when a project is deleted
  deleteProject$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.deleteProject),
      switchMap(action => {
        return forkJoin([
          this.projectService.deleteProject(action.id),
          this.projectService.deleteProjectDetails(action.id),
          this.projectService.deleteBudgetField(action.id)
        ]).pipe(
          map(() => ProjectActions.deleteProjectSuccess({ id: action.id })),
          catchError(err => of(ProjectActions.deleteProjectFail({ error: err })))
        );
      })
    )
  );

  createProjectDetails$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.createProjectDetails),
      switchMap(action =>
        this.projectService.createProjectDetails(action.result).pipe(
          map((projectDetails: IProjectDetails) => ProjectActions.createProjectDetailsSuccess({ result: projectDetails })),
          catchError(err => of(ProjectActions.createProjectDetailsFail({ error: err })))
        )
      )
    )
  );

  createBudgetField$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.createBudgetField),
      switchMap(action =>
        this.projectService.createBudgetField(action.budgetField).pipe(
          map((budgetField: IProjectBudgetField) => ProjectActions.createBudgetFieldSuccess({ budgetField })),
          catchError(err => of(ProjectActions.createBudgetFieldFail({ error: err })))
        )
      )
    )
  );

  updateBudgetField$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.updateBudgetField),
      withLatestFrom(this.store.pipe(select(fromProjects.getProjectBudgetField))),
      switchMap(([action, budgetField]) =>
        this.projectService.updateBudgetField(budgetField.id, budgetField).pipe(
         map((field: IProjectBudgetField) => ProjectActions.updateBudgetFieldSuccess({ id: field.id, budgetItems: field.budgetItems })),
         catchError(err => of(ProjectActions.updateBudgetFieldFail({ error: err })))
        )
      )
    )
  );

  // Update total hours / total budget / budget field after deleting a budget item
  deleteBudgetItem$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.deleteBudgetItem),
      mergeMap(target => {
        return [
          ProjectActions.updateTotalHours({ preHours: target.budgetItem.hours, curHours: 0 }),
          ProjectActions.updateTotalBudget({ preBudget: target.budgetItem.budget, curBudget: 0 }),
          ProjectActions.updateBudgetField()
        ];
      })
    )
  );

  // Update budget field after updating a budget item
  updateBudgetItem$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.updateBudgetItem),
      map(() => ProjectActions.updateBudgetField())
    )
  );

  // Update budget field after creating a budget item
  createBudgetItem$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.createBudgetItem),
      map(() => ProjectActions.updateBudgetField())
    )
  );

  constructor(
    private actions$: Actions,
    private projectService: ProjectService,
    private store: Store<fromProjects.ProjectState>,
    private router: Router
  ) {}
}
