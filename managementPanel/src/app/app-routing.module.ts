import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

const ROUTES: Routes = [
  {
    path: '',
    component: SuppliersListComponent
  },
  {
    path: 'suppliers',
    children: [
      {
        path: '',
        component: SuppliersListComponent
      },
      {
        path: ':id',
        component: SupplierFormComponent
      },
      {
        path: ':id',
        component: SupplierFormComponent
      },
      {
        path: '**',
        component: SuppliersListComponent
      }
    ]
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsListComponent
      },
      {
        path: ':id',
        component: ProductFormComponent
      },
      {
        path: ':id',
        component: ProductFormComponent
      },
      {
        path: '**',
        component: ProductsListComponent
      }
    ]
  },
  {
    path: 'orders',
    children: [
      {
        path: '',
        component: OrdersListComponent
      },
      {
        path: ':id',
        component: OrderFormComponent
      },
      {
        path: ':id',
        component: OrderFormComponent
      },
      {
        path: '**',
        component: OrdersListComponent
      }
    ]
  },
  {
    path: '**',
    component: SuppliersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
