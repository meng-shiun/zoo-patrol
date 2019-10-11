import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-planning-shell',
  templateUrl: './project-planning-shell.component.html',
  styleUrls: ['./project-planning-shell.component.scss']
})
export class ProjectPlanningShellComponent implements OnInit {
  selectArrId: number;

  list = [
    { id: 10, des: 'Design', assign: 'Mien'},
    { id: 21, des: 'Code', assign: 'Stijn'},
    { id: 24, des: 'Management', assign: 'Tom'},
    { id: 33, des: 'Testing', assign: 'Kristof'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addNewItem(): void {
    const lastId = Math.max(...this.list.map( x => x.id));
    this.list = [...this.list, { id: lastId + 1, des: 'New task', assign: 'Unkown'}];

    this.updateList();
  }

  onSelectOn(id) {
    this.selectArrId = id;
  }

  updateList() {
    console.log('update', this.list);
  }
}
