import { computed, inject, Injectable, signal } from '@angular/core';
import { Product } from '../product/product-types';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogResource {

  private httpClient= inject(HttpClient);

  private _products = signal<Product[]>([]);

  products = this._products.asReadonly();

  productsInStock = computed<Product[]>(() => this.products().filter(({ stock }) => stock > 0));

  decreaseStock({id}: Product) {
    this._products.update((products) =>
      products.map((product) => {
        if (product.id === id && product.stock > 0) {
          return { ...product, stock: product.stock - 1 };
        }
        return product;
      }),
    );
  }

  fetchProducts() :Observable<Product[]> {
    return this.httpClient
    .get<Product[]>('http://localhost:8080/api/products')
    .pipe(tap((products) => this._products.set(products)));
 }
}
