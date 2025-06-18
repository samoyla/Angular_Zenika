import { Routes } from '@angular/router';
import { Catalog } from './catalog/catalog';
import { Basket } from './basket/basket';

export const routes: Routes = [
    {
        path: 'catalog',
        component: Catalog
    },
     {
        path: 'basket',
        component: Basket
    },
     {
        path: '**',
        redirectTo: '/catalog'
    }
];
