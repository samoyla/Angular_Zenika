import { CurrencyPipe, NgClass, UpperCasePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Product } from './product-types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productcard',
  imports: [NgClass, CurrencyPipe, UpperCasePipe, RouterLink],
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
