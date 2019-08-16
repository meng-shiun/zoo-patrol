import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { IProjectBudgetField } from '@app/shared';
import { ProjectService } from '@app/modules/home/features/projects/project.service';

@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrls: ['./project-budget.component.scss']
})
export class ProjectBudgetComponent implements OnInit {
  projectBudgetField$: Observable<IProjectBudgetField>;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService) { }

  ngOnInit() {
    const id = +this.route.parent.snapshot.paramMap.get('id');

    this.projectBudgetField$ = this.projectService.getProjectBudgetField(id);
  }

}
