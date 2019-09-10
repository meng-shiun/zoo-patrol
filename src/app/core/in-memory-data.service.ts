import { InMemoryDbService } from 'angular-in-memory-web-api';

import {
  projectsData,
  projectsDetailsData,
  projectsBudgetData,
  clientsData,
  projectManagersData,
  projectStatusData
} from './data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = projectsData;
    const projectsDetails = projectsDetailsData;
    const projectsBudget = projectsBudgetData;
    const projectStatus = projectStatusData;
    const projectManagers = projectManagersData;
    // TODO:
    // const projectPlanning = projectPlanningData;

    const clients = clientsData;

    return {
      projects,
      projectsDetails,
      projectsBudget,
      projectStatus,
      projectManagers,
      clients
    };
  }
}
