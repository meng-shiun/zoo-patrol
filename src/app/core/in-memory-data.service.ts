import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects = [
      { id: 1, name: 'Project 1'},
      { id: 2, name: 'Project 2'},
      { id: 3, name: 'Project 3'}
    ];

    const clients = [
      { id: 1, name: 'Client 1'},
      { id: 2, name: 'Client 2'},
      { id: 3, name: 'Client 3'}
    ];
    return {projects, clients};
  }
}
