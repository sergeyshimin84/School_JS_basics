let num = 22; //number
let firstName = 'Sergey'; //string
const isProgrammer = true; //boolean

firstName = 'Max';
// isProgrammer = false; //error

// alert(firstName);
// console.log('Test:', num, isProgrammer);
// console.log(num + 10);
// console.log(num - 10);
// console.log(num * 10);
// console.log(num / 10);

// let num2 = num +10;
// console.log(num, num2);
// num = num2 - num;
// num2 = num2 + 1;
// console.log(num, num2);

// let num3 = ((num + 10) * 2 / 3);
// console.log(num3);

/* Can Do
let $ = 'test'
let $num = 22
let num$ = 22
let _ = 22
let _num = 22
let num_ = 22
let first_name = 'Elena' // bad
let firstName = 'Elena' // good
let num22 = 10
*/

/* Restricted
let 22num = '11'
let my-num = 1
let const // зарезервированные слова
*/

const resultElement = document.getElementById('result');
console.log(resultElement.textContent);

resultElement.textContent = 22;

