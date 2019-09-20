import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { IProject } from '@app/shared';
import { clientsData, projectManagersData, projectStatusData } from '@app/core/data';
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

  projectCreateForm: FormGroup;

  constructor(
    private store: Store<fromProjects.ProjectState>,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.projectCreateForm = this.fb.group({
      client: ['', [Validators.required]],
      name: ['', [Validators.required]],
      status: [
        '',
        [Validators.required]
      ],
      deadline: [''],
      manager: ['', [Validators.required]]
    });
  }

  close(): void {
    this.router.navigate(['/projects/running', { outlets: { popup: null }}]);
  }

  createProject(): void {
    // TODO: When a new project is created, details/budget/planning ... are also created
    const form = this.projectCreateForm.value;

    const newProject: IProject = {
      id: null,
      client: form.client,
      name: form.name,
      manager: form.manager,
      status: form.status,
      deadline: form.deadline
    };

    this.store.dispatch(ProjectActions.createProject({ result: newProject }));

    this.store
      .pipe(
        select(fromProjects.selectProjectId),
        take(1))
      .subscribe(id => ((!!id) ? this.router.navigateByUrl(`projects/running/${id}`) : null));
  }
}
