import { Component, OnInit } from '@angular/core';

interface ITab {
  name: string;
  link: string;
}

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

  activeTab = this.tabs[0].name;

  constructor() { }

  ngOnInit() {
  }
}
