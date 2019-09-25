import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { IProject, IProjectDetails } from '@app/shared';
import {
  clientsData,
  projectManagersData,
  projectStatusData
} from '@app/core/data';
import * as fromProjects from '../../../store';
import * as ProjectActions from '../../../store/project.actions';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.scss']
})
export class ProjectCreateComponent implements OnInit {
  clientList: string[] = clientsData.map(client => client.name);
  managerList: string[] = projectManagersData.map(manager => manager.name);
  statusList: number[] = projectStatusData.map(status => status.id);

  lastRenderId: number;
  projectCreateForm: FormGroup;
  clicked: boolean;

  constructor(
    private store: Store<fromProjects.ProjectState>,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.projectCreateForm = this.fb.group({
      client: ['', [Validators.required]],
      name: ['', [Validators.required]],
      status: ['', [Validators.required]],
      deadline: [''],
      manager: ['', [Validators.required]]
    });

    this.clicked = false;

    this.store
      .pipe(
        select(fromProjects.selectAllProjectIds),
        take(1)
      )
      .subscribe(x => this.lastRenderId = (x.length > 0) ? +x[0] : 0);
  }

  close(): void {
    this.router.navigate(['/projects/running', { outlets: { popup: null } }]);
  }

  createProject(): void {
    // TODO: When a new project is created, details/budget/planning ... are also created
    const { client, name, status, deadline, manager } = this.projectCreateForm.value;

    const newProject: IProject = {
      id: this.lastRenderId + 1,
      client,
      name,
      manager,
      status,
      deadline
    };

    const newProjectDetails: IProjectDetails = {
      id: this.lastRenderId + 1,
      client,
      sub_clinet: '',
      name,
      manager,
      status
    };

    const newBudgetField = {
      id: this.lastRenderId + 1,
      budgetItems: []
    };

    this.store.dispatch(
      ProjectActions.createProjectBundle({
        project: newProject,
        projectDetails: newProjectDetails,
        budgetField: newBudgetField
      })
    );

    this.clicked = true;
  }
}
