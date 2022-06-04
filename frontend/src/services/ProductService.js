export class ProductService {

    getProductsSmall() {
        return fetch('./products.json').then(res => res.json()).then(d => d.data);
    }

    getProducts() {
        return fetch('./products.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
        return fetch('./products.json').then(res => res.json()).then(d => d.data);
    }
}