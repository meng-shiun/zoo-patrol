import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '@app/store/app.store';
import * as fromProjects from './project.reducer';

/* Setting up State for lazing loading module */
export interface State extends fromRoot.AppState {
  projects: fromProjects.State;
}

/* Create Feature Selector */
export const selectProjectsFeature = createFeatureSelector<fromProjects.State>('projects');

/* Create Selectors */
export const getAllProjects = createSelector(
  selectProjectsFeature,
  (state: fromProjects.State) => state.projects
);

export const getError = createSelector(
  selectProjectsFeature,
  (state: fromProjects.State) => state.error
);
