import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromDashboard from './dashboard.reducer';

/* Create Feature Selector */
export const selectDashboardFeature = createFeatureSelector<fromDashboard.State>('dashboard');

/* Create Selectors */
export const selectMessage = createSelector(
  selectDashboardFeature,
  (state: fromDashboard.State) => state.message
);
