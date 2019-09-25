import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';

import * as fromRoot from '@app/store/app.store';

import * as fromAllProjects from './project-all.reducer';
import * as fromProjectDetails from './project-details.reducer';
import * as fromProjectBudgetField from './project-budgetField.reducer';

/* ===============================================
    Setting up State for lazy loading module
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

/* Create Child Selectors in All Projects */
export const selectAllProjects = createSelector(
  selectAllProjectsState,
  fromAllProjects.selectAllProjects
);

export const selectAllProjectsError = createSelector(
  selectAllProjectsState,
  fromAllProjects.getError
);

export const selectProjectEntities = createSelector(
  selectAllProjectsState,
  fromAllProjects.selectProjectEntities
);

export const selectProjectId = createSelector(
  selectAllProjectsState,
  fromAllProjects.getSelectedId
);

export const selectProject = createSelector(
  selectProjectEntities,
  selectProjectId,
  (entities, id) => entities[id]
);

export const selectAllProjectIds = createSelector(
  selectAllProjectsState,
  fromAllProjects.selectProjectIds
);

export const selectAllProjectsLoaded = createSelector(
  selectAllProjectsState,
  fromAllProjects.getLoaded
);


/* Create Child Selectors in Project Details */
export const selectDetailEntities = createSelector(
  selectProjectDetailState,
  fromProjectDetails.selectEntities
);

export const selectDetailSelectedId = createSelector(
  selectProjectDetailState,
  fromProjectDetails.getSelectedId
);

export const selectProjectDetails = createSelector(
  selectDetailEntities,
  selectDetailSelectedId,
  (entities, id) => entities[id]
);

export const selectProjectDetailsLoaded = createSelector(
  selectProjectDetailState,
  fromProjectDetails.getLoaded
);

/* Create Child Selectors in Project Budget Field */
export const getProjectBudgetField = createSelector(
  selectProjectBudgetFieldState,
  (state: fromProjectBudgetField.ProjectBudgetFieldState) => state.budgetField
);

export const getBudgetFieldTotalHours = createSelector(
  selectProjectBudgetFieldState,
  (state: fromProjectBudgetField.ProjectBudgetFieldState) => state.totalHours
);

export const getBudgetFieldTotalBudget = createSelector(
  selectProjectBudgetFieldState,
  (state: fromProjectBudgetField.ProjectBudgetFieldState) => state.totalBudget
);

export const selectProjectBudgetFieldLoaded = createSelector(
  selectProjectBudgetFieldState,
  fromProjectBudgetField.getLoaded
);

/* ================================================
                      Reducers
   ================================================ */
export const reducers: ActionReducerMap<ProjectModuleState> = {
  projects: fromAllProjects.projectAllReducer,
  details: fromProjectDetails.detailsReducer,
  budgetField: fromProjectBudgetField.budgetFieldReducer
};
