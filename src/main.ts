
import  {type Order, handleOrder} from './customErrorHandling'

const order1: Order = {
    productId:"chicken", 
    quantity: 2,  
    price: 10
}; 
const order2: Order = {
    productId:"bread", 
    quantity: 0,  
    price: 3
}; 
const order3: Order = {
    productId:"chicken", 
    quantity: 1,  
    price: -2
}; 
handleOrder(order1);
handleOrder(order2);
handleOrder(order3);