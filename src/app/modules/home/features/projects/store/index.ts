import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '@app/store/app.store';

import * as fromAllProjects from './project-all.reducer';
import * as fromProjectDetails from './project-details.reducer';
import * as fromProjectBudgetField from './project-budgetField.reducer';

/* ===============================================
    Setting up State for lazing loading module
   =============================================== */
interface ProjectModuleState {
  projects: fromAllProjects.AllProjectState;
  details: fromProjectDetails.ProjectDetailState;
  budgetField: fromProjectBudgetField.ProjectBudgetFieldState;
}

export interface ProjectState extends fromRoot.AppState {
  projectModule: ProjectModuleState;
}

/* ============ Feature Selector ============== */
export const selectProjectModuleState = createFeatureSelector<ProjectModuleState>('projectModule');


/* ================================================
                  Root Selectors
   ================================================ */

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


/* ================================================
                  Child Selectors
   ================================================ */

// Create Child Selectors in All Projects
export const selectAllProjects = createSelector(
  selectAllProjectsState,
  fromAllProjects.selectAllProjects
);

export const selectAllProjectsError = createSelector(
  selectAllProjectsState,
  fromAllProjects.getError
);

// Create Child Selectors in Project Details
export const getProjectDetail = createSelector(
  selectProjectDetailState,
  (state: fromProjectDetails.ProjectDetailState) => state.details
);

// Create Child Selectors in Project Budget Field
export const getProjectBudgetField = createSelector(
  selectProjectBudgetFieldState,
  (state: fromProjectBudgetField.ProjectBudgetFieldState) => state.budgetField
);

/* ================================================
                      Reducers
   ================================================ */
export const reducers: ActionReducerMap<ProjectModuleState> = {
  projects: fromAllProjects.projectAllReducer,
  details: fromProjectDetails.detailsReducer,
  budgetField: fromProjectBudgetField.budgetFieldReducer
};
