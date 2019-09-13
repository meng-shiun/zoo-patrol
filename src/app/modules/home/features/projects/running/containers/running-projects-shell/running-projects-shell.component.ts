import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable, of } from 'rxjs';

import { IProject } from '@app/shared';
import * as fromProjects from '../../../store';
import * as ProjectActions from '../../../store/project.actions';

@Component({
  selector: 'app-running-projects-shell',
  templateUrl: './running-projects-shell.component.html',
  styleUrls: ['./running-projects-shell.component.scss']
})
export class RunningProjectsShellComponent implements OnInit, OnDestroy {
  projects$: Observable<IProject[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromProjects.ProjectState>) { }

  ngOnInit() {
    this.store.dispatch(ProjectActions.loadAllInfo());

    this.projects$      = this.store.pipe(select(fromProjects.selectAllProjects));
    this.errorMessage$  = this.store.pipe(select(fromProjects.selectAllProjectsError));
  }

  addProject(): void {
    // TODO: move create projects/projectDetails to sub nav
    // When a new project is created, details/budget/planning ... are also created
    const newProject: IProject = {
      id: null,
      client: 'New Client',
      name: 'New Client Name',
      manager: 'Manager',
      status: 140,
      deadline: '11/6/2000'
    };

    this.store.dispatch(ProjectActions.createProject({ result: newProject }));
  }

  deleteProject(id: number) {
    console.log('delete project 4');
  }

  ngOnDestroy(): void {
   this.store.dispatch(ProjectActions.resetProjects());
  }
}
