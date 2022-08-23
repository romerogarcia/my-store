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

  //al elemento que le apliquemos la directiva de ElementRef su acceso para poder hacerle modificaciones (cambiar estilos, añadir algo al html..)
  constructor(private element: ElementRef) {}

}
