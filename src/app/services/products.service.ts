import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

constructor(private http: HttpClient,) { }
//traemos un listado de productos de una api fake
  getProducts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products')
  }

}
