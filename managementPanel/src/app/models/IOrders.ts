import { Supplier } from './ISupplier';
import { ProdOrder } from './Types';

export interface Order {
    id: number;
    supplier: Supplier;
    products: ProdOrder[];
    date: Date;
    description: string;
}