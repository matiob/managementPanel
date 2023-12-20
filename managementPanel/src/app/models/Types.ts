export type Category = 'Limpieza' | 'Comestibles' | 'Electrónica' | 'Baño' | 'Jardín';
export type ProdOrder = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}