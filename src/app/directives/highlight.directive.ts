import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseEnter = () => {
    this.element.nativeElement.style.backgroundColor = 'rgb(193,226,198)';
  }

  @HostListener('mouseleave') onMousLeave = () => {
    this.element.nativeElement.style.backgroundColor = '';
  }

  constructor(private element: ElementRef) {}

}
