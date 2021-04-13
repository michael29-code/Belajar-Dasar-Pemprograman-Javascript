// const coffeeStock = {
//     arabica: 100,
//     robusta: 150,
//     liberica: 200
// }

// module.exports = coffeeStock;



// mutiple export node js

// const coffeeStock = {
//     arabica: 100,
//     robusta: 150,
//     liberica: 200
// };

// const isCoffeeMachineReady = true;

// module.exports = coffeeStock;
// module.exports = isCoffeeMachineReady;

// kita tidak bisa mengekspor dgn cara diatas
// kode kedua berarti kita menginisialisasikan ulang nilai properti module.exports sehingga nilai yang di-export hanya variabel isCoffeeMakerReady.


// solusinya menggunakan object literals { }

// module.exports = { coffeeStock, isCoffeeMachineReady };

// console.log(module);

// ES6 module

// const coffeeStock = {
//     arabica: 100,
//     robusta: 150,
//     liberica: 200
// };

// export default coffeeStock;


// es6 import lebih dari 1 module
const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
};

const isCoffeeMachineReady = true;

export { coffeeStock, isCoffeeMachineReady };