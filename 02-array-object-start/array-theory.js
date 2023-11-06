const names = ['Сергей', 'Наталья', 'Андрей', 'Ольга'];

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