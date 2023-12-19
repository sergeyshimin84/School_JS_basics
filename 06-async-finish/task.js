// Задание #1
// Напишите функцию calculateAge(), которая принимает день рождения и возвращает количество лет.

function calculateAge(date) {
    let now = new Date();
    return now.getFullYear() - date.getFullYear();
}

const birthDate = new Date('1990-05-20');
const age = calculateAge(birthDate);

console.log(age);

// Задание #2
// Напишите функцию getDateDifference(), которая возвращает разницу в днях между двумя датами.

function getDateDifference(a, b) {
    let difference;
    a = a.getDate();
    b = b.getDate();
    if (a >= b) {
        difference = a - b;
    } else {
        difference = b - a;
    }
    return difference;
}

const date1 = new Date('2027-06-01');
const date2 = new Date('2027-06-10');
const difference = getDateDifference(date1, date2);
console.log(difference); // 9