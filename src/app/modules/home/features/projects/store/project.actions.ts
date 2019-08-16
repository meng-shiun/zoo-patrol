import { createAction, props } from '@ngrx/store';

import { IProject } from '@app/shared';

/* Load Projects (Meta data) */
export const loadAll = createAction('[Projects] Load Projects');

export const loadAllSuccess = createAction('[Projects] Load Projects Success', props<{ payload: IProject[] }>());

export const loadAllFail = createAction('[Projects] Load Projects Fail', props<{ error: string }>());
