// Задание №1
// var a = 5;
// let b = 10;
// const c = 13;

// console.log(a, b, c);

// Задание №2

// const a = 100;
// a = 20;
// console.log(a);

// console.log(a)
// let a = 15;
// console.log(a);

// console.log(a);
// var a;
// a = 10; 
// console.log(a);

//Задание №3
// const productName = 'Яблоко';
// let productPrice = 10;
// let productQuantity = 3;
// let resultCost = +productPrice * +productQuantity;

// console.log(`Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`);

//Задание №4
// typeof 'Hello'; //string 
// typeof 10; //number
// typeof {}; //object
// typeof null; //object (ошибка языка JS)
// typeof undefined; //undefined
// typeof true; //boolean
// typeof []; //object (массив - объект)
// typeof (() => {}); //function

//Задание №5
// let arr = [
//     10 == 10, //true
//     10 != 10, //false
//     12 == 'Привет', //false (при нестрогом сравнении JS преобразует строку в число)
//     10 < 11, //true
//     12 > 20, //false
//     true && true, //true
//     true && false, //false
//     false && true, //false
//     false || true, //true
//     true || false, //true
//     true || true, //true
//     10 <= 10, //true
//     18 <= 20, //true
//     50 >= 50, //true
//     51 >= 50, //true
//     {} === {}, //false (фактически это два разных объекта)
//     {} == {}, //false (фактически это два разных объекта)
// ]

// console.log(arr);

//Задание №6
// let a = 10;
// let b = 5;

// console.log((a > b) ? true : false);

// 3. Основы JavaScript, ч. 2
// Задание №1
// let a = 21;
// if (a % 2 == 0) {
//     console.log(`${a} четное`);
// } else {
//     console.log(`${a} нечетное`);
//     console.log(`${++a}`);
// };

// Задание №2
// for (let i = 0; i <= 1000; i++) {
//     if (i % 2 != 0) {
//         console.log(`${i} нечетное число`);
//     } else if (i % 12 == 0) {
//         console.log(`${i} число кратно 12`);
//     }
// }

//Задание №3 
// let arr = [1, 10, 15, -100, -23, 19, 15032];

// for(let newArr of arr) {
//     console.log(newArr + (newArr * 0.25));
// }
// for(let i of arr) {
//     console.log(i);
// }

// Задание №4
// let userName = 'Sergey';

// function sayHello(name) {
//     if (!name) {
//         return console.log(`Hello, someone`);
//     } else {
//         return console.log(`Hello, ${name}!`);
//     }
// }

// let sayHello = (name) => {
//     (!name) ? 
//         console.log(`Hello, someone`) : 
//         console.log(`Hello, ${name}!`);
// }

// sayHello(userName);

// Задание №5
// function calc(a, b, operation) {
//     if (operation == '+') {
//         return a + b;   
//     } else if (operation == '-') {
//         return a - b;
//     } else if (operation == '*') {
//         return a * b;
//     } else if (operation == '/') {
//         return a / b;
//     }
// }

// console.log(calc(1, 2, '+')); // 3
// console.log(calc(1, 2, '-')); // -1
// console.log(calc(2, 2, '*')); // 4
// console.log(calc(4, 2, '/')); // 2

// Задание №6
// let age = 39;
// let category = (age >= 18) ? "Взрослый" : "Детский";

// console.log(`${category}, ${age} лет`);

// Задание №7
// let a = 2;
// let b = 5;
// let c = (a >= b) ? a : b;

// console.log(c);
