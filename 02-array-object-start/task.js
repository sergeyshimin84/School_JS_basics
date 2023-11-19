/**
Задание #1

Создайте 2 объекта john и ann с полями name, age, pet и заполните их именем,
возрастом и именем питомца соответственно.

Создайте функцию, которая в параметры принимает объект человека (john или ann), 
и в качестве результата выводит информацию о нем в консоль:

“Меня зовут {name}, мне {age}, у меня есть питомец {pet}”

Создайте функцию incrementAge(), которая в параметры принимает объект человека 
и увеличивает ему возраст на 1.

Выведите циклом все названия свойств и их значения, которые есть у объекта john.
 */
const john = {
    name: 'John',
    age: 26,
    pet: 'dog'
};

const ann = {
    name: 'Ann',
    age: 33,
    pet: 'cat' 
};

function getMessage (obj) {
    return console.log(`Меня зовут ${obj.name}, мне ${obj.age}, у меня есть питомец ${obj.pet}`)
}

function incrementAge(obj) {
    let upAge = obj.age + 1;
    return console.log(upAge);
}

for(let key in john) {
    const val = john[key];
    console.log(key,':', val);
}

getMessage(ann);
incrementAge(john);
// Решение преподавателя:
/**
const info = ({name, age, pet}) => console.log(`Меня зовут ${name}, мне ${age}, у меня есть питомец ${pet}`);

const incrementAge = people => people.age++;

const display = people => {
    for(const [key, value] of Object.entries(people))
        console.log(`${key}: ${value}`);
}

display(john);
*/

/**
Задание #2

Создайте функцию, которая на вход принимает массив, 
а на выходе возвращает сумму его элементов:
 */

function sum(array) {
    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return console.log(sum);
  }
  
const arr = [1, 50, 20, 75, 90];
  
sum(arr); // 236
// Решение преподавателя:
/**
function sum(array) {
  let a = 0;
	for(const i of array) {
		a += i;
  }
	return a;
}

const arr = [1, 50, 20, 75, 90];

sum(arr); // 236
*/

/**
Задание #3

Создайте пустой массив names.
Добавьте в него 5 любых имен.
Выведите массив в консоль.
Уберите из начала и конца массива по 1 элементу.
Снова выведите массив в консоль.
 */

const names = [];
names.push('Сергей', 'Наталья', 'Андрей', 'Ольга', 'Елена');
console.log(names);
names.shift();
names.pop();
console.log(names);

/**
 * Задание #4

Дан массив names. Необходимо сделать функцию, 
которая на основе этого массива генерирует строку c HTML. 
Она представляет из себя список элементов (<ul>), 
где каждый элемент списка (<li>) содержит элемент массива.
 */
const namesGenerated = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];
function generateList (arr) {
    for(let i = 0; i < arr.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNote(arr[i]));    
    }
};

function getNote (note) {
    return `
        <ul>
            <li>${note[0]}</li>
            <li>${note[1]}</li>
            <li>${note[2]}</li>
            <li>${note[3]}</li>
            <li>${note[4]}</li>
        </ul>
    `
};
// Решение преподавателя:
// const render = arr => `<ul>${arr.map(i => `<li>${i}</li>`).join('')}</ul>`;

/**
Задание #5

Дан объект:

Необходимо выполнить деструктуризацию объекта (для всех полей). 
Выведите полученные переменные в консоль. 
 */

const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};

let {age, favColor, height, pet, money} = obj;
console.log(age, favColor, height, pet, money);

/**
 * Задание #6

Даны объекты:

/**
 * {
 *	age: 23,
 *	favColor: 'blue',
 *	height: 188,
 *	pet: 'dog',
 *	money: 11450
 * }
 * 
 * Необходимо создать новый объект obj2, в котором будут все поля объекта obj, но с обновленными значениями полей как у объекта updateObj. 
 */

// const obj = {
// 	age: 22,
// 	favColor: 'red',
// 	height: 188,
// 	pet: 'dog',
// 	money: 12300
// };

const updateObj = {
	age: 23,
	favColor: 'blue',
	money: 11450
};

const obj2 = {
    __proto__: obj,
};
obj2.age = updateObj.age;
obj2.favColor = updateObj.favColor;
obj2.money = updateObj.money;

console.log(obj2);
// Решение преподавателя:
// const obj2 = { ...obj, ...updateObj };