import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromProjects from '../../store';
import * as ProjectActions from '../../store/project.actions';

@Component({
  selector: 'app-running-projects-shell',
  templateUrl: './running-projects-shell.component.html',
  styleUrls: ['./running-projects-shell.component.scss']
})
export class RunningProjectsShellComponent implements OnInit {
  constructor(private store: Store<fromProjects.ProjectState>) { }

  ngOnInit() {
  }

  deleteProject(id: number) {
    this.store.dispatch(ProjectActions.deleteProject({ id }));
  }
}
