import { Component, OnInit } from '@angular/core';
import{ Product } from '../../models/product.model'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [
    {
      id: '1',
      name: 'Monterra',
      price: 20.00,
      image: './assets/images/monsterra.jpg'
    },
    {
      id: '2',
      name: 'Caladium Freida Hemple',
      price: 18.00,
      image: './assets/images/caladium.jpg'
    },
    {
      id: '3',
      name: 'Scindapsus Pictus',
      price: 18.00,
      image: './assets/images/pictus.jpg'
    },
    {
      id: '4',
      name: 'Pilea',
      price: 14.00,
      image: './assets/images/pilea.jpg'
    },
    {
      id: '5',
      name: 'Maranta Leuconeura',
      price: 16.00,
      image: './assets/images/maranta.jpg'
    },
    {
      id: '6',
      name: 'Pachira',
      price: 20.00,
      image: './assets/images/pachira.jpg'
    },
    {
      id: '7',
      name: 'Hoya Carnosa Tricolor',
      price: 20.00,
      image: './assets/images/hoya.jpg'
    },
    {
      id: '8',
      name: 'Ceropegia Woodii',
      price: 24.00,
      image: './assets/images/woodii.jpg'
    },
    {
      id: '9',
      name: 'Peperomia Angulata',
      price: 18.00,
      image: './assets/images/angulata.jpg'
    },
    {
      id: '10',
      name: 'Calathea Makoyana',
      price: 20.00,
      image: './assets/images/makoyana.jpg'
    },
    {
      id: '11',
      name: 'Zamioculca',
      price: 16.00,
      image: './assets/images/zamioculca.jpg'
    },
    {
      id: '12',
      name: 'Aloe Godzilla',
      price: 14.00,
      image: './assets/images/aloe.jpg'
    },
    {
      id: '13',
      name: 'Ficus Lyrata',
      price: 18.00,
      image: './assets/images/ficus.jpg'
    },
    {
      id: '14',
      name: 'Calathea Triostar',
      price: 25.00,
      image: './assets/images/calathea.jpg'
    },
    {
      id: '15',
      name: 'Anthurium Pink Flamingo',
      price: 23.00,
      image: './assets/images/pink.jpg'
    },
    {
      id: '16',
      name: 'Syngonium Red Heart',
      price: 20.00,
      image: './assets/images/red.jpg'
    },
    {
      id: '17',
      name: 'Potus Limón',
      price: 28.00,
      image: './assets/images/limon.jpg'
    }
  ];

}
