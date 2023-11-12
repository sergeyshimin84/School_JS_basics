// const names = ['Сергей', 'Наталья', 'Андрей', 'Ольга', 'Елена'];

// names.push('Алена'); //быстрый метод
// names.unshift('Таня') //медленный метод (перебирает весь массив, переназначает индексы)
// let firstName = names.shift(); //удалят и возвращает первый элемент массива
// let name = names.pop(); //удаляет и возвращает последний элемент массива

// console.log('Имена: ', names);

// console.log(names.reverse()); //меняет массив, расставляет элементы в обратном порядке
// console.log(names.toReversed()); //метод toReversed не менят массив, возвращает его элементы в обратном порядке
// console.log(names); //массив не изменился

// const letters = ['e', 'c', 'f', 'b', 'a'];
// console.log(letters.sort()); //меняет массив, сортируя элементы
// console.log(letters.toSorted()); //метод toSorted не менят массив, сортируя элементы
// console.log(letters);

// console.log(names.splice(0, 2)); //удаляет два элемента начиная с нулевого, меняет массив
// console.log(names.toSpliced(2, 2)); //удаляет два элемента начиная с третьего, не менят исходный массив
// console.log(names);

// const greateWoman = 'Елена';
// const index = names.indexOf(greateWoman);
// console.log(index);
// const newNames = names.with(index, 'Елена Великая')
// console.log(index);
// console.log(names[index]);
// console.log(names);
// console.log(newNames);

// const capitalNames = names.map((name) => name.toUpperCase() + '!');
// const capitalNames = names.map(function
//     (name, index) {
//         if (index === 4) {
//            return name.toUpperCase() + '!'
//         }
//         return name;
//     });
// console.log(capitalNames);

// console.log(names.includes('Сергей'));

const people = [
    { name: 'Сергей', budget: 4200 }, 
    { name: 'Наталья', budget: 15100 }, 
    { name: 'Андрей', budget: 1200 }, 
    { name: 'Ольга', budget: 7500 }, 
    { name: 'Елена', budget: 8600 }, 
];

// const finedPerson = people.find(function
//     (person) {
//         return person.budget === 7500;
//     });

// console.log(finedPerson);

// const filtered = people.filter(function (p) {
//     return p.budget > 5000;
// });
// console.log(filtered);