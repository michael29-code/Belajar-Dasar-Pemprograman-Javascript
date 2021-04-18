// (1)

const _ = require('lodash');

// Penamaan menggunakan underscore (_) seperti di atas merupakan standar dari lodash yang perlu kita ikuti.

// (2)
// const myArray = [1, 2, 3, 4];
// let sum = 0;

// for (let i = 0; i < myArray.length; i++) {
//     sum += myArray[i];
// }

// console.log(sum);

// kita bisa menggunakan fungsi reduce

const myArray = [1, 2, 3, 4];
let sum = myArray.reduce((prev, curr) => {
    return prev + curr;
});

console.log(sum);