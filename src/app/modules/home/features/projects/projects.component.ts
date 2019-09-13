import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd, ActivatedRoute } from '@angular/router';

import { slideLeftRight, ITab } from '@app/shared';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [slideLeftRight]
})
export class ProjectsComponent implements OnInit {
  animTabs: ITab[] = [
    { name: 'Running projects', link: 'running' },
    { name: 'My projects', link: 'my_projects' },
    { name: 'Archived projects', link: 'archived' },
    // { name: '+ New projects', link: 'new' }
  ];

  activeTab: string;
  animationState: number;

  animal: string;
  name: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    // Update active tab when refreshing page
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && event.url.includes('/projects')) {
        this.animTabs.map(tab =>
          event.url.endsWith(tab.link) && (this.activeTab = tab.name)
        );
        event.url.endsWith('/projects') && (this.activeTab = this.animTabs[0].name);
      }
      // Default tab
      if (event instanceof NavigationEnd && event.url.includes('/projects/running')) {
        this.activeTab = this.animTabs[0].name;
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
}
