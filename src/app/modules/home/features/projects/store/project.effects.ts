import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';

import { IProject } from '@app/shared';
import * as ProjectActions from './project.actions';
import { ProjectService } from '../project.service';

@Injectable()
export class ProjectEffects {
  loadAllProjects$ = createEffect(
    () => this.actions$.pipe(
      ofType(ProjectActions.loadAll),
      mergeMap(action => this.projectService.getProjects()
        .pipe(
          map((allProjects: IProject[]) => ProjectActions.loadAllSuccess({ payload: allProjects }))
          // TODO: catch error
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}
