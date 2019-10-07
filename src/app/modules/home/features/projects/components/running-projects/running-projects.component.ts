import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromProjects from '../../store';
import * as ProjectActions from '../../store/project.actions';

@Component({
  selector: 'app-running-projects',
  templateUrl: './running-projects.component.html',
  styleUrls: ['./running-projects.component.scss']
})
export class RunningProjectsComponent implements OnInit {
  constructor(private store: Store<fromProjects.ProjectState>) { }

  ngOnInit() {
  }

  deleteProject(id: number) {
    this.store.dispatch(ProjectActions.deleteProject({ id }));
  }
}
