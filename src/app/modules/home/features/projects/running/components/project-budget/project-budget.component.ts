import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-budget',
  templateUrl: './project-budget.component.html',
  styleUrls: ['./project-budget.component.scss']
})
export class ProjectBudgetComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('Project id: ', this.route.parent.snapshot.paramMap.get('id'));
  }

}
