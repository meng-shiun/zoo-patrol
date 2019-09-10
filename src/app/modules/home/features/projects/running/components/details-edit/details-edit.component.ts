import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IProjectDetails } from '@app/shared';

@Component({
  selector: 'app-details-edit',
  templateUrl: './details-edit.component.html',
  styleUrls: ['./details-edit.component.scss']
})
export class DetailsEditComponent implements OnInit {
  @Input() details: IProjectDetails;

  editDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.editDetailsForm = this.fb.group({

    });
  }

}
