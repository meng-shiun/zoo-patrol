/**
 * Projects Budget Data stores budgets details (budget/type/hour) of projects
 */
import { IProjectBudgetField } from '@app/shared';

export const projectsBudgetData: IProjectBudgetField[] = [
  {
    id: 1,
    budgetItems: [
      {
        budget: 2000,
        type: 'Marketing',
        hours: 20
      },
      {
        budget: 500,
        type: 'Development',
        hours: 5
      }
    ]
  },
  {
    id: 2,
    budgetItems: [
      {
        budget: 5000,
        type: 'Development',
        hours: 40
      }
    ]
  },
  {
    id: 3,
    budgetItems: [
      {
        budget: 4000,
        type: 'Design',
        hours: 40
      },
      {
        budget: 1000,
        type: 'Development',
        hours: 10
      }
    ]
  },
  {
    id: 4,
    budgetItems: []
  },
  {
    id: 5,
    budgetItems: [
      {
        budget: 2000,
        type: 'Design',
        hours: 20
      },
      {
        budget: 500,
        type: 'Development',
        hours: 5
      }
    ]
  },
  {
    id: 6,
    budgetItems: []
  },
  {
    id: 7,
    budgetItems: [
      {
        budget: 8000,
        type: 'Marketing',
        hours: 80
      }
    ]
  },
  {
    id: 8,
    budgetItems: []
  },
  {
    id: 9,
    budgetItems: []
  },
  {
    id: 10,
    budgetItems: [
      {
        budget: 2000,
        type: 'Design',
        hours: 20
      },
      {
        budget: 500,
        type: 'Development',
        hours: 5
      }
    ]
  }
];
