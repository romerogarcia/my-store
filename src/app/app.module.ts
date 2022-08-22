import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//importar mi componente
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { ImgComponent } from './components/img/img.component';

@NgModule({
  //importar los componentes
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    ImgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
