import { Pipe, PipeTransform } from '@angular/core';

import { IProject } from './interfaces';

@Pipe({
  name: 'projectFilter'
})
export class ProjectFilterPipe implements PipeTransform {
  transform(
    projects: IProject[],
    filterBySearch?: string,
    filterByClient?: string,
    filterByManager?: string,
    filterByStatus?: number
  ): IProject[] {

    if (!projects) {
      return [];
    }

    // Filter by name search
    projects = filterBySearch
      ? [...projects.filter(p => p.name.toLowerCase().includes(filterBySearch.toLowerCase()))]
      : projects;

    // Filter by client
    projects = filterByClient
    ? [...projects.filter(p => p.client === filterByClient)]
    : projects;

    // Filter by manager
    projects = filterByManager
    ? [...projects.filter(p => p.manager === filterByManager)]
    : projects;

    // Filter by status
    projects = filterByStatus
    ? [...projects.filter(p => p.status === filterByStatus)]
    : projects;

    return projects;
  }
}
