import { IProject } from '@app/shared';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProjectActions from './project.actions';

// Defining the state shape
export interface AllProjectState {
  projects: IProject[];
  error: string;
}

// Setting the initial state
export const initialProjectState: AllProjectState = {
  projects: [],
  error: ''
};

// Creating the reducer function
const allProjectsReducer = createReducer(
  initialProjectState,
  on(ProjectActions.loadAllInfoSuccess, (state, { result }) => ({
    ...state,
    projects: result,
    error: ''
  })),
  on(ProjectActions.loadAllInfoFail, (state, { error }) => ({
    ...state,
    projects: [],
    error: error
  }))
);

export function projectAllReducer(state: AllProjectState | undefined, action: Action) {
  return allProjectsReducer(state, action);
}
