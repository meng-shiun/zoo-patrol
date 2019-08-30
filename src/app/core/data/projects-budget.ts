/**
 * Projects Budget Data stores budgets details (budget/type/hour) of projects
 */
import { IProjectBudgetField } from '@app/shared';

export const projectsBudgetData: IProjectBudgetField[] = [
  {
    id: 1,
    total: [
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
    total: [
      {
        budget: 5000,
        type: 'Development',
        hours: 40
      }
    ]
  },
  {
    id: 3,
    total: [
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
    total: []
  },
  {
    id: 5,
    total: [
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
    total: []
  },
  {
    id: 7,
    total: [
      {
        budget: 8000,
        type: 'Marketing',
        hours: 80
      }
    ]
  },
  {
    id: 8,
    total: []
  },
  {
    id: 9,
    total: []
  },
  {
    id: 10,
    total: [
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
