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
  tabs: ITab[] = [
    { name: 'Running projects', link: 'running' },
    { name: 'My projects', link: 'my_projects' },
    { name: 'Archived projects', link: 'archived' },
    { name: '+ New projects', link: 'new' }
  ];

  activeTab: string;

  animationState: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && event.url.includes('/projects')) {
        this.tabs.map(tab =>
          event.url.endsWith(tab.link) && (this.activeTab = tab.name)
        );
        event.url.endsWith('/projects') && (this.activeTab = this.tabs[0].name);
      }
    });
  }

  ngOnInit() {
  }

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeId'];
  }
}
