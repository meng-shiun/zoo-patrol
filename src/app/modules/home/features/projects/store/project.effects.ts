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

  loadProjectBudget$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.loadBudgetFieldById),
      switchMap(action =>
        this.projectService.getProjectBudgetField(action.id).pipe(
          map((budgetField: IProjectBudgetField) => ProjectActions.loadBudgetFieldByIdSuccess({ result: budgetField })),
          catchError(err => of(ProjectActions.loadBudgetFieldByIdFail({ error: err })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}
