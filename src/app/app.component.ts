/////////MODULO PRINCIPAL MODULO QUE SE ENCARGA DE CARGAR LOS PRINCIPALES COMPONENTES
import { Component } from '@angular/core';
import { Product} from './models/product.model';

//decorador -> caracteristicas que tine el componente, con la etiqueta(selector), que se muestra(template) y los estilos
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

//importamos los componentes 
export class AppComponent {
  imgParent = 'https://www.w3schools.com/howto/img_avatar.png';
 
}
