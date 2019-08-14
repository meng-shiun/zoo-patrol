import { InMemoryDbService } from 'angular-in-memory-web-api';

import {
  projectsData,
  projectsDetailsData,
  projectsBudgetData
} from './data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = projectsData;
    const projectsDetails = projectsDetailsData;
    const projectsBudget = projectsBudgetData;
    // TODO:
    // const projectPlanning = projectPlanningData;

    // TODO: create clients data
    const clients = [
      { id: 1, name: 'Client 1'},
      { id: 2, name: 'Client 2'},
      { id: 3, name: 'Client 3'}
    ];
    return {
      projects,
      projectsDetails,
      projectsBudget,
      clients
    };
  }
}
