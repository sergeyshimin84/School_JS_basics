// Задание №1
// var a = 5;
// let b = 10;
// const c = 13;

// console.log(a, b, c);

// Задание №2

// const a = 100;
// a = 20;
// console.log(a);

// console.log(a)
// let a = 15;
// console.log(a);

// console.log(a);
// var a;
// a = 10; 
// console.log(a);

//Задание №3
let obj = {
    productName: 'Яблоко',
    productPrice: 10,
    productQuantity: 3,
    resultCost: +this.productPrice * +this.thiproductQuantity,
}

function result (obj) {
    return console.log(`Вы купили ${obj.productName} (${obj.productQuantity} шт.) по ${obj.productPrice} ₽. Всего было потрачено: ${obj.resultCost} ₽`);
}

result(obj);