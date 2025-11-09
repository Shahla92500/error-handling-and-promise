
import type {Order} from './customErrorHandling'
import {orders} from './main'


export interface User {
    userId: string,
    name : string,
    email: string,
    password: string
}

const ordersOfAUser: Order[] = [
  { orderId: "o1", userId: "u1",productId: 'p1', quantity: 2, price: 19.99 },
  { orderId: "o2", userId: "u2",productId: 'p2', quantity: 1, price: 49.0 },
];

// const orderDetails{}: Order = {
//   {orderId: "o1", userId: "u1",productId: 'p1', quantity: 2, price: 19.99 }

// };

export function fetchUserData (user1: User) :Promise<User> {
    
    return new Promise<User>((resolve, reject) =>{
        const userId = user1.userId;
        setTimeout (()=>{
            user1 ? resolve(user1) : reject(new Error(`User ${userId}. not found`))
        }, 1000)
        }
    )
}

export function fetchOrderHistory (userId?: string): Promise<Order[]> {
    
    return new Promise<Order[]>((resolve) => {
        setTimeout ( () => {
            const result = userId ? ordersOfAUser.filter(order =>order.orderId === userId) : ordersOfAUser
            resolve(result)},
             500)
        }
    )
}

export function fetchOrderDetails(orderId: string): Promise<Order> {
  return new Promise<Order>((resolve, reject) => {
    setTimeout(() => {
      const order = orders.find(o => o.orderId === orderId)
      if (order) resolve(order);
      else reject(new Error(`Order not found for ID:  ${orderId}`));
    }, 400);
  });
}