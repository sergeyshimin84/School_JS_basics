// Задание #1
// Напишите функцию sumNumbers(), которая принимает произвольное количество чисел через запятую и возвращает их сумму.

// function sumNumbers(...num) {
//     let sum = 0;
//     for (let i of num) {
//         sum += i
//     }
//     return sum;
// }

// const result1 = sumNumbers(1, 2, 3, 4, 5);
// console.log(result1); // 15

// const result2 = sumNumbers(10, 20, 30);
// console.log(result2); // 60

// Задание #2
// Напишите функцию findMaxValue(), которая принимает массив чисел и находит максимальное значение. 
// Если массив пустой, то возвращается значение undefined.

// function findMaxValue(num) {
//     return Math.max.apply(null ,num)
// }
// let findMaxValue = (num) => (num.length > 0) ? Math.max.apply(null ,num) : undefined;

// const numbers1 = [1, 2, 3, 4, 5];
// const max1 = findMaxValue(numbers1);
// console.log(max1); // 5

// const numbers2 = [10, 20, 5, 30, 15];
// const max2 = findMaxValue(numbers2);
// console.log(max2); // 30

// const emptyArray = [];
// const maxEmpty = findMaxValue(emptyArray);
// console.log(maxEmpty); // undefined

// Задание #3
// Напишите функцию calculateAverage(), которая принимает массив чисел и вычисляет их среднее арифметическое. 
// Если массив пустой, то возвращается 0.

// function calculateAverage (num) {
//     let sum = 0;
//     for (let i of num) {
//         sum += i
//     }
//     if (num.length == 0) {
//         return 0
//     }
//     return sum / num.length;
// }

// const numbers1 = [1, 2, 3, 4, 5];
// console.log(calculateAverage(numbers1)); // 3

// const numbers2 = [10, 20, 30, 40, 50];
// console.log(calculateAverage(numbers2)); // 30

// const emptyArray = [];
// console.log(calculateAverage(emptyArray));

// Задание #4
// Напишите функцию isPalindrome(), которая принимает строку и возвращает true, если она является палиндромом, иначе — false. 
// Примечание. Палиндром — строка, которая читается одинаково слева направо и справа налево. 

// function isPalindrome(str) {
//     str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
//     const lastIndex = str.length - 1;
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[lastIndex - i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isPalindrome('level')); // true
// console.log(isPalindrome('radar')); // true
// console.log(isPalindrome('hello')); // false

// Задание #5
// Напишите функцию removeDuplicates(), которая принимает массив и возвращает новый массив без дубликатов.

// function removeDuplicates(num) {
//     const uniqNum = new Set(num);
//     return [...uniqNum];
// }

// const numbers1 = [1, 2, 3, 3, 4, 5, 5];
// console.log(removeDuplicates(numbers1));  // [1, 2, 3, 4, 5]

// const numbers2 = [10, 20, 30, 30, 40, 40, 50];
// console.log(removeDuplicates(numbers2));  // [10, 20, 30, 40, 50]

// const emptyArray = [];
// console.log(removeDuplicates(emptyArray));  // []

// Задание #6

// Создайте функцию createCounter(), которая принимает начальное значение и возвращает три функции:
// inc() — увеличивает значение на 1;
// dec() — уменьшает значение на 1;
// get() — возвращает текущее значение.
// Пример использования функции:

function createCounter(value) {
    
} // Не разобрался!

const { inc, dec, get } = createCounter(5);
console.log(get()); // 5
inc();
inc();
inc();
dec();
console.log(get()); // 7