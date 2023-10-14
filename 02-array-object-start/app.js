/* Theory
const array = [1, 2, 3, 4, 5, 33];
const arrayStrings = ['a', 'b', 'c', null, 22];
const arrayNew = new Array(1, 2, 3, 4, 5, 22, 44);
console.log(array);
console.log(arrayStrings);
console.log(arrayNew);
console.log(array.length);
console.log(array[0]);
console.log(array[array.length - 1]);
console.log(array[10]);
array[0] = 'Hi!';
console.log(array);
array[array.length] = 'meat';
*/

const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

// console.log(inputElement.value);

const notes = ['записать блок про массивы', 'рассказать теорию объектов'];

function render() {
    // for(let i = 0; i < notes.length; i++) {
    //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]));    
    // }

    for(let note of notes) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));    
    }
}

render();

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return //undefined (сообщение не добавляется, завершается работа функции)
    };
    // listElement.innerHTML =
    listElement.insertAdjacentHTML(
        'beforeend', 
        getNoteTemplate(inputElement.value)
    );
    inputElement.value = '';
}

function getNoteTemplate (title) {
    return `
        <li
        class="list-group-item d-flex justify-content-between align-items-center"
        > 
        <span>${title}</span>
        <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
        </span>
        </li>
    `
}

/**
 * Object Theory

const person = {
    firstName: 'Sergey',
    lastName: 'Shimin',
    age: 39,
    getFullName: function () {
        console.log(this.firstName + ' ' + this.lastName) 
    },
};

person.getFullName();
console.log(person['age']);
// console.log(typeof person); //Object
*/

