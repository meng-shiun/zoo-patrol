/**
 * Projects Budget Data stores budgets details (budget/type/hour) of projects
 */
import { IProjectBudgetField } from '@app/shared';

export const projectsBudgetData: IProjectBudgetField[] = [
  {
    project_id: 1,
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
    project_id: 2,
    total: [
      {
        budget: 5000,
        type: 'Development',
        hours: 40
      }
    ]
  },
  {
    project_id: 3,
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
    project_id: 4,
    total: []
  },
  {
    project_id: 5,
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
    project_id: 6,
    total: []
  },
  {
    project_id: 7,
    total: [
      {
        budget: 8000,
        type: 'Development',
        hours: 80
      }
    ]
  },
  {
    project_id: 8,
    total: []
  },
  {
    project_id: 9,
    total: []
  },
  {
    project_id: 10,
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
