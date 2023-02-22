const numbers = [24,34,46,59,78,51,66,72,];
const bigNumber = numbers.filter(n => n > 30);
const even = numbers.filter(n => n % 2 === 0);
console.log(bigNumber);  // Output : 
console.log(even);  // Output : 

const products = [
    { id : 1, name : 'Iphone', price : 60000},
    { id : 2, name : 'Laptop', price : 160000},
    { id : 3, name : 'I-Pad', price : 40000},
    { id : 4, name : 'mobile', price : 20000},
    { id : 5, name : 'Watch', price : 10000}
]
const items = products.filter(product => product.price > 20000 );
console.log(items); 
