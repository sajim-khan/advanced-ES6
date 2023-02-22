const numbers = [24,34,46,59,78,50,66,72,];
const fives = numbers.find(n => n % 5 === 0);
console.log(fives);


const products = [
    { id : 5, name : 'Watch', price : 10000},
    { id : 1, name : 'Iphone', price : 60000},
    { id : 2, name : 'Laptop', price : 160000},
    { id : 3, name : 'I-Pad', price : 40000},
    { id : 4, name : 'mobile', price : 20000},
    
]
const price = products.find(product => product.price < 65000)
console.log(price);