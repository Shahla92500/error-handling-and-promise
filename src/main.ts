
import  {type Order, handleOrder} from './customErrorHandling'
import {type Product, getProductDetails, getProductReviews, getRelatedProducts} from './apiSimulator'
import {fetchOrderDetails, fetchOrderHistory, fetchUserData, type User} from './dataFetcher'



const order1: Order = { orderId: "o1", userId: "u1",   productId:"chicken",   quantity: 2,      price: 10}; 
const order2: Order = { orderId: "o2", userId: "u2",   productId:"bread",     quantity: 5,      price: 3}; 
const order3: Order = { orderId: "o3", userId: "u3",   productId:"chicken",   quantity: 1,      price: 120}; 

export const orders: Order[] = [order1, order2, order3]
const relatedProducts: Product[] = [
    {name: 'mouse', price:20},
    {name: 'charger', price:65}
]
const user1: User = {
  userId: 'u1',
  name: 'Alice',
  email: 'alice@example.com',
  password: 'secret123',
};

const product: Product = {name: "keyboard", price:50};
handleOrder(order1);
handleOrder(order2);
handleOrder(order3);

getProductDetails(product)
    .then(product => {
        console.log(product)
        return getProductReviews();
    })
    .then(reviews => {
        console.log(reviews);
        return getRelatedProducts(relatedProducts);
    })
    .then(relatedProducts => console.log(relatedProducts))
    .catch(err => console.error("Sequence failed:", err));

Promise.race([getProductDetails(product), getProductReviews(), getRelatedProducts(relatedProducts)])
.then(data => console.log(data))
.catch(e => console.error(e))

Promise.race([fetchUserData(user1), fetchOrderDetails(order1.orderId), fetchOrderHistory(user1.userId)])
.then(data =>console.log(data))
.catch(e => console.error(e))


const out = document.createElement("pre");
document.body.appendChild(out);
const log = (x: any) => (out.textContent += `${JSON.stringify(x, null, 2)}\n`);

getProductDetails(product)
  .then((p) => { log({ product: p }); return getProductReviews(); })
  .then((r) => { log({ reviews: r }); return getRelatedProducts(relatedProducts); })
  .then((rel) => log({ related: rel }))
  .catch((e) => log({ error: String(e) }))
  .finally(() => log("All calls attempted."));

fetchUserData(user1)
  .then((u) => { 
    console.log("user1:", u ); 
    return fetchOrderHistory(user1.userId); 
})
  .then((orders) => { // Order details:
    console.log("Orders:", orders);
    if (!orders.length) throw new Error("No orders found");
    const selected = orders[0];           // simulate a click
    return fetchOrderDetails(selected.orderId);
  })
  .then((detail) => { 
    console.log("Order detail:", detail); // show the detail screen data
  })
  .catch((e) => console.error("Workflow error:", e))
  .finally(() => log("All calls attempted."));