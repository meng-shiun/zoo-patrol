import { createReducer, on, Action } from '@ngrx/store';

import * as DashboardActions from './dashboard.actions';

/* Defining the state shape */
export interface State {
  projectQty: number;
  clientQty: number;
  message?: string;
}

/* Setting the initial state */
export const initialState: State = {
  projectQty: 10,
  clientQty: 5,
  message: 'Hello!'
};

/* Creating the reducer function */
const dashboardReducer = createReducer(
  initialState,
  on(DashboardActions.updateMessage, (state, { message }) => ({
    ...state,
    message: message
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return dashboardReducer(state, action);
}
