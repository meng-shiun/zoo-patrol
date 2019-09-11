import { Component, OnInit, Input, Output } from '@angular/core';

import {
  IProject,
  CardKeyValue
} from '@app/shared';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: IProject[];
  @Input() errorMessage: string;

  cardInfo = new Map();

  constructor() {
    this.cardInfo.set(0, CardKeyValue.create('Client', 'client'));
    this.cardInfo.set(1, CardKeyValue.create('Status', 'status', 'projectStatus' ));
    this.cardInfo.set(2, CardKeyValue.create('Deadline', 'deadline'));
    this.cardInfo.set(3, CardKeyValue.create('Manager', 'manager'));
  }

  ngOnInit() {
  }

}
