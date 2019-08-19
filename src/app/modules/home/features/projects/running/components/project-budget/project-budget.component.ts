import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import { IProjectBudgetField } from '@app/shared';
import * as fromProjects from '../../../store';
import * as ProjectActions from '../../../store/project.actions';

@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrls: ['./project-budget.component.scss']
})
export class ProjectBudgetComponent implements OnInit {
  projectBudgetField$: Observable<IProjectBudgetField>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromProjects.State>) { }

  ngOnInit() {
    const id = +this.route.parent.snapshot.paramMap.get('id');
    this.store.dispatch(ProjectActions.loadBudgetFieldById({ id }));

    this.projectBudgetField$ = this.store.pipe(select(fromProjects.getProjectBudgetField));
  }

}
