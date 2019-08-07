import { Component, OnInit } from '@angular/core';

import { ProjectService } from '@app/core/services/project.service';

@Component({
  selector: 'app-running-projects-shell',
  templateUrl: './running-projects-shell.component.html',
  styleUrls: ['./running-projects-shell.component.scss']
})
export class RunningProjectsShellComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    // TODO: refactor with NgRx & unsubscribe
    this.projectService.getProjects().subscribe(products => console.log(...products));
  }

}
