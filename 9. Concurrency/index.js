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

// (10)

// const state = {
//     stock: {
//         coffeeBeans: 250,
//         water: 1000,
//     },
//     isCoffeeMachineBusy: false,
// }

// const checkAvailability = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!state.isCoffeeMachineBusy) {
//                 resolve("Mesin kopi siap digunakan.");
//             } else {
//                 reject("Maaf, mesin sedang sibuk.");
//             }
//         }, 1000);
//     });
// };

// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         state.isCoffeeMachineBusy = true;
//         setTimeout(() => {
//             if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
//                 resolve("Stok cukup. Bisa membuat kopi.");
//             } else {
//                 reject("Stok tidak cukup!");
//             }
//         }, 1500);
//     });
// };

// const brewCoffee = () => {
//     console.log("Membuatkan kopi Anda...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Kopi sudah siap!")
//         }, 2000);
//     });
// };

// function makeEspresso() {
//     checkAvailability()
//         .then((value) => {
//             console.log(value);
//             return checkStock();
//         })
//         .then((value) => {
//             console.log(value)
//             return brewCoffee();
//         })
//         .then(value => {
//             console.log(value);
//             state.isCoffeeMachineBusy = false;
//         })
//         .catch(rejectedReason => {
//             console.log(rejectedReason);
//             state.isCoffeeMachineBusy = false;
//         });
// }

// makeEspresso();


// 11


// const state = {
//     stock: {
//         coffeeBeans: 250,
//         water: 1000,
//     },
//     isCoffeeMachineBusy: false,
// }

// const checkAvailability = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!state.isCoffeeMachineBusy) {
//                 resolve("Mesin kopi siap digunakan.");
//             } else {
//                 reject("Maaf, mesin sedang sibuk.");
//             }
//         }, 1000);
//     });
// };

// const boilWater = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Memanaskan air...");
//         setTimeout(() => {
//             resolve("Air panas sudah siap!");
//         }, 2000);
//     })
// }

// const grindCoffeeBeans = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Menggiling biji kopi...");
//         setTimeout(() => {
//             resolve("Kopi sudah siap!");
//         }, 1000);
//     })
// }
// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         state.isCoffeeMachineBusy = true;
//         setTimeout(() => {
//             if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
//                 resolve("Stok cukup. Bisa membuat kopi.");
//             } else {
//                 reject("Stok tidak cukup!");
//             }
//         }, 1500);
//     });
// };

// const brewCoffee = () => {
//     console.log("Membuatkan kopi Anda...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Kopi sudah siap!")
//         }, 2000);
//     });
// };

// function makeEspresso() {
//     checkAvailability()
//         .then((value) => {
//             console.log(value);
//             return checkStock();
//         })
//         .then(value => {
//             console.log(value);
//             const promises = [boilWater(), grindCoffeeBeans()];
//             return Promise.all(promises);
//         })
//         .then((value) => {
//             console.log(value)
//             return brewCoffee();
//         })
//         .then(value => {
//             console.log(value);
//             state.isCoffeeMachineBusy = false;
//         })
//         .catch(rejectedReason => {
//             console.log(rejectedReason);
//             state.isCoffeeMachineBusy = false;
//         });
// }

// makeEspresso();

// (12)
// kita tidak dapat melakukannya dengan teknik seperti ini untuk mendapatkan nilai coffee

// function makeCoffee() {
//     const coffee = getCoffee(); // async process menggunakan promise
//     console.log(coffee);
// }

// makeCoffee();

// tetapi harus seperti ini 
// Promise
// function makeCoffee() {
//     getCoffee().then(coffee => {
//         console.log(coffee);
//     });
// }

// makeCoffee();
// // atau ini
// // callback
// function makeCoffee() {
//     getCoffee(function (coffee) {
//         console.log(coffee);
//     });
// }

// makeCoffee();

// (13)
// const getCoffee = () => {
//     return new Promise((resolve, reject) => {
//         const seeds = 100;
//         setTimeout(() => {
//             if (seeds >= 10) {
//                 resolve("Kopi didapatkan!");
//             } else {
//                 reject("Biji kopi habis!");
//             }
//         }, 1000);
//     })
// }

// untuk mendapatkan nilai kita bisa menggunakan.then()
// function makeCoffee() {
//     getCoffee().then(coffee => {
//         console.log(coffee);
//     });
// }

// makeCoffee();

// tetapi dengan async - await memungkinkan kita menuliskan proses asynchronous layaknya proses synchronous.
// function makeCoffee() {
//     const coffee = getCoffee();
//     console.log(coffee);
// }

// makeCoffee();
// Namun, ketika kode di atas dijalankan hasilnya tidak akan sesuai yang kita harapkan karena fungsi getCoffee() merupakan object Promise.Untuk menunggu fungsi getCoffee() yang berjalan secara asynchronous, tambahkan keyword await sebelum pemanggilan fungsi getCoffee().

