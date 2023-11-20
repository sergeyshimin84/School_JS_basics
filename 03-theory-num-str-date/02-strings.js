const name = 'Serg';
const age = '39';

function getAge() {
    return age
}

// const old = 'Hello my name is ' + name + ' and my age is ' + age;
// const output = `Hello my name is ${name} and my age is ${age}`;
const output = `Hello my name is ${name} and my age is ${
    getAge() > 18 ? 'Can drive' : 'Cant drive'
}`;

console.log(output);

