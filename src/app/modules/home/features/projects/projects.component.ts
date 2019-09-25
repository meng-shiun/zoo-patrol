import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  Router,
  Event,
  NavigationEnd,
  ActivatedRoute
} from '@angular/router';
import { Store, select } from '@ngrx/store';

import { slideLeftRight, ITab } from '@app/shared';
import * as fromProjects from './store';
import * as ProjectActions from './store/project.actions';
import { Subscription, Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [slideLeftRight]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  allProjectsLoaded$:         Observable<boolean>;
  projectDetailsLoaded$:      Observable<boolean>;
  projectBudgetFieldLoaded$:  Observable<boolean>;

  routerSub: Subscription;

  animTabs: ITab[] = [
    { name: 'Running projects', link: 'running' },
    { name: 'My projects', link: 'my_projects' },
    { name: 'Archived projects', link: 'archived' }
  ];

  activeTab: string;
  animationState: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromProjects.ProjectState>) {
    // Update active tab when refreshing page
    this.routerSub = this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && event.url.includes('/projects')) {
        this.animTabs.map(
          tab => event.url.endsWith(tab.link) && (this.activeTab = tab.name)
        );
        event.url.endsWith('/projects') && (this.activeTab = this.animTabs[0].name);
      }
      // Default tab
      if (event instanceof NavigationEnd && event.url.includes('/projects/running')) {
        this.activeTab = this.animTabs[0].name;

        // When route into details pages, display delete button
        // otherwise display create button
        const regex = /(projects)+(\/)+(running\/)+(\d)+(\/)*(\w)*/gi;
        regex.test(event.url) ? this.enableDeleteBtn() : this.enableCeateBtn();
      }

      if (event instanceof NavigationEnd && event.url.includes('/projects/my_projects')) {
        // TODO: When route into my_projects
        this.resetBtns();
      }

      if (event instanceof NavigationEnd && event.url.includes('/projects/archived')) {
        // TODO: When route into archived
        this.resetBtns();
      }
    });
  }

  ngOnInit() {
  }

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeId'];
  }

  enableCeateBtn(): void {
    this.projectDetailsLoaded$      = of(false);
    this.projectBudgetFieldLoaded$  = of(false);
    this.allProjectsLoaded$         = this.store.pipe(select(fromProjects.selectAllProjectsLoaded));
  }

  enableDeleteBtn(): void {
    this.allProjectsLoaded$         = of(false);
    this.projectDetailsLoaded$      = this.store.pipe(select(fromProjects.selectProjectDetailsLoaded));
    this.projectBudgetFieldLoaded$  = this.store.pipe(select(fromProjects.selectProjectBudgetFieldLoaded));
  }

  create() {
    this.router.navigate([{ outlets: { popup: ['newProject'] } }], { relativeTo: this.route.parent.parent });
  }

  delete() {
    this.store
      .pipe(
        select(fromProjects.selectProjectId),
        take(1)
      )
      .subscribe(id => {
        if (id && confirm('Delete this project?')) {
          this.store.dispatch(ProjectActions.deleteProject({ id }));
          this.router.navigate(['./'], { relativeTo: this.route });
          this.enableCeateBtn();
        }
      });
  }

  resetBtns(): void {
    this.allProjectsLoaded$         = of(false);
    this.projectDetailsLoaded$      = of(false);
    this.projectBudgetFieldLoaded$  = of(false);
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }
}
