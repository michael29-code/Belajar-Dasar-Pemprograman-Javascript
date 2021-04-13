// const coffeeStock = require('./state');

// console.log(coffeeStock);


// const coffeeStock = require('./state');

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//         console.log("Kopi berhasil dibuat!");
//     } else {
//         console.log("Biji kopi habis!");
//     }
// }

// makeCoffee("robusta", 80);

// mengimport 2 module menggunakan destructuring object
// const { coffeeStock, isCoffeeMachineReady } = require('./state');

// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

// menghimport es6
// import coffeeStock from "./state.js";

// Ketika menggunakan export default, kita dapat menggunakan penamaan apa saja saat mendeklarasikan variabel untuk menyimpan nilai yang diimpor.

// import stock from "./state.js";


// import coffeeStock from './state.js';

// const displayStock = stock => {
//     for (const type in stock) {
//         console.log(type);
//     }
// }

// displayStock(coffeeStock);


// es6 named import
// import { coffeeStock, isCoffeeMachineReady } from './state.js';

// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);

import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';

console.log(stock);
console.log(isCoffeeMachineReady);

