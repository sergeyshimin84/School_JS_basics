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
}

console.log(person);