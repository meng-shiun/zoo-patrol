import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-total',
  templateUrl: './budget-total.component.html',
  styleUrls: ['./budget-total.component.scss']
})
export class BudgetTotalComponent implements OnInit {
  @Input() totalHours;

  constructor() { }

  ngOnInit() {
  }

}
