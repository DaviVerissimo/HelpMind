//import x from './producs.json';

export class ProductService {

    // getProductsSmall() {
    //     return fetch('data/products-small.json').then(res => res.json()).then(d => d.data);
    // }

    getProducts() {
        return fetch('./producs.json').then(res => res.json()).then(d => d.data);
    }

    // getProductsWithOrdersSmall() {
    //     return fetch('data/products-orders-small.json').then(res => res.json()).then(d => d.data);
    // }
}