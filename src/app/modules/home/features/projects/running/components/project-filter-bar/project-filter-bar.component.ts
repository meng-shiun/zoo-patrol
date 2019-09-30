import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-project-filter-bar',
  templateUrl: './project-filter-bar.component.html',
  styleUrls: ['./project-filter-bar.component.scss']
})
export class ProjectFilterBarComponent implements OnInit, OnDestroy {
  @Output() changeName:     EventEmitter<string> = new EventEmitter();
  @Output() changeClient:   EventEmitter<string> = new EventEmitter();
  @Output() changeManager:  EventEmitter<string> = new EventEmitter();
  @Output() changeStatus:   EventEmitter<string> = new EventEmitter();

  projectNameSub: Subscription;
  projectName = new FormControl('');

  searchTerm      = '';
  clients:  any[] = ['Watsica LLC', 'Veum Inc', 'Frami-Ledner'];
  managers: any[] = ['Jordy', 'Kristof', 'Chelsey', 'Tom'];
  status:   any[] = [140, 200, 605];
  sortBy:   any[] = ['new', 'old'];

  constructor() { }

  ngOnInit() {
    this.projectNameSub = this.projectName.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(term => this.changeName.emit(term.trim()));
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

  resetInput() {
    this.projectName.setValue('');
  }

  ngOnDestroy(): void {
    this.projectNameSub.unsubscribe();
  }
}
