function resolveAfterSeconds(t:number) {
    const myPromise = new Promise(resolve => {
        setTimeout(() => {
            resolve('Done!');
        }, t * 1000);
    });
    return myPromise;
}

async function testAwait() {
console.log('Testing...');
const result = await resolveAfterSeconds(2);
console.log(result);
}

testAwait();