import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { BasketItem } from './basket-types';

@Injectable({
  providedIn: 'root',
})
export class BasketResource {
  private httpClient = inject(HttpClient);

  private _items = signal<BasketItem[]>([]);

  public items = this._items.asReadonly();

  total = computed<number>(() => this._items().reduce((total, { price }) => total + price, 0));

  /* addItem( item: BasketItem) : void {
      this._items.update((items) => [...items, item]);
   };*/

  fetchBasket(): Observable<BasketItem[]> {
    return this.httpClient
      .get<BasketItem[]>('http://localhost:8080/api/basket')
      .pipe(tap((items) => this._items.set(items)));
  }

  addItem(productId: string): Observable<BasketItem> {
    return this.httpClient
      .post<BasketItem>('http://localhost:8080/api/basket/', { productId: productId })
      .pipe(tap((item) => this._items.update((items) => [...items, item])));
  }
}
