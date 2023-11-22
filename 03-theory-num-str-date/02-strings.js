const name = 'Serg';
const age = '39';

function getAge() {
    return age
}

// const old = 'Hello my name is ' + name + ' and my age is ' + age;
// const output = `Hello my name is ${name} and my age is ${age}`;
// const output = `Hello my name is ${name} and my age is ${
//     getAge() > 18 ? 'Can drive' : 'Cant\'t drive'
// }`;

// console.log(output);

console.log(name.length); // возвращает длину строки
console.log(name);
console.log(name.toUpperCase()); // возвращает строку в верхнем регистре
console.log(name.toLowerCase()); // возвращает строку в нижнем регистре
console.log(name.charAt(name.length - 1)); // вернет последнюю букву слова (индексы как в массиве с нуля) 
console.log(name.indexOf('e')); // вернет индекс буквы (если буква отсутствует то вернет -1)
console.log(name.toLowerCase().startsWith('ser')); // ищем начало строки, если найдем совпадение вернет true
console.log(name.endsWith('r')); // ищем окончание строки, если не находит возвращает false
console.log(name.repeat(2)); // дублирует текст

const password = '    my super pass    ';
console.log(password.trim()); // убирает лишние пробелы
