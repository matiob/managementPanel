import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/IOrders';
import { ProdOrder } from 'src/app/models/Types';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders!: Order[];

  constructor(private orderService: OrderService,
    private router: Router){}

  ngOnInit (): void {
    const orders = this.orderService.getOrders();
    this.orders = orders ? orders : [];
  }

  onEdit(orderId: number): void {
    this.router.navigate([`orders/${orderId}`])
  }

  onDelete(orderId: number): void {
    try {
      if (orderId) {
        const res = this.orderService.delete(orderId);
        if (res) {
          alert('Order deleted!');
        } else {
          alert('Could not delete the order, try later');
        }
      } else {
        alert('It seems there was a problem, try again');
      }
    } catch (error: any) {
      alert('Error!' + error.message);
    }
  }

  total(products: ProdOrder[]): number {
    let total = 0;
    products.forEach(product => total += product.price*product.quantity);
    return total;
  }
}
