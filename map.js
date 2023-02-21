/*
    1. Get an array
    2. for every elements of the array do something
    3. store the result in an array
    4. return the result array
*/
const numbers = [1,4,2,3,9,6]
const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
console.log(makeDouble);

const fiveTimes = [1,2,3,4,5,].map(x => x * 5)
console.log(fiveTimes); // output : [ 5, 10, 15, 20, 25 ]