import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IProject } from '@app/shared';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projectsUrl = 'api/projects'; // URL to web api

  constructor(private http: HttpClient) { }

  getProjects(): Observable<IProject[]> {
    return this.http.get<IProject[]>(this.projectsUrl);
  }

  // TODO: Rewrite with NgRx effect (remove getProject method in service)
  getProject(id: number): Observable<IProject> {
    return this.http.get<IProject>(this.projectsUrl).pipe(
      map(x => x[id - 1])
    );
  }
}
