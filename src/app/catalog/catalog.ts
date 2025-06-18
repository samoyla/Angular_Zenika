import { Component, inject } from '@angular/core';
import { Menu } from '../menu/menu';
import { Product } from '../product/product-types';
import { Productcard } from '../product/productcard';
import { SortproductspipePipe } from '../sortproducts/sortproductspipe-pipe';
import { CatalogResource } from './catalog-resource';
import { BasketResource } from '../basket/basket-resource';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-catalog',
  imports: [Menu, Productcard, CurrencyPipe, UpperCasePipe, SortproductspipePipe],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {
    private catalogService = inject(CatalogResource);

  private basketService = inject(BasketResource);

  productsInStock = this.catalogService.productsInStock;
  total = this.basketService.total;

  addToBasket({ id }: Product) {
    this.basketService.addItem(id).subscribe(() => this.catalogService.decreaseStock({id} as Product));
  }

  /* addToBasket(product: Product) {
    this.basketService.addItem(product as BasketItem);
    this.catalogService.decreaseStock(product);
  }*/

  constructor() {
    this.catalogService.fetchProducts().subscribe();
    this.basketService.fetchBasket().subscribe();
  }
}
