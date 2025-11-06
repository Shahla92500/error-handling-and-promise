// Create a file called apiSimulator.ts.
// Implement three functions that simulate API requests using Promises:
// getProductDetails should simulate fetching product details (e.g., name, price).
// getProductReviews should simulate fetching reviews for a product.
// getRelatedProducts should simulate fetching related products.
// Chain these Promises together to display product details, reviews, and related products in the console.
interface Product {
    name: string;
    price: number;
}
const relatedProducts: Product[] = [
    {name: 'mouse', price:20},
    {name: 'charger', price:65}
]
function getProductDetails(){
    return new Promise<Product>((resolve,_reject)=>{
        const product: Product = {name: "keyboard", price:50};
        setTimeout(() =>resolve(product), 1000)
    })
}

function getProductReviews() {
    return new Promise<string[]>((resolve, _reject) => {
        const reviews: string[] = ['good product', 'excellent product'];
        setTimeout (() => resolve(reviews), 1000)
    })
}

function getRelatedProducts() {
    return new Promise((resolve, _reject) => {
        setTimeout (() => resolve(relatedProducts), 100)
    })
}
getProductDetails()
    .then(product => {
        console.log(product)
        return getProductReviews();
    })
    .then(reviews => {
        console.log(reviews);
        return getRelatedProducts();
    })
    .then(relatedProducts => console.log(relatedProducts));


Promise.race([getProductDetails(), getProductReviews(), getRelatedProducts()])
.then(data => console.log(data))
.catch(e => console.error(e))