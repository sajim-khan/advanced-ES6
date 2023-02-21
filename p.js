// function add (a, b){
//     let c = a + b;
//     return c;
// }
// // const sum = add(1,2)
// // console.log(sum);
// add()

// // ekta array/ object er man bad diye baki value gola destructuring korte pari
// const person = {name : 'John', age : 42, email : 'jdsfh@gmail.com'};
// const {name, ...rest} = person;
// console.log(name);  // Output : John
// console.log(person);    // Output : { name: 'John', age: 42, email: 'jdsfh@gmail.com' }
// console.log(rest);  // Output : { age: 42, email: 'jdsfh@gmail.com' }
//1. Normal function
function add (a, b) {
    return a + b;
}
//2.Arrow function
const add = (a, b) => {return a + b};
//Another way
const add = (a, b) => a + b;
