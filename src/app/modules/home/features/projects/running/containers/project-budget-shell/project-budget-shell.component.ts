import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { IProjectBudgetField, IBudgetItem } from '@app/shared';
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
    const tempItem: IBudgetItem = {
      budget: 0,
      type: '',
      hours: 0
    };

    this.store.dispatch(ProjectActions.createBudgetItem({ budgetItem: tempItem }));
  }

  updateBudgetItem({ id, budgetItem }) {
    console.log('[update]', id, budgetItem);
    this.store.dispatch(ProjectActions.updateBudgetItem({ id, budgetItem }));
  }

  deleteBudgetItem(id: number) {
    console.log('[delete]', id);
    this.store.dispatch(ProjectActions.deleteBudgetItem({ id }));
  }
}
