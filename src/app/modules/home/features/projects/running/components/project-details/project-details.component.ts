import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { IProjectDetails } from '@app/shared';
import { ProjectService } from '@app/modules/home/features/projects/project.service';
import * as fromProjects from '../../../store';
import * as ProjectActions from '../../../store/project.actions';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projectDetails$: Observable<IProjectDetails>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromProjects.State>) {
  }

  ngOnInit() {
    const id = +this.route.parent.snapshot.paramMap.get('id');
    this.store.dispatch(ProjectActions.loadDetailById({id: id}));

    this.projectDetails$ = this.store.pipe(select(fromProjects.getProjectDetail));
  }

}
