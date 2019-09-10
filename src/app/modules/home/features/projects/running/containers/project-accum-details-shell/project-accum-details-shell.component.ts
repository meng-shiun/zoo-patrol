import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Event, NavigationEnd, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { ITab, slideLeftRight } from '@app/shared';
import { ProjectService } from '@app/modules/home/features/projects/project.service';

@Component({
  selector: 'app-project-accum-details-shell',
  templateUrl: './project-accum-details-shell.component.html',
  styleUrls: ['./project-accum-details-shell.component.scss'],
  animations: [slideLeftRight]
})
export class ProjectAccumDetailsShellComponent implements OnInit {
  tabs: ITab[] = [
    { name: 'Project details', link: 'details' },
    { name: 'Planning', link: 'planning' },
    { name: 'Timesheets', link: 'timesheets' },
    { name: 'Budget', link: 'budget' },
  ];
  activeTab: string;
  animationState: number;

  // TODO: correct type to Project
  selectedProject$: any;

  constructor(private router: Router, private route: ActivatedRoute, private projectService: ProjectService) {
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
    // TODO: Rewrite: fetch data with NgRx
    // Fetch default project data (for project-details page)
    this.selectedProject$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.projectService.getProject(+params.get('id')))
    );
  }

  onActivate($event) {
    this.animationState = this.route.firstChild.snapshot.data['routeId'];
  }

}
