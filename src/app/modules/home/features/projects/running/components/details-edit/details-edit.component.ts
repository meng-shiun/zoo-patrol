import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IProjectDetails } from '@app/shared';
import { projectManagersData, clientsData, projectStatusData } from '@app/core/data';

@Component({
  selector: 'app-details-edit',
  templateUrl: './details-edit.component.html',
  styleUrls: ['./details-edit.component.scss']
})
export class DetailsEditComponent implements OnInit {
  @Input() details: IProjectDetails;

  clientList: string[] = clientsData.map(client => client.name);
  managerList: string[] = projectManagersData.map(manager => manager.name);
  statusList: number[] = projectStatusData.map(status => status.id);

  editDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.editDetailsForm = this.fb.group({
      client: [this.details.client, [Validators.required]],
      subClient: [this.details.sub_clinet, [Validators.required]],
      name: [this.details.name, [Validators.required]],
      projectStatus: [
        this.details.status,
        [Validators.required]
      ],
      manager: [this.details.manager, [Validators.required]]
    });
  }

  save() {
    console.log('save:', this.editDetailsForm.value);
  }

}
