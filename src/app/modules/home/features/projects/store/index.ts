import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '@app/store/app.store';
import * as fromProjects from './project.reducers';

/* ============ Setting up State for lazing loading module ============== */
interface ProjectModuleState {
  projects: fromProjects.AllProjectState;
  details: fromProjects.ProjectDetailState;
  budgetField: fromProjects.ProjectBudgetFieldState;
}

export interface ProjectState extends fromRoot.AppState {
  projectModule: ProjectModuleState;
}

/* ============ Feature Selector ============== */
export const selectProjectModuleState = createFeatureSelector<ProjectModuleState>('projectModule');


/**
 * ============ Root Selectors ==============
 */

// Create Root Selector: All Projects
export const selectAllProjectsState = createSelector(
  selectProjectModuleState,
  (state: ProjectModuleState) => state.projects
);

// Create Root Selector: Project Details Selector
export const selectProjectDetailState = createSelector(
  selectProjectModuleState,
  (state: ProjectModuleState) => state.details
);

// Create Root Selector: Project Budget Field Selector
export const selectProjectBudgetFieldState = createSelector(
  selectProjectModuleState,
  (state: ProjectModuleState) => state.budgetField
);


/**
 * ============ Child Selectors ==============
 */

// Create Child Selectors in All Projects
export const getAllProjects = createSelector(
  selectAllProjectsState,
  (state: fromProjects.AllProjectState) => state.projects
);

export const loadAllProjectsError = createSelector(
  selectAllProjectsState,
  (state: fromProjects.AllProjectState) => state.error
);

// Create Child Selectors in Project Details
export const getProjectDetail = createSelector(
  selectProjectDetailState,
  (state: fromProjects.ProjectDetailState) => state.details
);

// Create Child Selectors in Project Budget Field
export const getProjectBudgetField = createSelector(
  selectProjectBudgetFieldState,
  (state: fromProjects.ProjectBudgetFieldState) => state.budgetField
);

/* ============ Reducers ============== */
export const reducers: ActionReducerMap<ProjectModuleState> = {
  projects: fromProjects.projectAllReducer,
  details: fromProjects.detaildReducer,
  budgetField: fromProjects.budgetFieldReducer
};
