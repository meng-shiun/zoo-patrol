import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

import { IProject, IProjectDetails } from '@app/shared';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'api/projects'; // URL to web api
  private projectsDetailsUrl = 'api/projectsDetails';
  private projectsBudgetUrl = 'api/projectsBudget';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.projectsUrl);
  }

  // TODO: Rewrite with NgRx effect (remove getProject method in service)
  getProject(id: number): Observable<IProject> {
    return this.http.get<any>(this.projectsUrl).pipe(
      map(projects => projects.find(p => p['project_id'] === id))
    );
  }

  // TODO: Rewrite with NgRx effect (remove getProject method in service)
  // TODO: Log error if the id doesn't exist
  getProjectDetails(id: number): Observable<IProjectDetails> {
    return this.http.get<any>(this.projectsDetailsUrl).pipe(
      map(projects => projects.find(p => p['project_id'] === id))
    );
  }
}