// Kemudian, karena fungsi makeCoffee() sekarang menangani proses asynchronous, maka fungsi  tersebut juga menjadi fungsi asynchronous.Tambahkan async sebelum deklarasi fungsi untuk membuatnya menjadi asynchronous.
// maka kodenya 
// const getCoffee = () => {
//     return new Promise((resolve, reject) => {
//         const seeds = 100;
//         setTimeout(() => {
//             if (seeds >= 10) {
//                 resolve("Kopi didapatkan!");
//             } else {
//                 reject("Biji kopi habis!");
//             }
//         }, 1000);
//     })
// }
// async function makeCoffee() {
//     const coffee = await getCoffee();
//     console.log(coffee);
// }

// makeCoffee();

// (13)
//const getCoffee = () => {
//     return new Promise((resolve, reject) => {
//         const seeds = 100;
//         setTimeout(() => {
//             if (seeds >= 10) {
//                 resolve("Kopi didapatkan!");
//             } else {
//                 reject("Biji kopi habis!");
//             }
//         }, 1000);
//     })
// }
// async function makeCoffee() {
//     try {
//         const coffee = await getCoffee();
//         console.log(coffee);
//     } catch (rejectedReason) {
//         console.log(rejectedReason);
//     }
// }

// makeCoffee();


// (14)

// const state = {
//     stock: {
//         coffeeBeans: 250,
//         water: 1000,
//     },
//     isCoffeeMachineBusy: false,
// }

// const checkAvailability = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!state.isCoffeeMachineBusy) {
//                 resolve("Mesin kopi siap digunakan.");
//             } else {
//                 reject("Maaf, mesin sedang sibuk.");
//             }
//         }, 1000);
//     });
// };

// const boilWater = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Memanaskan air...");
//         setTimeout(() => {
//             resolve("Air panas sudah siap!");
//         }, 2000);
//     })
// }

// const grindCoffeeBeans = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Menggiling biji kopi...");
//         setTimeout(() => {
//             resolve("Kopi sudah siap!");
//         }, 1000);
//     })
// }
// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         state.isCoffeeMachineBusy = true;
//         setTimeout(() => {
//             if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
//                 resolve("Stok cukup. Bisa membuat kopi.");
//             } else {
//                 reject("Stok tidak cukup!");
//             }
//         }, 1500);
//     });
// };

// const brewCoffee = () => {
//     console.log("Membuatkan kopi Anda...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Kopi sudah siap!")
//         }, 2000);
//     });
// };

// // lihat kode dibawah
// async function makeEspresso() {
//     try {
//         await checkAvailability();
//         await checkStock();
//         const coffee = await brewCoffee();
//         console.log(coffee);
//     } catch (rejectedReason) {
//         console.log(rejectedReason);
//     }
// }

// makeEspresso();

// (15)


// const state = {
//     stock: {
//         coffeeBeans: 250,
//         water: 1000,
//     },
//     isCoffeeMachineBusy: false,
// }

// const checkAvailability = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (!state.isCoffeeMachineBusy) {
//                 resolve("Mesin kopi siap digunakan.");
//             } else {
//                 reject("Maaf, mesin sedang sibuk.");
//             }
//         }, 1000);
//     });
// };

// const boilWater = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Memanaskan air...");
//         setTimeout(() => {
//             resolve("Air panas sudah siap!");
//         }, 2000);
//     })
// }

// const grindCoffeeBeans = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Menggiling biji kopi...");
//         setTimeout(() => {
//             resolve("Kopi sudah siap!");
//         }, 1000);
//     })
// }
// const checkStock = () => {
//     return new Promise((resolve, reject) => {
//         state.isCoffeeMachineBusy = true;
//         setTimeout(() => {
//             if (state.stock.coffeeBeans >= 16 && state.stock.water >= 250) {
//                 resolve("Stok cukup. Bisa membuat kopi.");
//             } else {
//                 reject("Stok tidak cukup!");
//             }
//         }, 1500);
//     });
// };

// const brewCoffee = () => {
//     console.log("Membuatkan kopi Anda...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Kopi sudah siap!")
//         }, 2000);
//     });
// };

// // lihat kode dibawah
// async function makeEspresso() {
//     try {
//         await checkAvailability();
//         await checkStock();
//         await Promise.all([boilWater(), grindCoffeeBeans()]);
//         const coffee = await brewCoffee();
//         console.log(coffee);
//     } catch (rejectedReason) {
//         console.log(rejectedReason);
//     }
// }

// makeEspresso();




// quiz

// class NetworkError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'NetworkError';
//     }
// }

// // TODO: 1
// const fetchingUserFromInternet = (isOffline) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isOffline) {
//                 reject(new NetworkError('Gagal mendapatkan data dari internet'));
//             } else {
//                 const user = { name: 'John', age: 18 };
//                 resolve(user);
//             }
//         }, 500);
//     })
// }


// // TODO: 2
// async function gettingUserName() {
//     try {
//         const user = await fetchingUserFromInternet(false);
//         return (user.name);
//     } catch (error) {
//         console.log(error.message);
//     }
// }