import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/IProduct';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService,
    private router: Router){}

  ngOnInit (): void {
    const products = this.productService.getProducts();
    this.products = products ? products : [];
  }

  onEdit(productId: number): void {
    this.router.navigate([`products/${productId}`])
  }

  onDelete(productId: number): void {
    try {
      if (productId) {
        const res = this.productService.delete(productId);
        if (res) {
          alert('Product deleted!');
        } else {
          alert('Could not delete product, try later');
        }
      } else {
        alert('It seems there was a problem, try again');
      }
    } catch (error: any) {
      alert('Error!' + error.message);
    }
  }

}
