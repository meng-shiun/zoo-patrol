import { Component, OnInit, Input } from '@angular/core';

import { IProjectDetails } from '@app/shared';

@Component({
  selector: 'app-details-edit',
  templateUrl: './details-edit.component.html',
  styleUrls: ['./details-edit.component.scss']
})
export class DetailsEditComponent implements OnInit {
  @Input() details: IProjectDetails;

  constructor() {}

  ngOnInit() {
  }

}
