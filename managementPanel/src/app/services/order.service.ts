import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Order } from '../models/IOrders';
import { orders } from '../data/orders';

const API_URL = '';
const data: Order[] = orders || [] as Order[];


@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders = new BehaviorSubject<Order[]>([]);

  constructor(private http: HttpClient) {}

  getAllOrders(): void {
    this.http
      .get<Order[]>(`${API_URL}`)
      .pipe(
        tap((orders: Order[]) => {
          this.orders.next(orders);
        })
      )
      .subscribe();
  }
  getOrdersFromService() {
    return this.orders.asObservable();
  }
  setOrdersFromService(orders: Order[]): void {
    this.orders.next(orders);
  }

  // STATIC CRUD

  getOrders(): Order[] | null {
    try {
      if (data.length > 0) {
        return data;
      }
      return [];
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }

  getOrderById(orderId: number): Order | null {
    try {
      const order = data.filter(order => order.id === orderId)[0];
      if (order) {
        return order;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }

  getOrderBySupplierName(supplierName: string): Order | null {
    try {
      const order = data.filter(order => order.supplier.name === supplierName)[0];
      if (order) {
        return order;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }

  add(order: Order): Order | null {
    try {
      if (order) {
        data.push(order);
        return order;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }

  edit(order: Order): Order | null {
    try {
      if (order) {
        const index = data.indexOf(order);
        data.splice(index, 1, order);
        return order;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }
  
  delete(orderId: number): Order | null {
    try {
      if (orderId) {
        const order = data.filter(order => order.id === orderId)[0];
        if (order) {
          const index = data.indexOf(order);
          data.splice(index, 1);
          return order; 
        }
        return null;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }

  // OBSERBABLE CRUD

  /* getOrders(): Observable<Order[]> | null {
    try {
      return this.http
        .get<any>(`${API_URL}`)
        .pipe(map((res: any) => res.data as Order[]));
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  getOrderById(orderId: number): Observable<Order> | null {
    try {
      return this.http
      .get<any>(`${API_URL}?id=${orderId}`)
      .pipe(map((res: any) => res.data as Order));
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  getOrderBySupplierName(supplierName: string): Observable<Order> | null {
    try {
      return this.http
      .get<any>(`${API_URL}?supplierName=${supplierName}`)
      .pipe(map((res: any) => res.data as Order));
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  add(order: Order): Observable<Order> | null {
    try {
      return this.http.post<Order>(`${API_URL}`, order); 
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  edit(order: Order): Observable<Order> | null {
    try {
      return this.http.put<Order>(`${API_URL}?id=${Order.id}`, order);
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  delete(orderId: number): Observable<Order> | null {
    try {
      return this.http.delete<Order>(`${API_URL}?id=${orderId}`);
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  } */
}
