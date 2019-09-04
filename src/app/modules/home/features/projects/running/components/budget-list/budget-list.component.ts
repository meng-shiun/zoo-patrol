import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IBudgetItem } from '@app/shared';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  @Input() budgetList: IBudgetItem[];
  @Output() deleteItem: EventEmitter<any> = new EventEmitter();
  @Output() updateItem: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.budgetList);
  }

  delete(item) {
    this.deleteItem.emit(item);
  }

  update(item) {
    this.updateItem.emit(item);
  }
}
