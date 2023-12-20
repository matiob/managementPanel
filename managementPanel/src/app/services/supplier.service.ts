import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Supplier } from '../models/ISupplier';
import { suppliers } from '../data/suppliers';

const API_URL = '';
const data: Supplier[] = suppliers || [] as Supplier[];

@Injectable({
  providedIn: 'root',
})
export class SupplierService {
  private suppliers = new BehaviorSubject<Supplier[]>([]);

  constructor(private http: HttpClient) {}

  getAllSuppliers(): void {
    this.http
      .get<Supplier[]>(`${API_URL}`)
      .pipe(
        tap((suppliers: Supplier[]) => {
          this.suppliers.next(suppliers);
        })
      )
      .subscribe();
  }
  getSuppliersFromService() {
    return this.suppliers.asObservable();
  }
  setSuppliersFromService(suppliers: Supplier[]): void {
    this.suppliers.next(suppliers);
  }

  // STATIC CRUD

  getSuppliers(): Supplier[] | null {
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

  getSupplierById(supplierId: number): Supplier | null {
    try {
      const supplier = data.filter(supplier => supplier.id === supplierId)[0];
      if (supplier) {
        return supplier;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }

  getSupplierByName(supplierName: string): Supplier | null {
    try {
      const supplier = data.filter(supplier => supplier.name === supplierName)[0];
      if (supplier) {
        return supplier;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }

  add(supplier: Supplier): Supplier | null {
    try {
      if (supplier) {
        data.push(supplier);
        return supplier;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }

  edit(supplier: Supplier): Supplier | null {
    try {
      if (supplier) {
        const index = data.indexOf(supplier);
        data.splice(index, 1, supplier);
        return supplier;
      }
      return null;
    } catch (error: any) {
      console.error(error.message)
      return null;
    }
  }
  
  delete(supplierId: number): Supplier | null {
    try {
      if (supplierId) {
        const supplier = data.filter(supplier => supplier.id === supplierId)[0];
        if (supplier) {
          const index = data.indexOf(supplier);
          data.splice(index, 1);
          return supplier; 
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

  /* getSuppliers(): Observable<Supplier[]> | null {
    try {
      return this.http
        .get<any>(`${API_URL}`)
        .pipe(map((res: any) => res.data as Supplier[]));
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  getSupplierById(supplierId: number): Observable<Supplier> | null {
    try {
      return this.http
      .get<any>(`${API_URL}?id=${supplierId}`)
      .pipe(map((res: any) => res.data as Supplier));
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  getSupplierByName(supplierName: string): Observable<Supplier> | null {
    try {
      return this.http
      .get<any>(`${API_URL}?name=${supplierName}`)
      .pipe(map((res: any) => res.data as Supplier));
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  add(supplier: Supplier): Observable<Supplier> | null {
    try {
      return this.http.post<Supplier>(`${API_URL}`, supplier); 
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  edit(supplier: Supplier): Observable<Supplier> | null {
    try {
      return this.http.put<Supplier>(`${API_URL}?id=${supplier.id}`, supplier);
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  }

  delete(supplierId: number): Observable<Supplier> | null {
    try {
      return this.http.delete<Supplier>(`${API_URL}?id=${supplierId}`);
    } catch (error: any) {
      console.error(error.message);
      return null;
    }
  } */
}
