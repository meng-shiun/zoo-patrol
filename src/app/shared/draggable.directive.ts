import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Output, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';

@Directive({
  selector: '[appDraggable]'
})
export class DraggableDirective {
  @Output() selectOn: EventEmitter<number> = new EventEmitter();
  @Output() dropOn: EventEmitter<number> = new EventEmitter();
  @Input() list: any[];
  @Input() previousArrId: number; // Item position(id) in array (not the item id)
  targetArrId: number;

  constructor(private renderer: Renderer2, private el: ElementRef) {
  }

  selectChildEl(id): ElementRef {
    const selectedArrId = this.list.findIndex(el => el.id === +id);
    const selectedChild = this.el.nativeElement.querySelectorAll('li')[selectedArrId];
    return selectedChild;
  }

  @HostListener('dragstart', ['$event.target', '$event.target.id'])
  onDragStart(item, id) {
    this.selectOn.emit(id);

    this.renderer.addClass(this.selectChildEl(id), 'hightlight');
    this.renderer.setStyle(item, 'opacity', 0.2);
  }

  @HostListener('dragenter', ['$event.target'])
  onDragEnter(item) {
  }

  @HostListener('dragover', ['$event', '$event.target'])
  onDragOver(evt, item) {
    evt.preventDefault();

    this.renderer.setStyle(item, 'opacity', 0.2);
  }

  @HostListener('dragleave', ['$event.target'])
  onDragLeave(item) {
    this.renderer.setStyle(item, 'opacity', 1);
  }

  @HostListener('drop', ['$event', '$event.target', '$event.target.id'])
  onDrop(evt, item, id) {
    evt.preventDefault();
    this.targetArrId = id;
    this.dropOn.emit(id);

    const selectItemId = this.list.findIndex(el => el.id === +this.previousArrId);
    const targetItemId = this.list.findIndex(el => el.id === +this.targetArrId);

    if (selectItemId !== targetItemId) {
      if (selectItemId > targetItemId) {
        this.list.splice(targetItemId, 0, this.list[selectItemId]);
        this.list.splice(selectItemId + 1, 1);
      } else {
        this.list.splice(targetItemId + 1, 0, this.list[selectItemId]);
        this.list.splice(selectItemId, 1);
      }
    }

    this.renderer.setStyle(item, 'opacity', 1);
  }

  @HostListener('dragend', ['$event.target.id'])
  onDragEnd(id) {
    this.renderer.removeClass(this.selectChildEl(id), 'hightlight');
  }

}
