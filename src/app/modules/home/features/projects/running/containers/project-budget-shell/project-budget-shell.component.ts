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
  totalHours$: Observable<number>;
  totalBudget$: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromProjects.ProjectState>) { }

  ngOnInit() {
    const id = +this.route.parent.snapshot.paramMap.get('id');
    this.store.dispatch(ProjectActions.loadBudgetFieldById({ id }));

    this.projectBudgetField$ = this.store.pipe(select(fromProjects.getProjectBudgetField));
    this.totalHours$ = this.store.pipe(select(fromProjects.getBudgetFieldTotalHours));
    this.totalBudget$ = this.store.pipe(select(fromProjects.getBudgetFieldTotalBudget));
  }

  addBudgetItem(): void {
    this.store.dispatch(ProjectActions.createBudgetItem());
  }

  updateBudgetItem({ id, budgetItem }) {
    console.log('[update]', id, budgetItem);
    this.store.dispatch(ProjectActions.updateBudgetItem({ id, budgetItem }));
  }

  deleteBudgetItem(item: IBudgetItem) {
    console.log('[delete]', item);
    this.store.dispatch(ProjectActions.deleteBudgetItem({ budgetItem: item }));
    this.store.dispatch(ProjectActions.updateTotalHours({ preHours: item.hours, curHours: 0 }));
    this.store.dispatch(ProjectActions.updateTotalBudget({ preBudget: item.budget, curBudget: 0 }));
  }

  updateTotalHours({ pre, cur }): void {
    this.store.dispatch(ProjectActions.updateTotalHours({ preHours: pre, curHours: cur }));
  }

  updateTotalBudget({ pre, cur }): void {
    this.store.dispatch(ProjectActions.updateTotalBudget({ preBudget: pre, curBudget: cur }));
  }
}
