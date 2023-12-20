import { Order } from '../models/IOrders';

export const orders: Order[] = [
    {
        id: 1,
        supplier: {
            id: 2,
            name: 'Palmolive',
            address: 'Av.Siempreviva 123',
            category: 'Baño',
            cuit: '20-30123123-1',
            email: 'palmolive@mail.com',
            logo: 'http://logo.png'
        },
        products: [
            {
                id: 5,
                name: 'Shampoo',
                price: 75,
                quantity: 10
            },
            {
                id: 6,
                name: 'Acondicionador',
                price: 50,
                quantity: 10
            }
        ],
        date: new Date(),
        description: 'Reparto por Correo Arg.'
    }
]