import { Component, OnInit } from '@angular/core';
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
export class RunningProjectsShellComponent implements OnInit {
  projects$: Observable<IProject[]>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<fromProjects.ProjectState>) { }

  ngOnInit() {
    this.store.dispatch(ProjectActions.loadAllInfo());

    this.projects$      = this.store.pipe(select(fromProjects.getAllProjects));
    this.errorMessage$  = this.store.pipe(select(fromProjects.loadAllProjectsError));
  }

}
