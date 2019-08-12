import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd } from '@angular/router';

import { ITab, slideLeftRight } from '@app/shared';

@Component({
  selector: 'app-project-details-shell',
  templateUrl: './project-details-shell.component.html',
  styleUrls: ['./project-details-shell.component.scss'],
  animations: [slideLeftRight]
})
export class ProjectDetailsShellComponent implements OnInit {
  title = 'Project id - Project name';
  tabs: ITab[] = [
    { name: 'Project details', link: 'details' },
    { name: 'Planning', link: 'planning' },
    { name: 'Timesheets', link: 'timesheets' },
    { name: 'Budget', link: 'budget' },
  ];
  activeTab: string;
  animationState: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    // Update active tab when refreshing page
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd && event.url.includes('/projects/running')) {
        this.tabs.map(tab =>
          event.url.endsWith(tab.link) && (this.activeTab = tab.name)
        );
      } else {
        this.activeTab = this.tabs[0].name;
      }
    });
  }

  ngOnInit() {
  }

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeId'];
  }

}
