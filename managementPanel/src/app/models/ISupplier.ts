import { Category } from './Types';

export interface Supplier {
    id: number;
    name: string;
    address: string;
    category: Category;
    cuit: string;
    email: string;
    logo: string;
}