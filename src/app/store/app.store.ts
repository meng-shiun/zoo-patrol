import { ActionReducerMap } from '@ngrx/store';

import * as fromDashboard from '@app/modules/home/dashboard/store/dashboard.reducer';

export interface AppState {
  dashboard: fromDashboard.State;
}

export const reducers: ActionReducerMap<AppState> = {
  dashboard: fromDashboard.reducer
};
