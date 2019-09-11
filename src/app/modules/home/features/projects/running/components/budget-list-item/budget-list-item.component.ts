import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IBudgetItem } from '@app/shared';
import { projectTaskTypeData } from '@app/core/data';

@Component({
  selector: 'app-budget-list-item',
  templateUrl: './budget-list-item.component.html',
  styleUrls: ['./budget-list-item.component.scss']
})
export class BudgetListItemComponent implements OnInit {
  @Input() budgetItem: IBudgetItem;
  @Input() itemId: number;
  @Output() delete: EventEmitter<IBudgetItem> = new EventEmitter();
  @Output() update: EventEmitter<{id: number, budgetItem: IBudgetItem}> = new EventEmitter();
  @Output() hoursChanged: EventEmitter<{pre: number, cur: number}> = new EventEmitter();
  @Output() budgetChanged: EventEmitter<{pre: number, cur: number}> = new EventEmitter();

  // TODO: Define edit mode
  taskList: string[] = projectTaskTypeData.map(task => task.type);
  budgetItemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.budgetItemForm = this.fb.group({
      budget: [this.budgetItem.budget, [Validators.required]],
      type: [this.budgetItem.type, [Validators.required]],
      hours: [this.budgetItem.hours, [Validators.required]]
    }, { updateOn: 'blur' });

    this.onChange();
  }

  onChange(): void {
    this.budgetItemForm.valueChanges.subscribe((val: IBudgetItem) => {
      if (val.hours !== this.budgetItem.hours) {
        this.hoursChanged.emit({ pre: this.budgetItem.hours, cur: val.hours });
      }
      if (val.budget !== this.budgetItem.budget) {
        this.budgetChanged.emit({ pre: this.budgetItem.budget, cur: val.budget });
      }
      this.update.emit({ id: this.itemId, budgetItem: val });
    });
  }

  deleteItem(): void {
    this.delete.emit(this.budgetItem);
  }
}
