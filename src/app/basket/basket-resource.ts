import { computed, Injectable, signal } from '@angular/core';
import { BasketItem } from './basket-types';

@Injectable({
  providedIn: 'root'
})
export class BasketResource {
  private _items = signal<BasketItem[]>([]);

  public items = this._items.asReadonly();

  total = computed<number>(() => this._items().reduce((total, { price }) => total + price, 0));

   addItem( item: BasketItem) : void {
      this._items.update((items) => [...items, item]);
   };

}
