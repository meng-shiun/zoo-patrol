import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  tabs: string[] = ['My projects', 'Archived projects', '+ New project'];
  constructor() { }

  ngOnInit() {
  }

}
