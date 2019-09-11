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
  statusList: string[] = projectStatusData.map(s => `${s.id}. ${s.status}`);

  editDetailsForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.editDetailsForm = this.fb.group({
      client: [this.details.client, [Validators.required]],
      subClient: [this.details.sub_clinet, [Validators.required]],
      projectStatus: [
        `${this.details.status.id}. ${this.details.status.status}`,
        [Validators.required]
      ],
      manager: [this.details.manager, [Validators.required]]
    });
  }

}
