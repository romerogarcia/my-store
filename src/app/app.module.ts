import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//importar mi componente
import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  //importar los componentes
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
