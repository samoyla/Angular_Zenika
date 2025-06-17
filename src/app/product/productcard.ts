import { Component, input, output } from '@angular/core';
import { Product } from './product-types';

@Component({
  selector: 'app-productcard',
  imports: [],
  templateUrl: './productcard.html',
  styleUrl: './productcard.css',
})
export class Productcard {
  product = input.required<Product>();

  addToBasket = output<Product>();

  /*onClick() {
    this.addToBasket.emit(this.product());
  }*/
}
