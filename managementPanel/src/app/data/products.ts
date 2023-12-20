import { Product } from '../models/IProduct';

export const products: Product[] = [
    {
        id: 1,
        name: 'Escoba',
        supplier: {
            id: 1,
            name: 'Limpro',
            address: 'Av.Siempreviva 123',
            category: 'Limpieza',
            cuit: '20-30123456-1',
            email: 'limpro@mail.com',
            logo: 'http://logo.png'
        },
        quantity: 50,
        description: 'Barre bien',
        category: 'Limpieza',
        price: 150
    },
    {
        id: 2,
        name: 'Escobillón',
        supplier: {
            id: 1,
            name: 'Limpro',
            address: 'Av.Siempreviva 123',
            category: 'Limpieza',
            cuit: '20-30123456-1',
            email: 'limpro@mail.com',
            logo: 'http://logo.png'
        },
        quantity: 50,
        description: 'Barre muy bien',
        category: 'Limpieza',
        price: 160
    },
    {
        id: 3,
        name: 'Balde',
        supplier: {
            id: 1,
            name: 'Limpro',
            address: 'Av.Siempreviva 123',
            category: 'Limpieza',
            cuit: '20-30123456-1',
            email: 'limpro@mail.com',
            logo: 'http://logo.png'
        },
        quantity: 40,
        description: 'Azul',
        category: 'Limpieza',
        price: 200
    },
    {
        id: 4,
        name: 'Trapo de piso',
        supplier: {
            id: 1,
            name: 'Limpro',
            address: 'Av.Siempreviva 123',
            category: 'Limpieza',
            cuit: '20-30123456-1',
            email: 'limpro@mail.com',
            logo: 'http://logo.png'
        },
        quantity: 150,
        description: 'Algodón',
        category: 'Limpieza',
        price: 75
    },
    {
        id: 5,
        name: 'Shampoo',
        supplier: {
            id: 2,
            name: 'Palmolive',
            address: 'Av.Siempreviva 123',
            category: 'Baño',
            cuit: '20-30123123-1',
            email: 'palmolive@mail.com',
            logo: 'http://logo.png'
        },
        quantity: 150,
        description: 'Coco',
        category: 'Baño',
        price: 75
    },
    {
        id: 6,
        name: 'Acondicionador',
        supplier: {
            id: 2,
            name: 'Palmolive',
            address: 'Av.Siempreviva 123',
            category: 'Baño',
            cuit: '20-30123123-1',
            email: 'palmolive@mail.com',
            logo: 'http://logo.png'
        },
        quantity: 150,
        description: 'Sin frizz',
        category: 'Baño',
        price: 50
    },
    {
        id: 7,
        name: 'Arvejas',
        supplier: {
            id: 3,
            name: 'Arcor',
            address: 'Av.Siempreviva 123',
            category: 'Comestibles',
            cuit: '20-30123789-2',
            email: 'arcor@mail.com',
            logo: 'http://logo.png'
        },
        quantity: 450,
        description: 'Enteras',
        category: 'Comestibles',
        price: 25
    },
    {
        id: 8,
        name: 'Televisor',
        supplier: {
            id: 4,
            name: 'Zanyo',
            address: 'Av.Siempreviva 123',
            category: 'Electrónica',
            cuit: '20-30123483-4',
            email: 'zanyo@mail.com',
            logo: 'http://logo.png'
        },
        quantity: 1500,
        description: 'LED',
        category: 'Electrónica',
        price: 10
    },
]