import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable } from 'rxjs';

import * as fromRoot from '@app/store/app.store';
import * as fromDashboard from './store';
import * as dashboardActions from './store/dashboard.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tabs:     string[] = ['Zoeken', '+ New project'];

  message$: Observable<any>;
  info$:    Observable<any>;

  constructor(private store: Store<fromRoot.AppState>) { }

  ngOnInit() {
    this.info$    = this.store.pipe(select(fromDashboard.selectDashboardFeature));
    this.message$ = this.store.pipe(select(fromDashboard.selectMessage));
  }

  updateMessage() {
    this.store.dispatch(dashboardActions.updateMessage({ message: 'Updated!!!'}));
  }

}
