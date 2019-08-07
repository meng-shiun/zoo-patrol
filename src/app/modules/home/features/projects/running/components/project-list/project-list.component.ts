import { Component, OnInit, Input } from '@angular/core';

import { IProject } from '@app/shared';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: IProject[];

  constructor() { }

  ngOnInit() {
  }

}
