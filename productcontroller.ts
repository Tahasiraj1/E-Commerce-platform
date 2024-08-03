import {v4 as uuidv4} from 'uuid';
import Product from './Product';
import products from './products';

export const getProducts = (): Product[] => {
    return products;
};

export const createProduct = (name: string, description: string, price: number, image: string): Product => {
    const newProduct: Product = {id: uuidv4(), name, description, price, image};
    products.push(newProduct);
    return newProduct;
}




