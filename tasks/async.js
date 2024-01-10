// Задание #1
// Определите порядок вывода в следующем фрагменте кода без его запуска. 

// console.log('a'); // Выполниться первым, первый в коде.
// new Promise((resolve, reject) => {
// 	console.log('b'); // Выполниться в торым, в промисе без условий.
// 	setTimeout(() => {
// 		console.log('c'); // setTimeout попадает в стек вызовов, выполниться пятым.
// 		resolve();
// 	}, 0);
// })
//   .then(() => console.log('d')); // Выполниться шестым, после setTimeout в промисе.

// console.log('e'); // Выполниться третьим, по коду.
// setTimeout(() => console.log('f'), 0); // setTimeout попадает в стек вызовов, выполниться седьмым, последним.
// console.log('g'); // Выполниться четвертым, по коду.
// Определите для себя, почему вывод произошел именно в таком порядке.

// Задание #2
// Напишите код, который получает список задач по URL https://jsonplaceholder.typicode.com/todos и выводит их в виде списка (<ul>) на страницу. 
// Примечание. Сетевые запросы можно выполнять с помощью функции fetch(), работающей на основе Promise API. 

// const url = 'https://jsonplaceholder.typicode.com/todos';

// let response = await fetch(url);

// if (response.ok) {
//   let json = await response.json();
// } else {
//   alert("Ошибка HTTP: " + response.status);
// }
// Решение преподавателя 
// fetch(url)
//   .then(response => response.json())
//   .then(tasks => {
//     const ul = document.createElement('ul');
//     tasks.forEach(task => {
//       const li = document.createElement('li');
//       li.textContent = task.title;
//       ul.appendChild(li);
//     });
//     document.body.appendChild(ul);
//   })
//   .catch(error => console.error(error));

// Задание #3
// Напишите функцию sumWithDelay(), которая принимает delay, a, b и возвращает a + b через delay миллисекунд. 
// Функция должна работать на основе Promise API. 

// function sumWithDelay(delay, a, b) {
//   return new Promise(resolve => setTimeout(() => resolve(a + b), delay));
// }

// async function start() {
//   const result = await sumWithDelay(1000, 5, 5);
//   console.log(result);
// }

// start();

// Задание #4
// Напишите функцию, имитирующую запрос к серверу за получением пользователя. 
// Она принимает id и с задержкой 2500 миллисекунд возвращает пользователя из массива USERS с соответствующим id. 
// В случае отсутствия пользователя сгенерировать обработать исключение.

// const USERS = [
//   { id: '001', name: "Алексей", age: 25 },
//   { id: '002', name: "Иван", age: 28 },
//   { id: '003', name: "Егор", age: 30 },
// ];
// // Решение преподавателя
// function fetchUser(id) {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 		  const user = USERS.find(user => user.id === id);
// 		  if (user) {
// 			resolve(user);
// 		  } else {
// 			reject(new Error('Пользователь не найден'));
// 		  }
// 		}, 2500);
// 	  });
// };

// async function start() {
//   // ...
//   const result = await fetchUser('001');
//   console.log(result); // { id: '001', name: "Алексей", age: 25 }
//   // ...
// }

// start();