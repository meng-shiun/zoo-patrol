import { Component, OnInit } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ProjectService } from '@app/core/services/project.service';
import { IProject } from '@app/shared';

@Component({
  selector: 'app-running-projects-shell',
  templateUrl: './running-projects-shell.component.html',
  styleUrls: ['./running-projects-shell.component.scss']
})
export class RunningProjectsShellComponent implements OnInit {
  projects$: Observable<IProject[]>;

  constructor(private projectService: ProjectService) {
    // TODO: refactor with NgRx & unsubscribe
    this.projects$ = this.projectService.getProjects();
  }

  ngOnInit() {
  }

}
