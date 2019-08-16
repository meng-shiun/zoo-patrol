import { createReducer, on, Action } from '@ngrx/store';

import { IProject } from '@app/shared';
import * as ProjectActions from './project.actions';

/* Defining the state shape */
export interface State {
  currentProjectId: number | null;
  projects: IProject[];
}

/* Setting the initial state */
export const initialState: State = {
  currentProjectId: 0,
  projects: []
};

/* Creating the reducer function */
const projectReducer = createReducer(
  initialState,
  on(ProjectActions.loadAllSuccess, (state, { payload }) => ({
    ...state,
    projects: payload
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return projectReducer(state, action);
}
