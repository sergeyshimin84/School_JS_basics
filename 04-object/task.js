// Задание #1
// Дан объект машины. 

const car = {
  name: 'Hendai Solaris',
	type: 'sedan',
	maxSpeed: '320',
	color: 'red',
};

function getCar (...car) {
    return `
    <article>
    <div>
        <h2>${car.name}</h2>
        <span>${car.type}</span>
    </div>
    <div>
        <span>Maximum speed:</span>
        <span>${car.maxSpeed}</span>
    </div>
    <div>
        <span>Color:</span>
        <span>${car.color}</span>
    </div>
    </article>
    `
};

// Задание #2
// Необходимо написать функцию countWords(), 
// которая принимает предложение и подсчитывает количество слов в нем.

const sentence = "Hello, how are you?";
function countWords(str) {
    return str.split(' ')
        .filter(function(n) { return n != '' })
        .length;
}

console.log(countWords(sentence)); // 4

// Решение преподавателя
const countWords2 = str => str.split(' ').length

console.log(countWords2(sentence)); // 4

// Задание #3
// Необходимо написать функцию getInitials(), 
// которая принимает полное имя в виде строки (например, “John Doe”) и возвращает инициалы в формате “J. D.”.

const fullName = "John Doe";
function getInitials(str) { 
    return str.split(' ').map((n)=>n[0]).join('. ');
};

const initials = getInitials(fullName);

console.log(initials); // "J. D."

// Решение преподавателя
const getInitials2 = name => name.split(' ')
    .map((el) => `${el[0].toUpperCase()}. `) // в данном примере начальные буквы и так в верхнем регистре, можно обойтись без toUpperCase()
    .join('');

const initials2 = getInitials2(fullName);

console.log(initials2); // "J. D."

// Задание #4
// Необходимо написать функцию generateGoogleString(), 
// которая принимает число и возвращает сроку ”Google” с указанным количеством букв “o”. 
// При этом минимальное количество букв “о” равно 2.

// function generateGoogleString(quantity) {
//     const str = 'Google';
//     return (quantity > 0) ? str.split('').fill('o', 3, quantity + 1).join('') : str; // !разобрался не доконца
// }

// Решение преподавателя
const generateGoogleString = (times = 0) => `G${'o'.repeat(Math.max(2, times))}gle`

console.log(generateGoogleString(4));
// Goooogle
console.log(generateGoogleString(0));
// Google
console.log(generateGoogleString(-2));
// Google

// Задание #5
// Реализуйте функцию countVowels(), 
// которая подсчитывает количество гласных букв (латинских и кириллических) в переданной строке. 

const str = "Hello, Привет!";
function countVowels(str) {
    let m = str.match(/[aeiouаоуыэяеёюи]/gi); // ищем с помощью регулярного выражения 
    // g заставляет его выполнять поиск по всей строке, i делает его нечувствительным к регистру
    return m === null ? 0 : m.length;
}
console.log(countVowels(str)); // 4

// Решение преподавателя
const countVowels2 = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }
};

console.log(countVowels2(str)); // 4