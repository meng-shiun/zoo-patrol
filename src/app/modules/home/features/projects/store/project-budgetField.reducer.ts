import { IProjectBudgetField, IBudgetItem } from '@app/shared';
import { createReducer, on, Action } from '@ngrx/store';

import * as ProjectActions from './project.actions';

// Defining the state shape
export interface ProjectBudgetFieldState {
  projectId: number | null;
  totalHours: number | null;
  totalBudget: number | null;
  budgetField: IProjectBudgetField;
  error: string;
}

// Setting the initial state
export const initialBudgetFieldState: ProjectBudgetFieldState = {
  projectId: null,
  totalHours: 0,
  totalBudget: 0,
  budgetField: null,
  error: ''
};

// Creating the reducer function
const projectBudgetFieldReducer = createReducer(
  initialBudgetFieldState,
  on(ProjectActions.loadBudgetFieldByIdSuccess, (state, { result }) => ({
    ...state,
    projectId: result.id,
    budgetField: result,
    error: ''
  })),
  on(ProjectActions.loadBudgetFieldByIdFail, (state, { error }) => ({
    ...state,
    budgetField: null,
    error
  })),
  on(ProjectActions.createBudgetFieldSuccess, (state, { budgetField }) => ({
    ...state,
    budgetField: budgetField,
    error: ''
  })),
  on(ProjectActions.createBudgetFieldFail, (state, { error }) => ({
    ...state,
    error
  })),
  on(ProjectActions.updateBudgetFieldSuccess, (state, { id, budgetItems }) => ({
    ...state,
    budgetField: {
      id,
      budgetItems
    },
    error: ''
  })),
  on(ProjectActions.updateBudgetFieldFail, (state, { error }) => ({
    ...state,
    error
  })),
  on(ProjectActions.createBudgetItem, state => {
    const newItem: IBudgetItem = {
      budget: 0,
      type: '',
      hours: 0
    };

    return {
      ...state,
      budgetField: {
        id: state.budgetField.id,
        budgetItems: [...state.budgetField.budgetItems, newItem]
      }
    };
  }),
  on(ProjectActions.deleteBudgetItem, (state, { budgetItem }) => {
    const updatedItems = state.budgetField.budgetItems.filter(item => item !== budgetItem);

    return {
      ...state,
      budgetField: {
        id: state.budgetField.id,
        budgetItems: updatedItems
      }
    };
  }),
  on(ProjectActions.updateBudgetItem, (state, { id, budgetItem}) => {
    const updatedBudgetItems = state.budgetField.budgetItems.filter((item, i) => {
      const arr = Object.entries(budgetItem);
      return (i === id) ? arr.map(([key, val]) => (item[key] = val)) : item;
    });

    return {
      ...state,
      budgetField: {
        id: state.budgetField.id,
        budgetItems: updatedBudgetItems
      }
    };
  }),
  on(ProjectActions.loadTotalHours, (state) => {
    const total = state.budgetField.budgetItems
      .map(item => item.hours)
      .reduce((accum, cur) => (accum + cur), 0);

    return {
      ...state,
      totalHours: total
    };
  }),
  on(ProjectActions.updateTotalHours, (state, { preHours, curHours }) => ({
      ...state,
      totalHours: state.totalHours - preHours + curHours
  })),
  on(ProjectActions.loadTotalBudget, (state) => {
    const total = state.budgetField.budgetItems
    .map(item => item.budget)
    .reduce((accum, cur) => (accum + cur), 0);

    return {
      ...state,
      totalBudget: total
    };
  }),
  on(ProjectActions.updateTotalBudget, (state, { preBudget, curBudget }) => ({
    ...state,
    totalBudget: state.totalBudget - preBudget + curBudget
  })),
  on(ProjectActions.resetBudgetField, state => ({
    ...initialBudgetFieldState
  }))
);

export function budgetFieldReducer(state: ProjectBudgetFieldState | undefined, action: Action) {
  return projectBudgetFieldReducer(state, action);
}
