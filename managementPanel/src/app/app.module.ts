import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SuppliersListComponent } from './components/suppliers-list/suppliers-list.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { OrdersListComponent } from './components/orders-list/orders-list.component';
import { SupplierFormComponent } from './components/supplier-form/supplier-form.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { OrderFormComponent } from './components/order-form/order-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SuppliersListComponent,
    ProductsListComponent,
    NavbarComponent,
    OrdersListComponent,
    SupplierFormComponent,
    ProductFormComponent,
    OrderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
