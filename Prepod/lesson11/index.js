// TODO: closure, this, callback


// const a = 1;
// const b = 3;

// function test (c) { // let c = a
//     const a = 2;

//     function inner () { // let a = c
//         const a = 3;

//         console.log(a); // 1
//     }

//     inner(c);

//     console.log(a); // 1
// }

// test(a);

// TODO: let const  in funcs

// let a = 1;

// function test () {
//     a = 2; // УЖАС! (нету let!)

//     console.log('IM TEST!', a);
// }

// test();

// console.log(a);

// block scope

// let sum = 0;
// let i = 0;

// for (; i < 10; i++) {
//     sum += i;
// }

// console.log( sum / i );

// arrow function

// const sum = function (a,b) {
//     return a + b;
// };

// sum();
// fira code

// const sub = (a, b) => a - b; // return произойдет АВТОМАТИЧЕСКИ!

// const test = (a) => a + 2;

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

// function eat(food) {
//   console.log(`${this.name} eats ${food}`);
// }

// const cat = {
//   name: 'Baron',
//   eat: eat
// };

// const dog = {
//   name: 'Marfa',
//   eat: eat
// };

// function eat(food) {
//   console.log(`${this.name} eats ${food}`);
// }

// cat.eat('fish');

// const persons = [
//     { name: 'One', age: 1 },
//     { name: 'Two', age: 2 },
//     { name: 'Three', age: 3 },
//     { name: 'Four', age: 4 }
// ];

// // Общая функция sayHello
// function sayHello() {
//     console.log(`${this.name} says hello`);
// }

// // Добавляем метод каждому объекту
// persons.forEach(person => {
//     person.sayHello = sayHello;
// });

// // Примеры вызова
// persons[0].sayHello(); // One says hello
// persons[1].sayHello(); // Two says hello
// persons[2].sayHello(); // Three says hello
// persons[3].sayHello(); // Four says hello

const car = {
  model: "tesla",
  adress: {
    country: {
      city: {
        name: "Boston",
        street: {
          name: "pushkina",
          number: 2,
        },
      },
    },
    region: ["Iowa", "Texas", "California"],
  },
  specs: {
    price: {
      low: 2000,
      mid: 3000,
      high: 5000,
    },
    engine: {
      power: 400,
      lowPower: 100,
    },
    fuelConsumption: {
      city: 2000,
      mid: 3000,
      high: 300,
    },
  },
};

// С помощью деструктуризации запишите в отдельны переменные:
//  1.1 Название города в котором находится авто
// 1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona')
// 1.3 Поле high, объекта price
// 1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию
// должно являться объектом вида:

// { city: 12, mix: 10, country: 8 }

// const {adress:{country:{city:{name}}}} =car;
// console.log(name);

// const {adress:{region:[,,,city= `Arizona`]}} =car;
// console.log(city);

// const {specs: {price: {high}}} = car;
// console.log(high);

// const { specs : {fuelConsumption ={city: 12, mix: 10, country: 8}}} = car;
// console.log(fuelConsumption);

// const {
//   adress: {
//     region: [, , , city = `Arizona`],
//     country: {
//       city: { name },
//     },
//   },
//   specs: {
//     price: { high },
//     fuelConsumption = { city: 12, mix: 10, country: 8 },
//   },
// } = car;

// console.log(city, name, high, fuelConsumption);


// Создать конструктор Car, который принимает параметры
// // model, color, price. Конструктор должен возвращать объект в
// // котором присутствуют вышеназванные поля со значениями.
// // Каждый представитель класса Car должен обладать методом
// // run() который выводит сообщение вида : MODEL + “ ” +
// // COLOR + ” is running”.


// class Car {
//   constructor (model, color, price=0){
//     this.model=model;
//     this.color=color;
//     this.price=price;

//   }
//   run (){
//     console.log(`${this.model }${  this.color } is running`);
//   }
// }
// const autoCar = new Car (`Audio`,`red`);
// autoCar.run();


// const tovar1 = {
//     name: "ruchka",
//     type: "kanzelyaria",
//     price: 23,
//     color: "green",
//     sklad: [
//         {
//             adress: "London",
//             amount: 92
//         }
//     ]
// };

// const tovar3 = {
//     name: "ruchka",
//     type: "kanzelyaria",
//     price: 93,
//     color: "red",
//     sklad: [
//         {
//             adress: "Paris",
//             amount: 9
//         }
//     ]
// };

// const tovar4 = {
//     name: "skrepka",
//     type: "kanzelyaria",
//     price: 1,
//     color: "yellow",
//     sklad: [
//         {
//             adress:"Berlin",
//             amount: 23
//         },
//         {
//             adress: "Madrid",
//             amount: 2
//         }
//     ]
// };

// const tovary = [tovar1, tovar3, tovar4];


// function isTovarAvailable (arrTovars, tovarName) {
//     let  isAvailbale = false;
//     for (let i = 0; i < arrTovars.length; i++) {
//         if ( arrTovars[i].name === tovarName ) {
//             isAvailbale = true
//         }
//     }

//     if (isAvailbale) {
//         alert("TOVAR IS AVAILABLE");
//     } else {
//         alert("TOVAR IS NOT AVAILABLE");
//     }
// }


// isTovarAvailable(tovary, 'ruchka');
// isTovarAvailable(tovary, 'skrepka');
// isTovarAvailable(tovary, 'miska');


// obj methods call apply bind

// const  wwwwwwwwwwwwwalk = function () {
//     // this // context вызова
//     console.log(`${this.firstName} walks bokom`);
//     // console.log(this);
// }


// const person = {
//     firstName: 'Valerchik',
//     age: 24,
//     stack: ['CSS', 'HTML'],
//     walk: wwwwwwwwwwwwwalk,
//     work () {
//         console.log('Valerchik works');
//     },
//     eat: () => {
//         console.log('Valerchik eats');
//     }
// };

// const person2 = {
//     firstName: 'Oleg',
//     age: 64,
//     stack: ['Kopat', 'Kolotit'],
//     walk: wwwwwwwwwwwwwalk,
//     work () {
//         console.log('Oleg works');
//     },
//     eat: () => {
//         console.log('Oleg eats');
//     }
// };

// person.walk();

// person2.walk();

// потеря контекста

// const personWalk = function () {
//     this

//     person.walk();
// };

// window.prompt('asdasd')
// prompt();

// window.personWalk();



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

