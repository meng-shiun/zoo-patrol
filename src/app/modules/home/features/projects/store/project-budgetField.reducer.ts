import { IProjectBudgetField } from '@app/shared';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProjectActions from './project.actions';

// Defining the state shape
export interface ProjectBudgetFieldState {
  projectId: number | null;
  budgetField: IProjectBudgetField;
  error: string;
}

// Setting the initial state
export const initialBudgetFieldState: ProjectBudgetFieldState = {
  projectId: null,
  budgetField: null,
  error: ''
};

// Creating the reducer function
const projectBudgetFieldReducer = createReducer(
  initialBudgetFieldState,
  on(ProjectActions.loadBudgetFieldByIdSuccess, (state, { result }) => ({
    ...state,
    budgetField: result,
    error: ''
  })),
  on(ProjectActions.loadBudgetFieldByIdFail, (state, { error }) => ({
    ...state,
    budgetField: null,
    error: error
  }))
);

export function budgetFieldReducer(state: ProjectBudgetFieldState | undefined, action: Action) {
  return projectBudgetFieldReducer(state, action);
}
