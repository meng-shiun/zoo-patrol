import { IProjectDetails } from '@app/shared';
import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ProjectActions from './project.actions';

// Defining the state shape
export interface ProjectDetailState extends EntityState<IProjectDetails> {
  selectedProjectId: number | null;
  error: string | null;
  loaded: boolean;
}

export const adapter: EntityAdapter<IProjectDetails> = createEntityAdapter<IProjectDetails>({
  sortComparer: false
});

// Setting the initial state
export const initialDetailState: ProjectDetailState = adapter.getInitialState({
  selectedProjectId: null,
  error: '',
  loaded: false
});

// Creating the reducer function
const projectDetailsReducer = createReducer(
  initialDetailState,
  on(ProjectActions.loadDetailById, (state, { id }) => {
    return adapter.removeAll({ ...state, selectedProjectId: id });
  }),
  on(ProjectActions.loadDetailByIdSuccess, (state, { result }) => {
    return adapter.addOne(result, { ...state, selectedProjectId: result.id, loaded: true });
  }),
  on(ProjectActions.loadDetailByIdFail, (state, { error }) => {
    return { ...state, error: error, selectedProjectId: null };
  }),
  on(ProjectActions.updateProjectDetailsSuccess, (state, { projectDetails }) => {
    const changedObj = { ...state, id: state.selectedProjectId, changes: projectDetails };
    return adapter.updateOne(changedObj, state);
  }),
  on(ProjectActions.updateProjectDetailsFail, (state, { error }) => {
    return { ...state, error: error };
  }),
  on(ProjectActions.resetProjectDetails, state => {
    return adapter.removeAll({...state, selectedProjectId: null, loaded: false });
  })
);

export function detailsReducer(state: ProjectDetailState | undefined, action: Action) {
  return projectDetailsReducer(state, action);
}

// get the selectors
export const {
  selectEntities,
  selectAll,
  selectTotal
} = adapter.getSelectors();

export const getSelectedId = (state: ProjectDetailState) => state.selectedProjectId;
export const getLoaded = (state: ProjectDetailState) => state.loaded;
