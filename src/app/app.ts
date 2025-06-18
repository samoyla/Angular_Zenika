import { Component, inject} from '@angular/core';
import { HighlightPrice } from './highlight-price/highlight-price';
import { Menu } from './menu/menu';
import { Product } from './product/product-types';
import { Productcard } from './product/productcard';
import { CatalogResource } from './catalog/catalog-resource';
import { BasketResource } from './basket/basket-resource';
import { BasketItem } from './basket/basket-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Menu, Productcard, HighlightPrice],
})
export class App {

  private catalogService = inject(CatalogResource);

  private basketService = inject(BasketResource);

  productsInStock = this.catalogService.productsInStock;
  total = this.basketService.total;

 /* addToBasket({ id, price, title }: Product) {
    this.basketService.addItem({id, title, price});
    this.catalogService.decreaseStock(id);
  }*/

  addToBasket(product: Product) {
    this.basketService.addItem(product as BasketItem);
    this.catalogService.decreaseStock(product);
  }

}
