// Задание #1
// Напишите функцию calculateAge(), которая принимает день рождения и возвращает количество лет.

// function calculateAge(date) {
//     let now = new Date();
//     return now.getFullYear() - date.getFullYear();
// }
// Решение преподавателя
// function calculateAge(birthDate) {
//     const today = new Date();
//     let age = today.getFullYear() - birthDate.getFullYear();
//     const monthDiff = today.getMonth() - birthDate.getMonth();
  
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     } // Производим проверку на месяц и день рождения
  
//     return age;
//   }

// const birthDate = new Date('1990-05-20');
// const age = calculateAge(birthDate);

// console.log(age);

// Задание #2
// Напишите функцию getDateDifference(), которая возвращает разницу в днях между двумя датами.

// function getDateDifference(a, b) {
//     let difference;
//     a = a.getDate();
//     b = b.getDate();
//     if (a >= b) {
//         difference = a - b;
//     } else {
//         difference = b - a;
//     }
//     return difference;
// }
// Решение преподавателя
// function getDateDifference(date1, date2) {
//     const oneDay = 24 * 60 * 60 * 1000;
//     const diffInMilliseconds = Math.abs(date2 - date1);
//     const diffInDays = Math.round(diffInMilliseconds / oneDay);
  
//     return diffInDays;
// }

// const date1 = new Date('2027-06-01');
// const date2 = new Date('2027-06-10');
// const difference = getDateDifference(date1, date2);
// console.log(difference); // 9

// Задание #3
// Напишите функцию getTimeUntilDate(date), 
// которая возвращает объект с информацией о том, сколько времени осталось от текущей даты до переданной. 
// Решение преподавателя
// function getTimeUntilDate(date) {
//     const now = new Date();
//     const timeDifference = date.getTime() - now.getTime();
  
//     if (timeDifference < 0) {
//       return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//     }
  
//     const seconds = Math.floor(timeDifference / 1000);
//     const minutes = Math.floor(seconds / 60);
//     const hours = Math.floor(minutes / 60);
//     const days = Math.floor(hours / 24);
  
//     return {
//       days: days,
//       hours: hours % 24,
//       minutes: minutes % 60,
//       seconds: seconds % 60
//     };
//   }

// const targetDate = new Date('2027-12-31T23:59:59');
// const timeUntilTargetDate = getTimeUntilDate(targetDate);
// console.log(timeUntilTargetDate);
// { days: 100, hours: 20, minutes: 45, seconds: 31 }

// Задание #4
// Напишите функцию isWeekend(), которая проверяет, является ли указанная дата выходным днем.
// const days = [
//     'Воскресенье',
//     'Понедельник',
//     'Вторник',
//     'Среда',
//     'Четверг',
//     'Пятница',
//     'Суббота'
//   ];

// function isWeekend(d) {
//     let n = d.getDay();
//     let check = (days[n] == 'Воскресенье' || days[n] == 'Суббота') ? 'Выходной' : 'Будни';
//     return `${check}: ${days[n]}`;
// }
// Решение преподавателя
// const isWeekend = date => 
// 	[6, 7].indexOf(date.getDay()) !== -1

// const date1 = new Date('2027-07-10');  // Суббота
// const date2 = new Date('2027-07-12');  // Понедельник

// console.log(isWeekend(date1));  // true
// console.log(isWeekend(date2));  // false

// Задание #5
// Напишите функцию, которая проверяет, является ли год високосным. Возвращает true, если да, иначе — false. 
// function isLeapYear(year) {
//     if (!(new Date(year, 1, 29).getMonth()-1)) {
//         return true;
//     } else {
//         return false;
//     }
// }

// console.log(isLeapYear(2023)); // false
// console.log(isLeapYear(2024)); // true

// Задание #6
// Напишите функцию, которая возвращает последнее число месяца.
// function getLastDayOfMonth(year, month) {
//     const date = new Date(year, month + 1, 0);
//     return date.getDate();
// }

// // июнь 2027
// console.log(getLastDayOfMonth(2027, 5)); // 30

// // февраль 2027
// console.log(getLastDayOfMonth(2027, 1)); // 28

// // январь 2027
// console.log(getLastDayOfMonth(2027, 0)); // 31