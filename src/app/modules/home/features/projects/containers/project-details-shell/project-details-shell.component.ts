import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { IProjectDetails } from '@app/shared';
import * as fromProjects from '../../store';
import * as ProjectActions from '../../store/project.actions';

@Component({
  selector: 'app-project-details-shell',
  templateUrl: './project-details-shell.component.html',
  styleUrls: ['./project-details-shell.component.scss']
})
export class ProjectDetailsShellComponent implements OnInit, OnDestroy {
  projectDetails$: Observable<IProjectDetails>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromProjects.ProjectState>) {
      const id = +this.route.parent.snapshot.paramMap.get('id');
      this.store.dispatch(ProjectActions.loadDetailById({id: id}));
  }

  ngOnInit() {
    this.projectDetails$ = this.store.pipe(select(fromProjects.selectProjectDetails));
  }

  update(details: IProjectDetails): void {
    this.store.dispatch(ProjectActions.updateProjectDetails({ projectDetails: details }));
  }

  ngOnDestroy(): void {
    this.store.dispatch(ProjectActions.resetProjectDetails());
  }

}
