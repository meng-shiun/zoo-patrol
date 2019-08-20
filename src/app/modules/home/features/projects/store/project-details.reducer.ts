import { IProjectDetails } from '@app/shared';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProjectActions from './project.actions';

// Defining the state shape
export interface ProjectDetailState {
  projectId: number | null;
  details: IProjectDetails;
  error: string;
}

// Setting the initial state
export const initialDetailState: ProjectDetailState = {
  projectId: null,
  details: null,
  error: ''
};

// Creating the reducer function
const projectDetailsReducer = createReducer(
  initialDetailState,
  on(ProjectActions.loadDetailByIdSuccess, (state, { result }) => ({
    ...state,
    details: result,
    error: ''
  })),
  on(ProjectActions.loadDetailByIdFail, (state, { error }) => ({
    ...state,
    details: null,
    error: error
  }))
);

export function detaildReducer(state: ProjectDetailState | undefined, action: Action) {
  return projectDetailsReducer(state, action);
}
