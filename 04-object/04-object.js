// Object
const person = {
    name: 'Sergey',
    age: 39,
    languages: ['ru', 'en'],
    address: {
        city: 'Barnaul',
        street: 'Lazurnaya',
    },
    'complex key': 'complex value',
    ['key_' + 21 * 2]: 'computed value', // вычисляемое значение
    greet() {
        console.log('Greet from person')
    },
    arrow: () => {
        console.log('Person Arrow') // this в стрелочной функции ссылается на глобальный объект window
    },
    info() {
        // console.log('Person name:', person.name)
        console.log('Person name:', this.name) // this указывает на объект в контексте которого находится
    },
}

// console.log(person);
// person.arrow();
// person.info();
// const addressKey = 'address';
// console.log(person[addressKey]);
// console.log(person['complex key']);

// person.age++;
// person.languages.push('de');

// console.log(person.age);
// console.log(person.languages);

// delete person.address;
// console.log(person);

// const name = 'Petr';

// const { age, name: firstName = 'TEST', languages } = person; // деструктуризация объекта, меняем значения и устанавливаем свойство по умолчанию

// console.log(languages, age, firstName);

// Итерация объектов

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(person[key])
//     } // корректое получение значений объекта
//     // console.log(key) // выводим ключ
//     // console.log(person[key]) // выводим свойства
// };

// Object.keys(person).forEach((key) => {
//     console.log(person[key])
// }); // keys возвращает массив, проходим по нему с помощью forEach, выводим в консоль

const logger = {
    keys() {
        console.log('Object keys:', Object.keys(this))
    },

    keysAndValues() {
        Object.keys(this).forEach((key) => {
            console.log('Key:', key)
            console.log('Value:', this[key])
        })
    },
}

// logger.keys(person);
// const bound = logger.keys.bind(person);
// bound();
// logger.keys.call(person, false);
// logger.keys.apply(person, [false]);

class Person {
    constructor(name, age) {
        this.name = name ?? 'Undefined name' // можно сразу прописать в конструкторе значение по умолчанию (в случае когда аргумент не будет передан)
        this.age = age ?? 'Undefined age'
    }

    seyHello() {
        console.log('Hello from', this.name)
    }
} // классы позволяют создавать объекты

const newPerson = new Person('Sergey', 39);
const person1  = new Person('Sergey', 39);
const person2 = new Person('Ivan', 29);

console.log(newPerson);
person1.seyHello();
person2.seyHello();