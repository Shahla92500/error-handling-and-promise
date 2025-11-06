
export interface Order {
  productId: string, 
  quantity: number,
  price: number
}
class ValidationError extends Error {
    constructor(message: string){
        super(message);
        this.name = "ValidationError"
    }
}
class PaymentError extends Error {
    constructor(message:string){
        super(message);
        this.name = 'PaymentError';
    }
}
function processOrder (order: Order): void {
    if (order.quantity <1) {
        throw new ValidationError("the number of order is less than 1");
    }
    if (!(Number.isFinite(order.price)) || order.price<=0) {
        throw new PaymentError("price is not correct")
    }    

}
export function handleOrder (order: Order): void{
try {
      processOrder(order);
      console.log('Order processed:', order);
}catch (error:unknown){
    if (error instanceof ValidationError)  console.error("validation Error", error.message)
    else if (error instanceof PaymentError)  console.error("Payment error:", error.message)
    else if (error instanceof Error) console.error("unknown error:", error.message)
    else console.error("unknown throw:", String(error))

} finally {
}
}
export default handleOrder;