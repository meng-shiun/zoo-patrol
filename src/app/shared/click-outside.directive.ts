import { Directive, Output, EventEmitter, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {
  @Output() clickOutside = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) { }

  @HostListener('document:click', ['$event.target'])
  onClick(target) {
    const clickInside = this.elementRef.nativeElement.contains(target);

    // If target element is Angular material component
    const containNgMat = [...target.classList].map(val => val.includes('mat'))[0];

    if (!clickInside && !containNgMat) {
      this.clickOutside.emit(target);
    }
  }
}
