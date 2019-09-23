import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Subscription, Observable } from 'rxjs';
import { ITab, slideLeftRight, IProject } from '@app/shared';
import * as fromProjects from '../../../store';
import * as ProjectActions from '../../../store/project.actions';

@Component({
  selector: 'app-project-accum-details-shell',
  templateUrl: './project-accum-details-shell.component.html',
  styleUrls: ['./project-accum-details-shell.component.scss'],
  animations: [slideLeftRight]
})
export class ProjectAccumDetailsShellComponent implements OnInit, OnDestroy {
  routerSub: Subscription;

  tabs: ITab[] = [
    { name: 'Project details', link: 'details' },
    { name: 'Planning', link: 'planning' },
    { name: 'Timesheets', link: 'timesheets' },
    { name: 'Budget', link: 'budget' },
  ];
  activeTab: string;
  animationState: number;

  selectedProject$: Observable<IProject>;

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<fromProjects.ProjectState>) {
    // Update active tab when refreshing page
    this.routerSub = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && event.url.includes('/projects/running')) {
        this.tabs.map(tab =>
          event.url.endsWith(tab.link) && (this.activeTab = tab.name)
        );
      } else {
        this.activeTab = this.tabs[0].name;
      }
    });

    const id = +this.route.snapshot.paramMap.get('id');
    this.store.dispatch(ProjectActions.loadProject({ id }));
  }

  ngOnInit() {
    this.selectedProject$ = this.store.pipe(select(fromProjects.selectProject));
  }

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeId'];
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }
}
