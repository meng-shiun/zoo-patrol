import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';

import { ITab } from '@app/shared/interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  tabs: ITab[] = [
    { name: 'Running projects', link: 'running' },
    { name: 'My projects', link: 'my_projects' },
    { name: 'Archived projects', link: 'archived' },
    { name: '+ New projects', link: 'new' }
  ];

  activeTab: string;

  constructor(private router: Router) {
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
}
