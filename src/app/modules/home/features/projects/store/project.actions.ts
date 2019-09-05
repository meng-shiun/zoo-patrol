import { createAction, props } from '@ngrx/store';

import { IProject, IProjectDetails, IProjectBudgetField, IBudgetItem } from '@app/shared';

/* ============= Load Projects ============= */
export const loadAllInfo = createAction('[Projects] Load Projects Info');

export const loadAllInfoSuccess = createAction('[Projects] Load Projects Info Success', props<{ result: IProject[] }>());

export const loadAllInfoFail = createAction('[Projects] Load Projects Info Fail', props<{ error: string }>());


/* ============= Load Project detail by ID  ============= */
export const loadDetailById = createAction('[Project] Load Project Detail By Id', props<{ id: number }>());

export const loadDetailByIdSuccess = createAction('[Project] Load Project Detail By Id Success', props<{ result: IProjectDetails }>());

export const loadDetailByIdFail = createAction('[Project] Load Project Detail By Id Fail', props<{ error: string }>());


/* ============= Load Project BudgetField by ID  ============= */
export const loadBudgetFieldById = createAction('[Project] Load Project BudgetField By Id', props<{ id: number }>());

export const loadBudgetFieldByIdSuccess = createAction(
  '[Project] Load Project BudgetField By Id Success', props<{ result: IProjectBudgetField }>());

export const loadBudgetFieldByIdFail = createAction('[Project] Load Project BudgetField By Id Fail', props<{ error: string }>());


/* ============= Project BudgetField Total hours ============= */
export const loadTotalHours = createAction('[Project] Load Project BudgetField Total Hours', props<{ hoursArr: any }>());

export const updateTotalHours = createAction(
  '[Project] Update Project BudgetField Total Hours', props<{ preHours: number, curHours: number }>());


/* ============= Create Project ============= */
export const createProject = createAction('[Project] Create Project', props<{ result: IProject }>());

export const createProjectSuccess = createAction('[Project] Create Project Success', props<{ result: IProject }>());

export const createProjectFail = createAction('[Project] Create Project Fail', props<{ error: string }>());


/* ============= Create Project Details ============= */
export const createProjectDetails = createAction('[Project] Create Project Details', props<{ result: IProject }>());

export const createProjectDetailsSuccess = createAction('[Project] Create Project Details Success', props<{ result: IProjectDetails }>());

export const createProjectDetailsFail = createAction('[Project] Create Project Details Fail', props<{ error: string }>());


/* ============= Create Budget Item ============= */
export const createBudgetItem = createAction('[Project] Create Budget Item', props<{ budgetItem: IBudgetItem }>());


/* ============= Update Budget Item ============= */
export const updateBudgetItem = createAction('[Project] Update Budget Item', props<{ id: number, budgetItem: IBudgetItem }>());


/* ============= Delete Budget Item ============= */
export const deleteBudgetItem = createAction('[Project] Delete Budget Item', props<{ budgetItem: IBudgetItem }>());
