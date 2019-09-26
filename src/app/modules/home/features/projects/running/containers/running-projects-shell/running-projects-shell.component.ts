import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { IProject } from '@app/shared';
import * as fromProjects from '../../../store';
import * as ProjectActions from '../../../store/project.actions';

@Component({
  selector: 'app-running-projects-shell',
  templateUrl: './running-projects-shell.component.html',
  styleUrls: ['./running-projects-shell.component.scss']
})
export class RunningProjectsShellComponent implements OnInit, OnDestroy {
  allProjectsLoaded$: Observable<boolean>;
  projects$:          Observable<IProject[]>;
  errorMessage$:      Observable<string>;

  constructor(private store: Store<fromProjects.ProjectState>) {
    this.store.dispatch(ProjectActions.resetProjects());
    this.store.dispatch(ProjectActions.loadAllInfo());
  }

  ngOnInit() {
    this.allProjectsLoaded$ = this.store.pipe(select(fromProjects.selectAllProjectsLoaded));
    this.projects$          = this.store.pipe(select(fromProjects.selectAllProjects));
    this.errorMessage$      = this.store.pipe(select(fromProjects.selectAllProjectsError));
  }

  deleteProject(id: number) {
    this.store.dispatch(ProjectActions.deleteProject({ id }));
  }

  deleteAll() {
    this.store.dispatch(ProjectActions.resetProjects());
  }

  ngOnDestroy(): void {
  }
}
