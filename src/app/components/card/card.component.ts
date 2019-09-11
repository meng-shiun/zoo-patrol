import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() prop;
  @Input() cardInfo;

  /**
    * cardInfo array should looks like:
    *
    * cardInfo = new Map([
    *   [0, {'title': 'Client', 'child': 'client'}],
    *   [1, {'title': 'Status', 'child': 'status', 'pipe': 'projectStatus' }}]
    * ]);
  **/

  constructor() {}

  ngOnInit() {
  }
}
