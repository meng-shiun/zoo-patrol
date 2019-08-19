import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import { IProject, IProjectDetails } from '@app/shared';
import * as ProjectActions from './project.actions';

/* Defining the state shape */
export interface State {
  currentProjectId: number | null;
  projects: IProject[];
  selectedProject: IProjectDetails;
  error: string;
}

// TODO: Implement ngrx/entity
// Example...
// export interface ProjectState extends EntityState<IProject> {
//   // additional entities state property
//   selectedProjectId: number | null;
//   loading: boolean;
//   error: string;
// }

/* Setting the initial state */
export const initialState: State = {
  currentProjectId: 0,
  projects: [],
  selectedProject: null,
  error: ''
};

/* Creating the reducer function */
const projectReducer = createReducer(
  initialState,
  on(ProjectActions.loadAllInfoSuccess, (state, { result }) => ({
    ...state,
    projects: result,
    error: ''
  })),
  on(ProjectActions.loadAllInfoFail, (state, { error }) => ({
    ...state,
    projects: [],
    error: error
  })),
  on(ProjectActions.loadDetailByIdSuccess, (state, { result }) => ({
    ...state,
    projects: [],
    selectedProject: result,
    error: ''
  })),
  on(ProjectActions.loadDetailByIdFail, (state, { error }) => ({
    ...state,
    projects: [],
    selectedProject: null,
    error: error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return projectReducer(state, action);
}
