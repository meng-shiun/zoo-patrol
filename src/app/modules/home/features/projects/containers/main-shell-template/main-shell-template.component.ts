import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { IProject } from '@app/shared';
import * as fromProjects from '../../store';
import * as ProjectActions from '../../store/project.actions';

@Component({
  selector: 'app-main-shell-template',
  templateUrl: './main-shell-template.component.html',
  styleUrls: ['./main-shell-template.component.scss']
})
export class MainShellTemplateComponent implements OnInit {
  @Input() title:         string;
  @Input() category:      string;
  @Input() exludedStatus: number[];
  @Input() hideManagers:  boolean;
  @Input() searchManager: string | null;

  allProjectsLoaded$: Observable<boolean>;
  projects$:          Observable<IProject[]>;
  errorMessage$:      Observable<string>;

  searchName    = '';
  searchClient  = '';
  searchStatus  = '';

  constructor(private store: Store<fromProjects.ProjectState>) {
    this.store.dispatch(ProjectActions.resetProjects());
    this.store.dispatch(ProjectActions.loadAllInfo());
  }

  ngOnInit() {
    this.allProjectsLoaded$ = this.store.pipe(select(fromProjects.selectAllProjectsLoaded));
    this.projects$          = this.store.pipe(select(fromProjects.selectAllProjects));
    this.errorMessage$      = this.store.pipe(select(fromProjects.selectAllProjectsError));
  }

  getSearchName(evt): void {
    this.searchName = evt;
  }

  getSearchClient(evt): void {
    this.searchClient = evt;
  }

  getSearchManager(evt): void {
    this.searchManager = evt;
  }

  getSearchStatus(evt): void {
    this.searchStatus = evt;
  }
}
