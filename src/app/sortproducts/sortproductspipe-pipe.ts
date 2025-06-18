import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product-types';

@Pipe({
  name: 'sortproductspipe',
  pure: false
})
export class SortproductspipePipe implements PipeTransform {

  transform(value: Product[], key: 'price' | 'stock'): Product[] {
    console.log('pipe transforme');
    return [...value].sort((a, b) => {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      
      return 0;
    });
  }

}
