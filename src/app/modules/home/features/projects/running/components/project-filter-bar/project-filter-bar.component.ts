import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-project-filter-bar',
  templateUrl: './project-filter-bar.component.html',
  styleUrls: ['./project-filter-bar.component.scss']
})
export class ProjectFilterBarComponent implements OnInit {
  @ViewChild('searchTerm', { static: true }) searchTerm: ElementRef;
  @Output() changeName:     EventEmitter<string> = new EventEmitter();
  @Output() changeClient:   EventEmitter<string> = new EventEmitter();
  @Output() changeManager:  EventEmitter<string> = new EventEmitter();
  @Output() changeStatus:   EventEmitter<string> = new EventEmitter();

  clients: any[] = ['Watsica LLC', 'Veum Inc', 'Frami-Ledner'];
  managers: any[] = ['Jordy', 'Kristof', 'Chelsey', 'Tom'];
  status: any[] = [140, 200, 605];
  sortBy: any[] = ['new', 'old'];

  constructor() { }

  ngOnInit() {
  }

  selectChange() {
    console.log('searching:', this.searchTerm.nativeElement.value);
    // TODO: Add debonce time for searching
  }

  selectStatus(evt) {
    this.changeStatus.emit(evt.value);
  }

  selectManager(evt) {
    this.changeManager.emit(evt.value);
  }

  selectClient(evt) {
    this.changeClient.emit(evt.value);
  }

  filterSearchTemp(term: string) {
    this.changeName.emit(term);
  }
}
