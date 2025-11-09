// Create a file called apiSimulator.ts.
// Implement three functions that simulate API requests using Promises:
// getProductDetails should simulate fetching product details (e.g., name, price).
// getProductReviews should simulate fetching reviews for a product.
// getRelatedProducts should simulate fetching related products.
// Chain these Promises together to display product details, reviews, and related products in the console.
export interface Product {
    name: string;
    price: number;
}
// const relatedProducts: Product[] = [
//     {name: 'mouse', price:20},
//     {name: 'charger', price:65}
// ]
export function getProductDetails(product: Product){
    return new Promise<Product>((resolve,_reject)=>{
        // const product: Product = {name: "keyboard", price:50};
        setTimeout(() =>resolve(product), 1000)
    })
}

export function getProductReviews() {
    return new Promise<string[]>((resolve, _reject) => {
        const reviews: string[] = ['good product', 'excellent product'];
        setTimeout (() => resolve(reviews), 1000)
    })
}

export function getRelatedProducts(relatedProducts: Product[]) {
    return new Promise<Product[]>((resolve, _reject) => {
        // const product: Product = { name: "keyboard", price: 50 };
        setTimeout (() => resolve(relatedProducts), 100)
    })
}


