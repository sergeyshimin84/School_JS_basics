// let name = 'Sergey';
// greet('Sergey');
// //  Function Declaration
// function greet(name) {
//     console.log('Hello - ', name)
// }; // можно вызывать до объявления функции

// // Function Expression
// const greet2 = function (name) {
//     console.log('2 Hello - ', name);
// }; // ошибка при вызове до объявления

// greet2('Sergey');

// console.log(typeof greet);
// // console.dir(greet);

// setTimeout(greet('Sergey'), 1500) // вызываем функцию через 1,5 секунды (выполняет код с задержкой)

// setTimeout(function () {
//     greet('Sergey')
// }, 1500); // передана анонимная функция, будет вызвана через 1,5 секунды

// let counter = 0;
// const interval = setInterval(function () {
//     if (counter === 5) {
//         clearInterval(interval)
//     } else {
//         console.log(++counter)
//     }
// }, 2000);

// Arrow Functions
// function greet(name) {
//     console.log('Hello - ', name)
// };
// greet(name);

// const arrow = (name, age) => {
//     console.log(`Hello - , ${name}, ${age}`)
// }; // стралочная функция, позволяет делать сокращенную запись
// arrow(name, 39);

// const arrow2 = (name) => console.log('Hello - ', name); // стерочную функцию можно записывать в одну строчку
// // без фигурных скобок, без return
// arrow2(name);

// function pow(num, exp) {
//     return Math.pow(num, exp)
// };
// console.log(pow(2, 3));

// const pow2 = (num, exp) => Math.pow(num, exp);
// console.log(pow2(2, 3));

// Default Parameters
// const sum = (a = 20, b = a / 2) => a + b; // указали параметры по умолчанию (так же можно вычислять параметр по умолчанию)

// console.log(sum(40, 4)); // передали параметры
// console.log(sum()); // не передали параметры (функция применила по умолчанию)

// function sumAll(...numbers) {
//     // let res = 0;
//     // for (let num of numbers) {
//     //     res += num
//     // };
//     // return res;
//     return numbers.reduce((acc, cur) => (acc += cur), 0); // продвинутый способ решения
// }; // собираем с помощью оператора '...' все параметры которые попадают в функцию в виде массива данных
// console.log(sumAll(1, 2, 3, 4, 5));

// Closures (замыкания)
// function createPerson(name) {
//     return function (lastname) {
//         console.log(name + ' ' + lastname)
//     }
// };

// const addLastName = createPerson('Sergey'); // addLastName принимает в себя функцию function (lastname) с параметром name функции createPerson (который замкнут)
// addLastName('Shimin'); // передаем фамилию в function (lastname)
// addLastName('Ivanov'); // // передаем фамилию в function (lastname)



