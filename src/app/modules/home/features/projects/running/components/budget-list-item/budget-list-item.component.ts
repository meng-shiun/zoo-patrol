import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { IBudgetItem } from '@app/shared';

@Component({
  selector: 'app-budget-list-item',
  templateUrl: './budget-list-item.component.html',
  styleUrls: ['./budget-list-item.component.scss']
})
export class BudgetListItemComponent implements OnInit {
  @Input() budgetItem: IBudgetItem;

  tasks: string[] = [
    'Design',
    'Development',
    'Marketing'
  ];

  constructor() { }

  ngOnInit() {
  }

}
