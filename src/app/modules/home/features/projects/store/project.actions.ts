import { createAction, props } from '@ngrx/store';

import { IProject, IProjectDetails } from '@app/shared';

/* ============= Load Projects brief Info */
export const loadAllInfo = createAction('[Projects] Load Projects Info');

export const loadAllInfoSuccess = createAction('[Projects] Load Projects Info Success', props<{ result: IProject[] }>());

export const loadAllInfoFail = createAction('[Projects] Load Projects Info Fail', props<{ error: string }>());


/* ============= Load Project detail by ID */
export const loadDetailById = createAction('[Project] Load Project Detail By Id', props<{ id: number }>());

export const loadDetailByIdSuccess = createAction('[Project] Load Project Detail By Id Success', props<{ result: IProjectDetails }>());

export const loadDetailByIdFail = createAction('[Project] Load Project Detail By Id Fail', props<{ error: string }>());
