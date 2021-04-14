// (1);

// try {
//     console.log("Awal blok try");   // (1)
//     errorCode;                      // (2)
//     console.log("Akhir blok try");  // (3)
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// (2)
// try {
//     console.log("Awal blok try");
//     console.log("Akhir blok try");
// } catch (error) {
//     console.log("Baris ini diabaikan");
// } finally {
//     console.log("Akan tetap dieksekusi");
// }

// (3)
// let json = '{ "name": "Yoda", "age": 20 }';

// try {
//     let user = JSON.parse(json);

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

// (4)
// let json = '{ bad json }';

// try {
//     let user = JSON.parse(json);

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }
// (5)
// let json = '{ "age": 20 }';

// try {
//     let user = JSON.parse(json);

//     console.log(user.name); // undefined
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }


// (6)
// let json = '{ "age": 20 }';

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("'name' is required.");
//     }

//     console.log(user.name); // undefined
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }

// (7)

// let json = '{ "name": "Yoda", "age": 20 }';

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("'name' is required.");
//     }

//     errorCode;

//     console.log(user.name); // Yoda
//     console.log(user.age);  // 20
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }

// let json = '{ "name": "Yoda", "age": 20 }';

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new SyntaxError("'name' is required.");
//     }

//     errorCode;

//     console.log(user.name); // Yoda
//     console.log(user.age);  // 20
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log(`JSON Error: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//         console.log(error.message);
//     } else {
//         console.log(error.stack);
//     }
// }


// (9)
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

// let json = '{ "age": 30 }';

// try {
//     let user = JSON.parse(json);

//     if (!user.name) {
//         throw new ValidationError("'name' is required.");
//     }
//     if (!user.age) {
//         throw new ValidationError("'age' is required.");
//     }

//     console.log(user.name);
//     console.log(user.age);
// } catch (error) {
//     if (error instanceof SyntaxError) {
//         console.log(`JSON Syntax Error: ${error.message}`);
//     } else if (error instanceof ValidationError) {
//         console.log(`Invalid data: ${error.message}`);
//     } else if (error instanceof ReferenceError) {
//         console.log(error.message);
//     } else {
//         console.log(error.stack);
//     }
// }

// quiz
// // TODO 1
// class ValidationError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }
// }
// // TODO 2
// const validateNumberInput = (a, b, c) => {
//     if (typeof a !== 'number') {
//         throw new ValidationError("Argumen pertama harus number");
//     }
//     if (typeof b !== 'number') {
//         throw new ValidationError("Argumen kedua harus number");
//     }
//     if (typeof c !== 'number') {
//         throw new ValidationError("Argumen ketiga harus number");
//     }
// }

// const detectTriangle = (a, b, c) => {
//     // TODO 3
//     try {
//         validateNumberInput(a, b, c);
//         if (a === b && b === c) {
//             return 'Segitiga sama sisi';
//         }

//         if (a === b || a === c || b === c) {
//             return 'Segitiga sama kaki';
//         }

//         return 'Segitiga sembarang';
//     } catch (error) {
//         if (error instanceof ValidationError) {
//             return error.message;
//         }
//     }

// };