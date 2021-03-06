import { createAction, props } from '@ngrx/store';

import { IProject, IProjectDetails, IProjectBudgetField, IBudgetItem } from '@app/shared';


/* ============= Load Projects ============= */
export const loadAllInfo = createAction('[Projects] Load Projects Info');

export const loadAllInfoSuccess = createAction('[Projects] Load Projects Info Success', props<{ result: IProject[] }>());

export const loadAllInfoFail = createAction('[Projects] Load Projects Info Fail', props<{ error: string }>());


/* ============= Reset Projects ============= */
export const resetProjects = createAction('[Projects] Reset Projects');


/* ============= Load Project ============= */
export const loadProject = createAction('[Projects] Load Project', props<{ id: number }>());

export const loadProjectSuccess = createAction('[Projects] Load Project Success', props<{ project: IProject }>());

export const loadProjectFail = createAction('[Projects] Load Project Fail', props<{ error: string }>());

/* ============= Delete Project ============= */
export const deleteProject = createAction('[Projects] Delete Project', props<{ id: number }>());

export const deleteProjectSuccess = createAction('[Projects] Delete Project Success', props<{ id: number }>());

export const deleteProjectFail = createAction('[Projects] Delete Project Fail', props<{ error: string }>());


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
export const loadTotalHours = createAction('[Project] Load Project BudgetField Total Hours');

export const updateTotalHours = createAction(
  '[Project] Update Project BudgetField Total Hours', props<{ preHours: number, curHours: number }>());


/* ============= Project BudgetField Total budget ============= */
export const loadTotalBudget = createAction('[Project] Load Project BudgetField Total Budget');

export const updateTotalBudget = createAction(
  '[Project] Update Project BudgetField Total Budget', props<{ preBudget: number, curBudget: number }>());


/* ============= Create Project Bundle ============= */
export const createProjectBundle = createAction(
  '[Project] Create Project Bundle',
  props<{ project: IProject, projectDetails: IProjectDetails, budgetField: IProjectBudgetField }>());


/* ============= Create Project ============= */
export const createProject = createAction('[Project] Create Project', props<{ result: IProject }>());

export const createProjectSuccess = createAction('[Project] Create Project Success', props<{ result: IProject }>());

export const createProjectFail = createAction('[Project] Create Project Fail', props<{ error: string }>());


/* ============= Update Project ============= */
export const updateProject = createAction('[Project] Update Project', props<{ project: IProject }>());


/* ============= Create Project Details ============= */
export const createProjectDetails = createAction('[Project] Create Project Details', props<{ result: IProjectDetails }>());

export const createProjectDetailsSuccess = createAction('[Project] Create Project Details Success', props<{ result: IProjectDetails }>());

export const createProjectDetailsFail = createAction('[Project] Create Project Details Fail', props<{ error: string }>());


/* ============= Update Project Details ============= */
export const updateProjectDetails = createAction('[Project] Update Project Details', props<{ projectDetails: IProjectDetails }>());

export const updateProjectDetailsSuccess = createAction(
  '[Project] Update Project Details Success', props<{ projectDetails: IProjectDetails }>());

export const updateProjectDetailsFail = createAction('[Project] Update Project Details Fail', props<{ error: string }>());


/* ============= Reset Project Details ============= */
export const resetProjectDetails = createAction('[Projects] Reset Project Details');


/* ============= Create Budget Field ============= */
export const createBudgetField = createAction('[Project] Create Budget Field', props<{ budgetField: IProjectBudgetField }>());

export const createBudgetFieldSuccess = createAction(
  '[Project] Create Budget Field Success', props<{ budgetField: IProjectBudgetField }>());

export const createBudgetFieldFail = createAction('[Project] Create Budget Field Fail', props<{ error: string }>());


/* ============= Update Budget Field ============= */
export const updateBudgetField = createAction('[Project] Update Budget Field');

export const updateBudgetFieldSuccess = createAction(
  '[Project] Update Budget Field Success', props<{ id: number, budgetItems: IBudgetItem[] }>());

export const updateBudgetFieldFail = createAction(
  '[Project] Update Budget Field Fail', props<{ error: string }>());


/* ============= Create Budget Item ============= */
export const createBudgetItem = createAction('[Project] Create Budget Item', props<{ budgetItem: IBudgetItem }>());


/* ============= Update Budget Item ============= */
export const updateBudgetItem = createAction('[Project] Update Budget Item', props<{ id: number, budgetItem: IBudgetItem }>());


/* ============= Delete Budget Item ============= */
export const deleteBudgetItem = createAction('[Project] Delete Budget Item', props<{ budgetItem: IBudgetItem }>());


/* ============= Reset Budget Field ============= */
export const resetBudgetField = createAction('[Project] Reset Budget Field');
