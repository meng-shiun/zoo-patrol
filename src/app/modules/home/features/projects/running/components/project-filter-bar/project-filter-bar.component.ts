import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-filter-bar',
  templateUrl: './project-filter-bar.component.html',
  styleUrls: ['./project-filter-bar.component.scss']
})
export class ProjectFilterBarComponent implements OnInit {
  clients: any[] = ['Watsica LLC', 'Veum Inc', 'Frami-Ledner'];
  managers: any[] = ['Jordy', 'Kristof', 'Chelsey', 'Tom'];
  status: any[] = [140, 200, 605];
  sortBy: any[] = ['new', 'old'];

  constructor() { }

  ngOnInit() {
  }

}
