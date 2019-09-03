import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { IProjectBudgetField } from '@app/shared';
import * as fromProjects from '../../../store';
import * as ProjectActions from '../../../store/project.actions';

@Component({
  selector: 'app-project-budget-shell',
  templateUrl: './project-budget-shell.component.html',
  styleUrls: ['./project-budget-shell.component.scss']
})
export class ProjectBudgetShellComponent implements OnInit {
  projectBudgetField$: Observable<IProjectBudgetField>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromProjects.ProjectState>) { }

  ngOnInit() {
    const id = +this.route.parent.snapshot.paramMap.get('id');
    this.store.dispatch(ProjectActions.loadBudgetFieldById({ id }));

    this.projectBudgetField$ = this.store.pipe(select(fromProjects.getProjectBudgetField));
  }

  addBudgetItem(): void {
    console.log('Add budget item');
  }

  updateBudgetItem(item) {
    console.log(item);
  }

  deleteBudgetItem(item) {
    console.log(item);
  }
}
