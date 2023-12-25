// Задание #1
// Создайте класс Circle, который имеет поле radius, а также метод getArea(), 
// высчитывающий площадь круга и округляющий её до двух знаков после запятой. 
// Сделайте так, чтобы код ниже работал:

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

const circle = new Circle(5);
console.log(circle.getArea()); // "78.54"

// Задание #2
// Реализуйте класс Product, который имеет поля name и price. 
// Также он имеет метод priceWithDiscount(), который возвращает обновленную цену с учетом переданной скидки (в процентах). 
// Метод не изменяет само значение price в объекте, а только выводит обновленное.  

// Сделайте так, чтобы код ниже работал:

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    priceWithDiscount(discount) {
        return this.price - (this.price * (discount / 100));
    }
}

const product = new Product("Phone", 1000);
console.log(product.priceWithDiscount(10)); // 900
console.log(product.priceWithDiscount(20)); // 800

// Задание #3
// Реализуйте класс Person, который имеет поле friends (изначально пустой массив). Также он имеет методы:
// addFriend() — принимает имя нового друга и добавляет его в массив friends;
// showFriends() — выводит в консоль строку со всеми друзьями через запятую.
// Сделайте так, чтобы код ниже работал:

class Person {
    friends = [];
    addFriend(name) {
        this.friends.push(name);
    }
    showFriends() {
        return console.log(this.friends);
    }
}

const person = new Person();
person.addFriend("Иван");
person.addFriend("Сергей");
person.addFriend("Игорь");
person.showFriends(); // Иван, Сергей, Игорь

// Задание #4
// 1. Создайте класс Animal с полями name, favoriteFood, а также методами:
// makeSound() — вывести звук животного в консоль;
// sayName() — вывести имя животного в консоль;
// sayInfo() — вывести любимое блюдо животного в консоль.
// 2. Создайте еще 2 класса, которые будут наследоваться от класса Animal — Cat, Dog. 
// Переопределите для них метод makeSound(), чтобы он всегда возвращал соответствующий звук животного. 
// 3. Сделайте так, чтобы код ниже работал:

class Animal {
    constructor(name, favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
    }
    makeSound () {
        return console.log();
    }
    sayName () {
        return console.log(`My name is ${this.name}`);
    }
    sayInfo() {
        return console.log(`${this.name}'s favorite food is ${this.favoriteFood}`);
    }
}

class Cat extends Animal {
    constructor(name, favoriteFood) {
        super(name, favoriteFood);
    }
}

class Dog extends Animal {
    constructor(name, favoriteFood) {
        super(name, favoriteFood);
    }
}

const dog = new Dog('Rex', 'Meat');
const cat = new Cat('Barsik', 'Fish');

cat.makeSound(); // Meow
dog.makeSound(); // Gav!

dog.sayName(); // My name is Rex
cat.sayName(); // My name is Barsik

dog.sayInfo(); // Rex's favorite food is Meat
cat.sayInfo(); // Barsik's favorite food is Fish

// Задание #5
// Создайте объект foo со свойством a равным 5. Также добавьте ему два метода:
// bar() — с помощью ключевого слова function;
// baz() — с помощью стрелочной функции.
// Внутри методов выведите в консоль this.a и затем выполните следующий код:

foo.bar();
foo.baz();

// Задание #6
// Дан следующий фрагмент кода:

const boxFactory = {
	type: 'box',
	count: 0,
	produce: () => {
		this.count++;
		return 'Box №' + this.count;
	}
}

const produceBox = (produceFn) => {
	const boxName = produceFn();
	console.log(boxName);
}

for(let i = 0; i < 25; i++) {
	produceBox(boxFactory.produce);
}
// Отредактируйте код так, чтобы при его работе выводились корректные номера коробок. 
// Функцию produceBox() править нельзя. 