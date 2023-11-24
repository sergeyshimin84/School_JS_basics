greet('Sergey');
//  Function Declaration
function greet(name) {
    console.log('Hello - ', name)
}; // можно вызывать до объявления функции

// Function Expression
const greet2 = function (name) {
    console.log('2 Hello - ', name);
}; // ошибка при вызове до объявления

greet2('Sergey');

console.log(typeof greet);
// console.dir(greet);

setTimeout(greet('Sergey'), 1500) // вызываем функцию через 1,5 секунды (выполняет код с задержкой)

setTimeout(function () {
    greet('Sergey')
}, 1500); // передана анонимная функция, будет вызвана через 1,5 секунды


