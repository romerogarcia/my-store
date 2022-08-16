import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.sass']
})
export class ImgComponent implements OnInit {
  //valor de la imagen
  //usamos input para enviar este valor al padre componente
  @Input() img: string = 'valor init';

  constructor() { }

  ngOnInit(): void {
  }

}
