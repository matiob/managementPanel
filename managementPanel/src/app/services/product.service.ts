import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Product } from '../models/IProduct';
import { products } from '../data/products';

const API_URL = '';
const data: Product[] = products || [] as Product[];

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = new BehaviorSubject<Product[]>([]);

  constructor(private http: HttpClient) {}

  getAllProducts(): void {
    this.http
      .get<Product[]>(`${API_URL}`)
      .pipe(
        tap((products: Product[]) => {
          this.products.next(products);
        })
      )
      .subscribe();
  }
  getProductsFromService() {
    return this.products.asObservable();
  }
  setProductsFromService(products: Product[]): void {
    this.products.next(products);
  }

  // STATIC CRUD

  getProducts(): Product[] | null {
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

  getProductById(productId: number): Product | null {
    try {
      const product = data.filter(product => product.id === productId)[0];
      if (product) {
        return product;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }

  getProductByName(productName: string): Product | null {
    try {
      const product = data.filter(product => product.name === productName)[0];
      if (product) {
        return product;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }

  add(product: Product): Product | null {
    try {
      if (product) {
        data.push(product);
        return product;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }

  edit(product: Product): Product | null {
    try {
      if (product) {
        const index = data.indexOf(product);
        data.splice(index, 1, product);
        return product;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }
  
  delete(productId: number): Product | null {
    try {
      if (productId) {
        const product = data.filter(product => product.id === productId)[0];
        if (product) {
          const index = data.indexOf(product);
          data.splice(index, 1);
          return product; 
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

  /* getProducts(): Observable<Product[]> | null {
    try {
      return this.http
        .get<any>(`${API_URL}`)
        .pipe(map((res: any) => res.data as Product[]));
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  getProductById(productId: number): Observable<Product> | null {
    try {
      return this.http
      .get<any>(`${API_URL}?id=${productId}`)
      .pipe(map((res: any) => res.data as Product));
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  getProductByName(productName: string): Observable<Product> | null {
    try {
      return this.http
      .get<any>(`${API_URL}?name=${productName}`)
      .pipe(map((res: any) => res.data as Product));
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  add(product: Product): Observable<Product> | null {
    try {
      return this.http.post<Product>(`${API_URL}`, product); 
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  edit(product: Product): Observable<Product> | null {
    try {
      return this.http.put<Product>(`${API_URL}?id=${product.id}`, product);
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  delete(productId: number): Observable<Product> | null {
    try {
      return this.http.delete<Product>(`${API_URL}?id=${productId}`);
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  } */
}
