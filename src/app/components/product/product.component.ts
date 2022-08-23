import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    image: '',
    description: '',
    category: ''
  };
//trasmitir información a product
//EventEmitter es un módulo que ayuda a compartir datos entre componentes usando los métodos emit() y subscribe()
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }
//evento click
//emit() es un método EventEmitter que emite un evento que contiene un valor dado.
  onAddShoppingCart() {
    this.addedProduct.emit(this.product);
  }

}
