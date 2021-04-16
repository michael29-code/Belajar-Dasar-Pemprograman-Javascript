// (1)
// console.log("Selamat datang!");
// setTimeout(() => {
//     console.log("Terima kasih sudah mampir, silakan datang kembali!");
// }, 3000);
// console.log("Ada yang bisa dibantu?");

// (2)
// const orderCoffee = () => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//     }, 3000);
//     return coffee;
// }

// const coffee = orderCoffee();
// console.log(coffee);


// (3)
// const orderCoffee = callback => {
//     let coffee = null;
//     console.log("Sedang membuat kopi, silakan tunggu...");
//     setTimeout(() => {
//         coffee = "Kopi sudah jadi!";
//         callback(coffee);
//     }, 3000);
// }

// orderCoffee(coffee => {
//     console.log(coffee);
// });

// (4)
// synchronous
// function makeACake(...rawIngredients) {
//     const ingredients = collectIngredients(rawIngredients);
//     dough = makeTheDough(ingredients);
//     pouredDough = pourDough(dough);
//     cake = bakeACake(pouredDough);
//     console.log(cake);
// }

// (5)
// asynchronous

// function makeACake(...rawIngredients) {
//     collectIngredients(rawIngredients, function (ingredients) {
//         makeTheDough(ingredients, function (dough) {
//             pourDough(dough, function (pouredDough) {
//                 bakeACake(pourDough, function (cake) {
//                     console.log(cake);
//                 })
//             })
//         })
//     });
// }

// (6)
// function makeACake(...rawIngredients) {
//     collectIngredients(rawIngredients)
//         .then(makeTheDough)
//         .then(pourDough)
//         .then(bakeACake)
//         .then(console.log);
// }

// (7)
// const executorFunction = (resolve, reject) => {
//     const isCoffeeMakerReady = true;
//     if (isCoffeeMakerReady) {
//         resolve("Kopi berhasil dibuat");
//     } else {
//         reject("Mesin kopi tidak bisa digunakan");
//     }
// }


// const makeCoffee = () => {
//     return new Promise(executorFunction);
// }
// const coffeePromise = makeCoffee();
// console.log(coffeePromise);

// (8)
// const executorFunction = (resolve, reject) => {
//     const isCoffeeMakerReady = false;
//     if (isCoffeeMakerReady) {
//         resolve("Kopi berhasil dibuat");
//     } else {
//         reject("Mesin kopi tidak bisa digunakan");
//     }
// }


// const makeCoffee = () => {
//     return new Promise(executorFunction);
// }
// const coffeePromise = makeCoffee();
// console.log(coffeePromise);

// (9)
// const stock = {
//     coffeeBeans: 250,
//     water: 1000,
// }

// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         if (stock.coffeeBeans >= 16 && stock.water >= 250) {
//             resolve("Stok cukup. Bisa membuat kopi");
//         } else {
//             reject("Stok tidak cukup");
//         }
//     });
// };

// const handleSuccess = resolvedValue => {
//     console.log(resolvedValue);
// }

// const handleFailure = rejectionReason => {
//     console.log(rejectionReason);
// }

// checkStock().then(handleSuccess, handleFailure);