import { createReducer, on, Action } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';

/* Defining the state shape */
export interface DashboadState {
  projectQty: number;
  clientQty: number;
  message?: string;
}

/* Setting the initial state */
export const initialState: DashboadState = {
  projectQty: 10,
  clientQty: 5,
  message: 'default message'
};

/* Creating the reducer function */
const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.UpdateMessage, (state, { message }) => ({
    ...state,
    message: message
  }))
);

export function reducer(state: DashboadState | undefined, action: Action) {
  return dashboardReducer(state, action);
}
