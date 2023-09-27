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

// const resultElement = document.getElementById('result');
// console.log(resultElement.textContent);

// resultElement.textContent = 22;

const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
let action = '+';

// console.log(input2.value);

// const sum = +input1.value + +input2.value;
// resultElement.textContent = sum;
// console.log(typeof sum);
// submitBtn.onclick = () => {
//     console.log('Hello click!');
// }
plusBtn.onclick = () => {
    action = '+';
}

minusBtn.onclick = () => {
    action = '-';
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = result;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = +(inp1.value);
    const num2 = +(inp2.value);
    // if (actionSymbol == '+') {
    //     return num1 + num2;
    // } else {
    //     return num1 - num2;
    // }
    return actionSymbol == '+' ? num1 + num2 : num1 - num2;
}

submitBtn.onclick = () => {
    const result = computeNumbersWithAction(input1, input2, action);
    printResult(result);
}