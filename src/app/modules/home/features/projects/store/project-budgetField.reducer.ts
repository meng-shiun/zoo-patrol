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
    error: error
  })),
  on(ProjectActions.createBudgetItem, (state, { budgetItem }) => {
    return {
      ...state,
      budgetField: {
        id: state.budgetField.id,
        budgetItems: [...state.budgetField.budgetItems, budgetItem]
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
    const updatedBudgetItem = state.budgetField.budgetItems.filter((item, i) => {
      const arr = Object.entries(budgetItem);
      return (i === id) ? arr.map(([key, val]) => (item[key] = val)) : item;
    });

    return {
      ...state,
      budgetField: {
        id: state.budgetField.id,
        budgetItems: updatedBudgetItem
      }
    };
  }),
  on(ProjectActions.loadTotalHours, (state, { hoursArr }) => {
    const total =
      (hoursArr.length > 1) ? hoursArr.reduce((accum, cur) => (accum.hours + cur.hours)) :
      (hoursArr.length === 1) ? hoursArr[0].hours : 0;

    return {
      ...state,
      totalHours: total
    };
  }),
);

export function budgetFieldReducer(state: ProjectBudgetFieldState | undefined, action: Action) {
  return projectBudgetFieldReducer(state, action);
}
