// Задание #1
// Дан объект машины. 

const car = {
  name: 'Hendai Solaris',
	type: 'sedan',
	maxSpeed: '320',
	color: 'red',
};

function getCar (...car) {
    return `
    <article>
    <div>
        <h2>${car.name}</h2>
        <span>${car.type}</span>
    </div>
    <div>
        <span>Maximum speed:</span>
        <span>${car.maxSpeed}</span>
    </div>
    <div>
        <span>Color:</span>
        <span>${car.color}</span>
    </div>
    </article>
    `
};

// Задание #2
// Необходимо написать функцию countWords(), 
// которая принимает предложение и подсчитывает количество слов в нем.

const sentence = "Hello, how are you?";
function countWords(str) {
    return str.split(' ')
        .filter(function(n) { return n != '' })
        .length;
}

console.log(countWords(sentence)); // 4

