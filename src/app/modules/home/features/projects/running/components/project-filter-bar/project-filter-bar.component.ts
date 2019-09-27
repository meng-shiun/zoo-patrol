import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-project-filter-bar',
  templateUrl: './project-filter-bar.component.html',
  styleUrls: ['./project-filter-bar.component.scss']
})
export class ProjectFilterBarComponent implements OnInit {
  @ViewChild('searchTerm', { static: true }) searchTerm: ElementRef;
  @Output() filterTerm: EventEmitter<string> = new EventEmitter();

  clients: any[] = ['Watsica LLC', 'Veum Inc', 'Frami-Ledner'];
  managers: any[] = ['Jordy', 'Kristof', 'Chelsey', 'Tom'];
  status: any[] = [140, 200, 605];
  sortBy: any[] = ['new', 'old'];

  constructor() { }

  ngOnInit() {
  }

  checkChange() {
    console.log('searching:', this.searchTerm.nativeElement.value);
    // TODO: Add debonce time for searching
  }

  filterSearch(term: string) {
    console.log('filter:', term);
    this.filterTerm.emit(term);
  }
}
