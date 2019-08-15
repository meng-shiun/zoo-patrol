import * as fromDashboard from '@app/modules/home/dashboard/store/dashboard.reducer';

export interface AppState {
  dashboard: fromDashboard.State;
}

export const reducers = {
  dashboard: fromDashboard.reducer
};