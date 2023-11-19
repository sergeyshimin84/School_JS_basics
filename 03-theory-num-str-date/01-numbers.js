/**
const num = 42; // integer, целочисленное
const float = 42.42; // float, число с плавающей запятой
const pow = 10e3; // степень
const big = 1_000_000_000; // большие числа удобней разделять нижним подчеркиванием (не влияет на число)
const str = Number('42'); // переводим строку в число
console.log(str);
console.dir(Number); // можно посмотреть информацию по объектам

console.log(Number.MAX_SAFE_INTEGER); // самое большое безопасное числовое значение
console.log(Math.pow(2, 53) - 1); // 2 в степени 53 минус 1
console.log(Number.MIN_SAFE_INTEGER); // минимально возможное безопасное числовое значение
console.log(Number.MAX_VALUE); // максимально возможное числовое значение
console.log(Number.MIN_VALUE); // минимально возможное числовое значение
console.log(Number.POSITIVE_INFINITY); // бесконечность
console.log(Number.NEGATIVE_INFINITY); // отрецательная бесконечность
console.log(1 / 0); // пример бесконечного числа
console.log(Number.isFinite(Infinity)); // проверяет является ли число конечным, возвращает true/false
const weird = 23 / undefined; // получаем NaN 
console.log(Number.isNaN(weird)); // проверяет на NaN, возвращает true/false
console.log(Number.isNaN(22)); // вернет false
*/

const strInt = '42';
const strFloat = '42.42';

// console.log(Number(strInt)); // переводим строку в цифру
// console.log(Number(strFloat)); // переводим строку в цифру
// console.log(parseInt(strInt)); // переводит в цифру
// console.log(parseFloat(strFloat)); // переводит в цифру
// console.log(+strInt, +strFloat); // переводим к числу оператором "+"

const fixed = (0.1 + 0.2).toFixed(10);
console.log(parseFloat(fixed));

// BigInt
console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n); // работа с большими числами (ставим n после числа, обознаячая тип данных как bigint)
console.log(typeof - 42n); // вернется bigint
// console.log(42.42n); // error, bigint использует только целочисленные значения

// console.log(10n - 4); // error
console.log(parseInt(10n) - 4); // метод parseInt работает с bigint, позволяет продолжить работу с обычным числом
console.log(10n - BigInt(4)); // рассчитает
console.log(5n / 2n); // вернет 2, целое число (дробная чать опускается)
console.log(5 / 2); // вернет 2.5

// Math
