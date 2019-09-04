import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, act } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { IProject, IProjectDetails, IProjectBudgetField } from '@app/shared';
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

  loadProjectBudgetField$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.loadBudgetFieldById),
      switchMap(action =>
        this.projectService.getProjectBudgetField(action.id).pipe(
          switchMap((budgetField: IProjectBudgetField) => {
            return [
              ProjectActions.loadBudgetFieldByIdSuccess({ result: budgetField }),
              ProjectActions.loadTotalHours({ hoursArr: budgetField.budgetItems })
            ];
          }),
          catchError(err => of(ProjectActions.loadBudgetFieldByIdFail({ error: err })))
        )
      )
    )
  );

  createProject$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.createProject),
      switchMap(action =>
        this.projectService.createProject(action.result).pipe(
          switchMap((project: IProject) => {
            return [
              ProjectActions.createProjectSuccess({ result: project }),
              ProjectActions.createProjectDetails({ result: project })
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

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}
