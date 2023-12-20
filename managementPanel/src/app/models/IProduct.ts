import { Supplier } from './ISupplier';
import { Category } from './Types';

export interface Product {
    id: number;
    name: string;
    supplier: Supplier;
    quantity: number;
    description: string;
    category: Category
    price: number;
}