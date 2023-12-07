// Задание #1
// Реализуйте функцию isPrimeNumber(), которая принимает число и возвращает true, если оно простое, иначе — false.
// Примечание. Простые числа — это числа, которые больше 1 и не имеют делителей, кроме 1 и самого себя.
function isPrimeNumber(num) {
    if (num > 1) {
        for (let i = 2; i < num; i++) {
          if (num % i == 0) {
            return "Составное число";
          }
        }
        return "Простое число";
    } else {
        return "Число должно быть больше 1";
    }
};

console.log(isPrimeNumber(7));

// Решение преподавателя
function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};

console.log(isPrime(4));

// Задание #2
// Напишите функцию func(), которая принимает num, min, max:
// Если число num < min, то функция возвращает min ** 2.
// Если число num > max, функция возвращает max ** 2.
// Если число num < max - (max - min) / 2, то функция возвращает num ** 2
// Иначе возвращает округленное вниз значение num.
function func(num, min, max) {
    if (num < min) {
        return min ** 2
    } else if (num > max) {
        return max ** 2
    } else if (num < max - ((max - min) / 2)) {
        return num ** 2
    } else {
        return Math.floor(num)
    }
};

console.log(func(3, 1, 10)); // 9
console.log(func(15, 1, 10)); // 100
console.log(func(5, 1, 10)); // 25
console.log(func(8.5, 1, 10)); // 8

// Задание #3
// Создайте функцию isPerfectNumber(), которая принимает целое положительное число в параметры и возвращает true,
// если число является совершенным, и false в противном случае.
// Примечание. Совершенное число — это число, равное сумме всех своих положительных делителей (за исключением самого числа).
// Например, число 6 является совершенным, потому что делители числа 6 (1, 2, 3) в сумме дают 6.
function isPerfectNumber(number) {
    let sum = 1;
    for (let i = 2; i <= number; i++) {
        if ((number % i) == 0 && number != i) {
            sum += i;
        }
    }
    if (sum == number) {
        return `${number} совершенное число`
    } else {
        return `${number} не является совершенным числом`
    }
};

console.log(isPerfectNumber(6));   // true
console.log(isPerfectNumber(28));  // true
console.log(isPerfectNumber(12));  // false
console.log(isPerfectNumber(16));  // false

// Решение преподавателя
const isPerfectNumber2 = num => {
    const a = [];
    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
            a.push(i);
        }
    }
    return a.reduce((a, b) => a + b, 0) === num;	
};

// Задание #4
// Напишите функцию getNumberDigit(), которая принимает число (number) и индекс цифры в числе (digitPosition). 
// Возвращает она цифру числа number, находящуюся на позиции digitPosition. 
// Если происходит попытка чтения числа на позиции, которой не существует (например, кол-во цифр в числе меньше,
// чем передано в digitPosition), то верните undefined.
// Примечание. Нельзя использовать приведение числа к строке.
function getNumberDigit(number, digitPosition) {
    let temp = '' + number;
    let numArr = [...temp].reduce((acc, n) => acc.concat(+n), []);
    console.log(numArr[digitPosition]);
}

getNumberDigit(123, 0) // 1
getNumberDigit(123, 1) // 2
getNumberDigit(123, 2) // 3
getNumberDigit(1, 2) // undefined

// Решение преподавателя
function countDigits(number) {
    if (number === 0) {
      return 1;
    }
    
    let count = 0;
    let num = Math.abs(number);
  
    while (num >= 1) {
      num = Math.floor(num / 10);
      count++;
    }
  
    return count;
  }
  
  function getNumberDigit(number, digitPosition) {
    if (digitPosition < 0) {
      return undefined;
    }
  
    const count = countDigits(number);
  
    if (digitPosition > count) {
      return undefined;
    }
  
    const invertedIndex = count - 1 - digitPosition;
    let tempNumber = Math.abs(number);
  
    for (let i = 0; i < invertedIndex; i++) {
      tempNumber = Math.floor(tempNumber / 10);
    }
    return tempNumber % 10;
};
