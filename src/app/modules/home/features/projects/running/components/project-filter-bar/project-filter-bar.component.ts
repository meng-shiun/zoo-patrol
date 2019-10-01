import { Component, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subscription, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith, map } from 'rxjs/operators';

import {
  projectsData,
  projectStatusData,
  projectManagersData,
  clientsData
} from '@app/core/data';

@Component({
  selector: 'app-project-filter-bar',
  templateUrl: './project-filter-bar.component.html',
  styleUrls: ['./project-filter-bar.component.scss']
})
export class ProjectFilterBarComponent implements OnInit, OnDestroy {
  @Input() hideManagerFilter: boolean;
  @Output() changeName:     EventEmitter<string> = new EventEmitter();
  @Output() changeClient:   EventEmitter<string> = new EventEmitter();
  @Output() changeManager:  EventEmitter<string> = new EventEmitter();
  @Output() changeStatus:   EventEmitter<string> = new EventEmitter();

  projectNameSub: Subscription;
  projectName = new FormControl('');

  clients:  string[] = clientsData.map(client => client.name);
  managers: string[] = projectManagersData.map(manager => manager.name);
  status:   number[] = projectStatusData.map(status => status.id);
  sortBy:   any[] = ['new', 'old'];
  projectNameOptions: string[] = projectsData.map(p => p.name);
  filteredProjectNameOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.projectNameSub = this.projectName.valueChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe(term => this.changeName.emit(term.trim()));


    // Show autocomplete options
    this.filteredProjectNameOptions = this.projectName.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterName(value))
      );
  }

  private _filterName(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.projectNameOptions.filter(option => option.toLowerCase().includes(filterValue));
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
