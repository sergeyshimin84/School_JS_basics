// console.log(new Date()); // получаем тукущую дату и время
// const now = new Date();

// const start = new Date(0);
// console.log(start); // дата отчета времени в JS

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getMilliseconds());

// now.setFullYear(2055); // передаем год
// console.log(now);

// console.log(now.toDateString()); // получаем строку с датой
// console.log(now.toTimeString()); // получаем строку с временем
// console.log(now.toLocaleDateString()); // получаем строку с датой в формате нашего региона
// console.log(now.toLocaleTimeString()); // получаем строку с временем в формате нашего региона

// Приложение

let mode = 'time'
const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

fullBtn.onclick = function() {
    mode = 'full'
    update() // вызываем update чтобы избежать задержки при переключении, обновляет output
};
dateBtn.onclick = function() {
    mode = 'date'
    update()
};
timeBtn.onclick = function() {
    mode = 'time'
    update()
};

// setInterval(() => {
//     update()
// }, 1000);
setInterval(update, 1000); // можем сократить запись, т.к. update не принимает никаких параметров
update();

function update() {
    output.textContent = format(mode)
};

// Pure Function
function format(formatMode) {
    const now = new Date(); 
    switch (formatMode) {
        case 'time':
            return now.toLocaleTimeString()
        case 'date':
            return now.toLocaleDateString()
        case 'full':
            return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default:
            return now.toLocaleTimeString()
    }
}