/*
    1. Get an array
    2. for every elements of the array do something
    3. store the result in an array
    4. return the result array
*/
// const numbers = [1,4,2,3,9,6]
// const doubleIt = num => num * 2;
// const makeDouble = numbers.map(doubleIt);
// console.log(makeDouble);

// const fiveTimes = [1,2,3,4,5,].map(x => x * 5)
// console.log(fiveTimes); // output : [ 5, 10, 15, 20, 25 ]

const numbers = [24,34,46,56,78,50,66,72,];
const half = numbers.map(x => x/2);
console.log(half);  // Output :  [12, 17, 23, 28,39, 25, 33, 36]

const friends = ['Jihad Hossen','Shovo', 'Hasib', 'Tofazzol', 'Tamim Bin Kashim', 'Mehedi Hasan Rumi' ]
const firstLetter = friends.map(x => x[0]);
console.log(firstLetter);  // Output : [ 'J', 'S', 'H', 'T', 'T', 'M' ]
const nameLength = friends.map(x => x.length);
console.log(nameLength);  // Output : [ 12, 5, 5, 8, 16, 17 ]

const products = [
    { id : 1, name : 'Iphone', price : 60000},
    { id : 2, name : 'Laptop', price : 160000},
    { id : 3, name : 'I-Pad', price : 40000},
    { id : 4, name : 'mobile', price : 20000},
    { id : 5, name : 'Watch', price : 10000}
]
const items = products.map(product => product.name);
const prices = products.map(product => product.price);
console.log(items);     // Output : [ 'Iphone', 'Laptop', 'I-Pad', 'mobile', 'Watch' ]
console.log(prices); // Output : [ 60000, 160000, 40000, 20000, 10000 ]