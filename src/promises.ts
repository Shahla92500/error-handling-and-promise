/** Promises are a way to manage asynchronous tasks in JavaScript. 
 * They represent a value that may not be available yet 
 * but will be resolved at some point in the future. 
 */
const myPromise = new Promise((resolve, _rejecte) => {

    setTimeout (() =>{
        resolve('Got some Data!')
    } , 250)
});
 // successMessage is whatever we passed in the resolve(...) function above.
  // It doesn't have to be a string, 
  // but if it is only a success message, it probably will be.
myPromise
    .then(data => console.log(data))
    .catch(e=>console.error(eval));

const wait = (ms: number) => new Promise((resolve) =>setTimeout(resolve,ms));
wait (10 *1000)
    .then(()=>console.log("10 sec"))
    .catch(e => console.error(e))
wait(1000).then(()=> console.log("Another one"))