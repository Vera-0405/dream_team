
// 1. создать объекты cat и dog
// добавить им на двоих метод eat, метод должен принимать аргумент food (еда)
// методы eat должны ссылаться на одну и ту же функцию eat
// и должны выводить в консоль сообщение вида {cat/dog.name} eats {food}

// 2. const persons = [
//     {
//         name: 'One',
//         age: 1,
//     },
//     {
//         name: 'Two',
//         age: 2
//     },
//     {
//         name: 'Three',
//         age: 3
//     },
//     {
//         name: 'Four',
//         age: 4
//     }
// ];

// создать функицю sayHello() которая выводит сообщение "{NAME} says hello"
// добавить эту функцию каждому объекту как метод sayHello

//const cat ={
// name: `Barsik`,
//age: 2,
//eat: eat
// }
// const dog ={
//name: `Scharik`,
//age: 2,
//eat: eat
//     }
// function eat (food){console.log(`${this.name} eats ${food}`);
// }
// cat.eat(`fish`);
// dog.eat(`meat`);

const persons = [
  {
    name: "One",
    age: 1,
  },
  {
    name: "Two",
    age: 2,
  },
  {
    name: "Three",
    age: 3,
  },
  {
    name: "Four",
    age: 4,
  },
];
function sayHello() {
  console.log(`${this.name} says Hello`);
}
for (let i = 0; i < persons.length; i++) {
  persons[i].sayHello = sayHello;
}
persons[1].sayHello();




// Создать конструктор Car, который принимает параметры
// model, color, price. Конструктор должен возвращать объект в
// котором присутствуют вышеназванные поля со значениями.
// Каждый представитель класса Car должен обладать методом
// run() который выводит сообщение вида : MODEL + “ ” +
// COLOR + ” is running”.

class Car {
  constructor(model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
  }
  run() {
    console.log(`${this.model} , ${this.color} is running`);
  }
}

const bmwX5 = new Car(`X5`, `red`,5000);
bmwX5.run();
