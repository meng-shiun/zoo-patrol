import { createFeatureSelector, createSelector } from '@ngrx/store';

import { DashboadState } from './dashboard.reducer';

/* Create Feature Selector */
const selectDashboardFeature = createFeatureSelector<DashboadState>('dashboard');

/* Create Selectors */
export const selectMessage = createSelector(
  selectDashboardFeature,
  (state: DashboadState) => state.message
);
