import { Component, OnInit, Input } from '@angular/core';

import { IBudgetItem } from '@app/shared';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  @Input() budgetList: IBudgetItem[];

  constructor() { }

  ngOnInit() {
    console.log(this.budgetList);
  }

}
