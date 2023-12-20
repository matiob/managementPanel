import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/models/ISupplier';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.css']
})
export class SuppliersListComponent implements OnInit {

  suppliers!: Supplier[];

  constructor(private suplierService: SupplierService,
    private router: Router){}

  ngOnInit (): void {
    const suppliers = this.suplierService.getSuppliers();
    this.suppliers = suppliers ? suppliers : [];
  }

  onEdit(supplierId: number): void {
    this.router.navigate([`suppliers/${supplierId}`])
  }

  onDelete(supplierId: number): void {
    try {
      if (supplierId) {
        const res = this.suplierService.delete(supplierId);
        if (res) {
          alert('Supplier deleted!');
        } else {
          alert('Could not delete supplier, try later');
        }
      } else {
        alert('It seems there was a problem, try again');
      }
    } catch (error: any) {
      alert('Error!' + error.message);
    }
  }
}
