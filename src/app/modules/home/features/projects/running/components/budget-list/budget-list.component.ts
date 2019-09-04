import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IBudgetItem } from '@app/shared';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  @Input() budgetList: IBudgetItem[];
  @Output() deleteItem: EventEmitter<IBudgetItem> = new EventEmitter();
  @Output() updateItem: EventEmitter<IBudgetItem> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.budgetList);
  }

  delete(budgetItem: IBudgetItem) {
    this.deleteItem.emit(budgetItem);
  }

  update(budgetItem: IBudgetItem) {
    this.updateItem.emit(budgetItem);
  }
}
