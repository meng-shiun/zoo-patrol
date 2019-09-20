import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { slideLeftRight, ITab } from '@app/shared';
import * as fromProjects from './store';
import * as ProjectActions from './store/project.actions';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [slideLeftRight]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  routerSub: Subscription;

  animTabs: ITab[] = [
    { name: 'Running projects', link: 'running' },
    { name: 'My projects', link: 'my_projects' },
    { name: 'Archived projects', link: 'archived' }
  ];

  activeTab: string;
  animationState: number;

  enableCreateBtn: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromProjects.ProjectState>) {
    // Update active tab when refreshing page
    this.routerSub = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && event.url.includes('/projects')) {
        this.animTabs.map(tab =>
          event.url.endsWith(tab.link) && (this.activeTab = tab.name)
        );
        event.url.endsWith('/projects') && (this.activeTab = this.animTabs[0].name);
      }
      // Default tab
      if (event instanceof NavigationEnd && event.url.includes('/projects/running')) {
        this.activeTab = this.animTabs[0].name;

        // When route into details pages, display delete button
        const regex = /(projects)+(\/)+(running\/)+(\d)+(\/)*(\w)*/gi;
        this.enableCreateBtn = regex.test(event.url) ? false : true;
      } else {
        this.enableCreateBtn = true;
      }
    });
  }

  ngOnInit() {
  }

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeId'];
  }

  create() {
    this.router.navigate([{ outlets: { popup: ['newProject']} }], { relativeTo: this.route.parent.parent });
  }

  delete() {
    this.store.pipe(
      select(fromProjects.selectProjectId),
      take(1)).subscribe(id => console.log('delete item id:', id));
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }
}
