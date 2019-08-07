import { InMemoryDbService } from 'angular-in-memory-web-api';

import { projectsData } from './data/projects-data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = projectsData;
    // TODO:
    // const projectDetails = projectDetailsData;
    // const projectPlanning = projectPlanningData;
    // const projectBudget = projectBudgetData;

    // TODO: create clients data
    const clients = [
      { id: 1, name: 'Client 1'},
      { id: 2, name: 'Client 2'},
      { id: 3, name: 'Client 3'}
    ];
    return {projects, clients};
  }
}
