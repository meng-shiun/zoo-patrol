import { IProject } from '@app/shared';
import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ProjectActions from './project.actions';

// Defining the state shape with Entity
export interface AllProjectState extends EntityState<IProject> {
  // additional entities state properties
  selectedProjectId: number;
  error: string;
}

export function sortById(a: IProject, b: IProject) {
  return a.id - a.id;
}

export const adapter: EntityAdapter<IProject> = createEntityAdapter<IProject>({
  sortComparer: sortById
});

// Setting the initial state with Entity
export const initialProjectState: AllProjectState = adapter.getInitialState({
   selectedProjectId: null,
   error: ''
});

// Creating the reducer function with Entity
const allProjectsReducer = createReducer(
  initialProjectState,
  on(ProjectActions.loadAllInfoSuccess, (state, { result }) => {
    return adapter.addAll(result, state);
  }),
  on(ProjectActions.loadAllInfoFail, (state, { error }) => ({
    ...state,
    error: 'Load Projects failed' + error
  }))
);

export function projectAllReducer(state: AllProjectState | undefined, action: Action) {
  return allProjectsReducer(state, action);
}

export const getSelectedProjectId = (state: AllProjectState) => state.selectedProjectId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

// select the array of project ids
export const selectProjectIds = selectIds;

// select the dictionary of project entities
export const selectProjectEntities = selectEntities;

// select the array of projects
export const selectAllProjects = selectAll;

// select the total project count
export const selectProjectTotal = selectTotal;


export const getSelectedId = (state: AllProjectState) => state.selectedProjectId;
export const getError = (state: AllProjectState) => state.error;