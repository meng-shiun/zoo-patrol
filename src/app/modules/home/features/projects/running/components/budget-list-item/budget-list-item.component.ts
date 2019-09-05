import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { IBudgetItem } from '@app/shared';

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

  // TODO: Define edit mode
  taskTypes: string[] = [
    'Design',
    'Development',
    'Marketing'
  ];

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
      this.update.emit({ id: this.itemId, budgetItem: val });
    });
  }

  deleteItem(): void {
    this.delete.emit(this.budgetItem);
  }
}
