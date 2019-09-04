import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IBudgetItem } from '@app/shared';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  @Input() budgetList: IBudgetItem[];
  @Output() deleteItem: EventEmitter<number> = new EventEmitter();
  @Output() updateItem: EventEmitter<{id: number, budgetItem: IBudgetItem}> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.budgetList);
  }

  delete(id: number) {
    this.deleteItem.emit(id);
  }

  update({ id, budgetItem }) {
    this.updateItem.emit({ id, budgetItem });
  }
}
