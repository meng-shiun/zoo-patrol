import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, tap, filter, catchError } from 'rxjs/operators';

import { IProject, IProjectDetails, IProjectBudgetField, IBudgetItem } from '@app/shared';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'api/projects'; // URL to web api
  private projectsDetailsUrl = 'api/projectsDetails';
  private projectsBudgetUrl = 'api/projectsBudget';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.projectsUrl);
  }

  // TODO: Add Error handler
  // TODO: Rewrite with NgRx effect (remove getProject method in service)
  getProject(id: number): Observable<IProject> {
    return this.http.get<any>(this.projectsUrl).pipe(
      map(projects => projects.find(p => p.id === id))
    );
  }

  createProject(project: IProject): Observable<IProject> {
    return this.http.post<IProject>(this.projectsUrl, project, this.httpOptions).pipe(
      tap(data => console.log(`Add Project: ${JSON.stringify(data)}`))
    );
  }

  updateProject(project: IProject): Observable<IProject> {
    const url = `${this.projectsUrl}/${project.id}`;
    return this.http.put<IProject>(url, project, this.httpOptions);
  }

  deleteProject(id: number): Observable<{}> {
    const url = `${this.projectsUrl}/${id}`;
    return this.http.delete<IProject>(url, this.httpOptions);
  }

  // Project details will be created once a project is created
  createProjectDetails(projectDetails: IProjectDetails): Observable<IProjectDetails> {
    return this.http.post<IProjectDetails>(this.projectsDetailsUrl, projectDetails, this.httpOptions);
  }

  updateProjectDetails(projectDetails: IProjectDetails): Observable<IProjectDetails> {
    const url = `${this.projectsDetailsUrl}/${projectDetails.id}`;
    return this.http.put<IProjectDetails>(url, projectDetails, this.httpOptions);
  }

  // TODO: Log error if the id doesn't exist
  getProjectDetails(id: number): Observable<IProjectDetails> {
    const url = `${this.projectsDetailsUrl}/${id}`;
    return this.http.get<IProjectDetails>(url).pipe(
      tap(project => console.log(`Project Name: ${project.name}, id: ${id}`))
    );
  }

  deleteProjectDetails(id: number): Observable<{}> {
    const url = `${this.projectsDetailsUrl}/${id}`;
    return this.http.delete<IProjectDetails>(url, this.httpOptions);
  }

  // TODO: Rewrite with NgRx effect
  // TODO: Log error if the id doesn't exist
  getProjectBudgetField(id: number): Observable<IProjectBudgetField> {
    const url = `${this.projectsBudgetUrl}/${id}`;
    return this.http.get<IProjectBudgetField>(url);
  }

  createBudgetField(newBudgetField: IProjectBudgetField): Observable<IProjectBudgetField> {
    return this.http.post<IProjectBudgetField>(this.projectsBudgetUrl, newBudgetField, this.httpOptions);
  }

  updateBudgetField(id: number, field: IProjectBudgetField): Observable<IProjectBudgetField> {
    const url = `${this.projectsBudgetUrl}/${id}`;
    return this.http.put<IProjectBudgetField>(url, field, this.httpOptions);
  }

  deleteBudgetField(id: number): Observable<{}> {
    const url = `${this.projectsBudgetUrl}/${id}`;
    return this.http.delete<IProjectBudgetField>(url, this.httpOptions);
  }

  // TODO: handleError
  handleError(err) {
    return of(err);
  }
}
