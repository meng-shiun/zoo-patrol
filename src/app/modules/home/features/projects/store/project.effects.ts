import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, tap, catchError, withLatestFrom, mergeMap } from 'rxjs/operators';
import { of, pipe } from 'rxjs';

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
  createProject$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.createProject),
      switchMap(action =>
        this.projectService.createProject(action.result).pipe(
          switchMap((project: IProject) => {
            return [
              ProjectActions.createProjectSuccess({ result: project }),
              ProjectActions.createProjectDetails({ result: project }),
              ProjectActions.createBudgetField({ id: project.id })
              // TODO: Trigger budget/planning...actions
            ];
          }),
          catchError(err => of(ProjectActions.createProjectFail({ error: err })))
        )
      )
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
        this.projectService.createBudgetField(action.id).pipe(
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

  // Update total hours and total budget when deleting a budget item
  deleteBudgetItem$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.deleteBudgetItem),
      mergeMap(target => {
        return [
          ProjectActions.updateTotalHours({ preHours: target.budgetItem.hours, curHours: 0 }),
          ProjectActions.updateTotalBudget({ preBudget: target.budgetItem.budget, curBudget: 0 })
        ];
      })
    )
  );

  constructor(
    private actions$: Actions,
    private projectService: ProjectService,
    private store: Store<fromProjects.ProjectState>
  ) {}
}
