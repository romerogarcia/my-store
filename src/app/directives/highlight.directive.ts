///////Entonces las directivas se usan solo para modificar el DOM, pero no es recomendable hacer estas modificaciones al DOM de está manera según la documentación de Angular. Lo que quiere decir que no tiene mucha utilidad crear directivas.
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
//escuchar el evento + crearlo
  @HostListener('mouseenter') onMouseEnter = () => {
    this.element.nativeElement.style.backgroundColor = 'rgb(193,226,198)';
  }

  @HostListener('mouseleave') onMousLeave = () => {
    this.element.nativeElement.style.backgroundColor = '';
  }

  //al elemento que le apliquemos la directiva de ElementRef su acceso para poder hacerle modificaciones (cambiar estilos, añadir algo al html..)
  constructor(private element: ElementRef) {}

}
