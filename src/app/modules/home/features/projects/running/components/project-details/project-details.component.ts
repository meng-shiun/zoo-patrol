import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { IProjectDetails } from '@app/shared';
import { ProjectService } from '@app/core/services/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projectDetails$: Observable<IProjectDetails>;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) {
  }

  ngOnInit() {
    const id = +this.route.parent.snapshot.paramMap.get('id');

    this.projectDetails$ = this.projectService.getProjectDetails(id);
  }

}
