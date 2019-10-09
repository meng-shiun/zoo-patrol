import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-project-planning-shell',
  templateUrl: './project-planning-shell.component.html',
  styleUrls: ['./project-planning-shell.component.scss']
})
export class ProjectPlanningShellComponent implements OnInit {
  dragEl: any;
  dragId: number;
  dropId: number;
  draggableItems: any[];

  // TODO: make each item in array an object
  list = ['Design', 'Code', 'Management', 'Testing'];

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  ngOnInit() {
  }

  createDOMItem(): any {
    const newItem = this.renderer.createElement('li');
    const itemText = this.renderer.createText(this.dragEl.textContent);

    this.renderer.setAttribute(newItem, 'draggable', 'true');
    this.renderer.appendChild(newItem, itemText);

    this.renderer.listen(newItem, 'dragstart', (e) => this.dragstart(e, this.dragId));
    this.renderer.listen(newItem, 'dragenter', (e) => this.dragenter(e));
    this.renderer.listen(newItem, 'dragover', (e) => this.dragover(e));
    this.renderer.listen(newItem, 'dragleave', (e) => this.dragleave(e));
    this.renderer.listen(newItem, 'drop', (e) => this.drop(e, this.dropId));
    this.renderer.listen(newItem, 'dragend', (e) => this.dragend(e));

    return newItem;
  }

  dragstart(evt, i): void {
    this.dragEl = evt.target;
    this.dragId = i;

    this.renderer.addClass(evt.target, 'hightlight');
    this.renderer.setStyle(evt.target, 'opacity', 0.1);
  }

  dragenter(evt): void {
  }

  dragover(evt): void {
    evt.preventDefault();
    this.renderer.setStyle(evt.target, 'opacity', 0.2);
  }

  dragleave(evt): void {
    this.renderer.setStyle(evt.target, 'opacity', 1);
  }

  drop(evt, i): void {
    evt.preventDefault();
    this.dropId = i;

    this.renderer.setStyle(evt.target, 'opacity', 1);

    const currentItem = evt.target;

    const newItem = this.createDOMItem();

    if (this.dragEl !== currentItem) {
      this.list.splice(this.dragId, 1);
      this.list.splice(this.dropId, 0, newItem.textContent);
    }
  }

  dragend(evt): void {
    this.renderer.removeClass(evt.target, 'hightlight');
  }
}
