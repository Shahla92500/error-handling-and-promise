
interface Order {
    productId: string;
    quantity: number;
    price: number;
}

class ValidationError extends Error {
    name: string
    constructor(message: string){
        super(message);
        this.name = 'ValidationError';
    }
}
class PaymentError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'PaymentError';
    }
}
function processOrder(order: Order) {
    if (order.quantity < 1){
        // Throws a ValidationError if quantity is less than 1.
       throw new ValidationError('Quantity must be greater than 0.'); 
    }

    if (order.price < 0) {
        // Throws a PaymentError if price is not a positive number.
        throw new PaymentError('Price must be a positive number.');
    }

    console.log(`Order was processed successfully.`);
    
}

function handleOrder(order: Order) { 

    try {
        processOrder(order);
    } catch (error) {
      if (error instanceof ValidationError) {
          console.error("Validation Error:", error.message);
      } else if (error instanceof PaymentError){
          console.error("Payment Error:", error.message);  
      } else {
          console.error("Unknown Error:");
      }
    }
}
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