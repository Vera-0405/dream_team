

"use strict";

// FUNCTION  понимает кто ее THIS:
// В МОМЕНТ ВЫ ЗО ВА!!!!!

// function run (destination, speed) {
//     console.log(`${this.firstName} runs to ${destination} with ${speed}kmph`);

//     function smth () {
//         console.log(this); // SMTHновский THIS
//     }

//    smth.call(this); // RUNвский THIS
// }

// function run (destination, speed) {
//     console.log(`${this.firstName} runs to ${destination} with ${speed} `);
// }

// const person = {
//     firstName: 'Valerchik',
//     age: 24,
//     run
// };

// const person2 = {
//     firstName: 'Oleg',
//     age: 54,
//     run
// };

// const dog = {
//     firstName: 'Bobik',
//     age: 90,
//     budka: 'Berlin'
// };

// const args = ['pivnuha', 30];

// run.apply(dog, args);
// run.call(dog, ...args);

// person.run('pivnuha');

// run.call(dog, 'pivnuha', 200);

// person.run('domoj', 2);

// person.run.call(dog);
// run.call(dog);
// person.run();

// run(person); // JS реши сам кто this
// run.call(person); // Я РЕШАЮ что this будет person

// arrow functions and this

// const person = {
//     firstName: 'Valerchik',
//     age: 23,
//     run: function () {
//         console.log(`${this.firstName} runs`);
//     },
//     walk () {
//         console.log(`${this.firstName} walks`);
//     }
// };

// ARROW FUNCTION  понимает кто ее THIS:
// В МОМЕНТ КОГДА ОНА РОДИЛАСЬ!!!!

// const eat = () => {
//     console.log(`${this.firstName} eats`);
// };

// function foo () {

//     const inner = () => {
//         console.log(this);
//     }

//     inner();
// }

// foo.call(person);

// const car = {
//     model: 'tesla',
//     adress: {
//         country: {
//             city: {
//                 name: 'Boston',
//                 street: {
//                     name: 'pushkina',
//                     number: 2
//                 }
//             }
//         },
//         region: ['Iowa','Texas','California']
//     },
//     specs: {
//         price: {
//             low: 2000,
//             mid: 3000,
//             high: 5000
//         },
//         engine: {
//             power: 400,
//             lowPower: 100
//         }
//     }
// };

// С помощью деструктуризации запишите в отдельны переменные:
//  1.1 Название города в котором находится авто
// 1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona')
// 1.3 Поле high, объекта price
// 1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию
// должно являться объектом вида:
// { city: 12, mix: 10, country: 8 }

// js classes

// 1. при вызове чз new функиця/класс ВСЕГДА возвращает объект
// 2. this ВСЕГДА будет ссылаться на экзепляр класса
// 3. функция запишет пустой объект в this (this = {})

// function foo (a,b) {
//     // {}
//     // this = {}
//     console.log(a,b); // {}

//     // return this;
// }

// const result = new foo(2,3);

// console.log(result);

// class Person {
//     constructor (firstName, age) {
//         // {}
//         // this = {}

//         // this = {}
//         this.firstName = firstName;
//         // this = {firstName: 'Valerchik'}
//         this.age = age;
//         // this = {firstName: 'Valerchik', age: 23}

//          // return this;
//     }

//     run () {
//         console.log(`${this.firstName} runs`);
//     }
// }

// const p1 = new Person('Valerchik', 23);
// const p2 = new Person('Oleg', 54);

// Создать конструктор Car, который принимает параметры
// model, color, price. Конструктор должен возвращать объект в
// котором присутствуют вышеназванные поля со значениями.
// Каждый представитель класса Car должен обладать методом
// run() который выводит сообщение вида : MODEL + “ ” +
// COLOR + ” is running”.

// Напишите код, которая вычисляет длину линий в
// стандартной двухмерной системе координат. Координаты
// начала и конца линий должны храниться в объектах.
//  Создайте три линии.
//  Вычислите их длины с помощью метода
//  Проверьте, могут ли три линии сформировать
// треугольник
// Помните:
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина
// каждой стороны треугольника должны быть меньше суммы
// длин остальных сторон.

// 1. что такое точка
// 2. что такое линия
// 3. как вычислить длину линии
// 4. как вычислить существование треугольника

// function getRandomNumber() {
//   return Math.floor(Math.random() * 100);
// }

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// const points = [];

// for (let i = 0; i < 6; i++) {
//   const randomNumber1 = getRandomNumber();
//   const randomNumber2 = getRandomNumber();

//   const point = new Point(randomNumber1, randomNumber2);
//   points.push(point);
// }

// class Line {
//   constructor(point1, point2) {
//     this.start = point1;
//     this.end = point2; // {x: 23, y: 64}
//   }


//   get length () {
//     return Math.round(
//         Math.sqrt(
//           (this.end.x - this.start.x) ** 2 + (this.end.y - this.start.y) ** 2
//         )
//       );
//   }

//   set length (val) {}

// }

// const l1 = new Line(points[0], points[1]);
// const l2 = new Line(points[2], points[3]);
// const l3 = new Line(points[4], points[5]);

// function canTriangleExist (line1, line2, line3) {
//     const line1Length = line1.length;
//     const line2Length = line2.length;
//     const line3Length = line3.length;
   
//     return (line1Length < line2Length + line3Length) &&
//         (line2Length < line1Length + line3Length) &&
//         (line3Length < line1Length + line2Length)
// }





// if ( canTriangleExist(l1,l2,l3) ) {
//     console.log('triangle can exist!');
// } else {
//     console.log('triangle can not exist!');
// }


// getters setters

// class Person {
//     #age;

//     constructor (firstName, age) {
//         this.firstName = firstName;
//         this.#age = age;
//     }

//     get age () {
//         return this.#age;
//     }

//     set age (val) {
//         if (val > 0 && val < 100) {
//             this.#age = val;
//         }
//     }
// }

// const p1 = new Person('Valerchik', 32);


// создать класс Person
// инстанс этого класса должен обладать полями firstName и lastName
// с помощью геттеров и сеттеров сделать поле fullName
// например:
// const person = {
//     firstName: 'Valerchik',
//     lastName: 'Sharikov'
// };

// console.log(person.fullName); // Valerchik Sharikov



// class Car {
//     #amortization;

//     constructor (model) {
//         this.model = model;
//         this.#amortization = 0;
//         this.color = 'red';
//     }

//     run () {
//         if (this.amortization < 100) {
//             console.log(`${this.model} runs`);
//             this.amortization += 10;
//         } else {
//             console.error('car is broken');
//         }
//     }

//     static wheelsAmount = 4;

//     static paint (mashinka) {
//         mashinka.color = 'orange';
//     }

//     static repair (mashinka) {

//         if (!(mashinka instanceof Car)) {
//             console.error(`класс может чинить только те машинки которые произвел`);
//         } else {
//             mashinka.#amortization = 0;
//         }
      
//     }

//     get amortization () {
//         return this.#amortization;
//     }

//     set amortization (val) {
//         if ( val <= 100) {
//             this.#amortization = val;
//         }
//     }
// }

// const c1 = new Car('X5');

// c1.run();
// c1.run();
// c1.run();
// c1.run();
// c1.run();
// c1.run();
// c1.run();
// c1.run();
// c1.run();
// c1.run();
// c1.run();
// c1.run();
// c1.run();


// console.log( Car.wheelsAmount );


// Car.repair({firstName: 'Valerchik'})

// class Vehicle {
//   constructor (vehicleName, wheels) {
//     this.vehicleName = vehicleName;
//     this.wheels = wheels;
//   }

//   run () {
//     console.log(`${this.vehicleName} runs`);
//   }
// }

// class ElectroVehicle extends Vehicle {
//   constructor (batteryVolume, ...args) {
//     super(...args);
//     this.batteryVolume = batteryVolume;
//   }

//   bzz () {
//     console.log('bzzz');
//   }
// }

// class ElectroBicycle extends ElectroVehicle {
//   constructor (batteryVolume, vehicleName) {
//     super(batteryVolume, vehicleName, 2);
//     this.smth = 2;
//   }
// }

// class ElectroCar extends ElectroVehicle {
//   constructor (seats, batteryVolume,vehicleName) {
//     super(batteryVolume, vehicleName, 4);
//     this.seats = seats;
//   }
// }

// class ElectroCar2 extends ElectroVehicle {
//   constructor () {
//     super(40, 'Tesla', 4);
//     this.seats = seats;
//   }
// }


// const tesla2 = new ElectroCar2();
// const byd = new ElectroCar(2, 80);


// Создать класс Battery, который инициализирует поля type (AA, AAA),
// energy (заряд, по умолчанию 100, заряд не может быть меньше 0 и больше 100).

// Создать класс Device, который принимает параметр batteryType (AA, AAA) и имеет метод
// insertBattery, который принимает два параметра (две
// батарейки, два объекта типа Battery). 
// 
// Создать класс Gamepad, который наследует от
// Device. Инстанс класса Gamepad должен содержать поле model, поле
// isConnected (boolean) и методы connectTo(deviceName), который
// принимает название другого девайса и выводит сообщение
// типа “gamepadModel connected to TV”
// , метод disconnect() (который переключает isConnected в false),
// который отключает Gamepad,
// также должен быть метод play(), который
// отнимает 10 зарядов от каждой батареи (и выводит в консоль сообщение вида "you are playing!")


// Подключить один девайс к другому можно только если есть
// 2 батарейки (и заряд обеих больше 0). Подключить Gamepad можно только если
// isConnected == false. 
// Если заряд батареек == 0, то метод
// play вернет сообщение с требованием замены батареек.

// class BatterTypeError extends Error {
//   constructor (battery1Error,battery2Error, message) {
//     super(message);
//     this.battery1Error = battery1Error;
//     this.battery2Error = battery2Error;
//   }
// }

// class BatteryEnergyError extends Error {}


// class Battery {
//   #energy = 100;

//   constructor (type) {
//     if (type === 'AA' || type === 'AAA') {
//       this.type = type;
//     } else {
//       console.error('Type should be AA or AAA');
//     }
//   }

//   get energy () {
//     return this.#energy;
//   }

//   set energy (value) {
//     if (value >= 0 && value <= 100) {
//       this.#energy = value;
//     }
//   }
// }

// const b1 = new Battery('AAA');
// const b2 = new Battery('AAA');
// const b3 = new Battery('AA');

// class Device {
//   constructor (batteryType) {
//     this.batteryType = batteryType;
//     this.battery1 = null;
//     this.battery2 = null;
//   }

//   insertBattery (b1, b2) {
//     if ( !(b1 instanceof Battery && b2 instanceof Battery) ) {
//       throw new Error(`Вы должны передеавать инстанс батарейки, ваши аргументы:
//         1. является батарейкой: ${b1 instanceof Battery}
//         2. является батарейкой: ${b2 instanceof Battery}
//         `);
//     }


//     const isB1Ok = b1.type !== this.batteryType;
//     const isB2Ok = b2.type !== this.batteryType;
//     if ( isB1Ok || isB2Ok ) {
//       throw new BatterTypeError(isB1Ok, isB2Ok,  `Батарейки не того типа: инстанс ожидает тип ${this.batteryType}, 
//         а вы передаете тип ${b1.type} и ${b2.type}`);
//     } else {
//       this.battery1 = b1;
//       this.battery2 = b2;
//       console.log('батарейки вставлены');
//     }
//   }

//   batteriesWork () {
//     return Boolean(this.battery1) && Boolean(this.battery2) && this.battery1.energy > 0 && this.battery2.energy > 0;
//   }
// }

// class Gamepad extends Device {
//   constructor (model, batteryType) {
//     super(batteryType);
//     this.model = model;
//     this.isConnected = false;
//   }

//   connectTo (deviceName) {
//     if (this.batteriesWork()) {
//       this.isConnected = true;
//       console.log(`${this.model} подключен к ${deviceName}`);
//     } else {
//       console.log(`проверьте батарейки`);
//     }
//   }

//   disconnect () {
//     this.isConnected = false;
//     console.log(`${this.model} отключен`);
//   }

//   play () {
//     if (!this.isConnected) {
//       throw new Error('геймпад не подключен');
//     }

//     if (!this.batteriesWork()) {
//       throw `проверьте батарейки`;
//     }

//     this.battery1.energy -= 10;
//     this.battery2.energy -= 10;
//     console.log(`вы играете!`);

//   }
// }

// const xboxGamepad = new Gamepad('xbox gamepad', 'AAA');


//   try {
//     xboxGamepad.insertBattery(b6, b7);
//   } catch (err) {
  
//     if (err instanceof BatterTypeError) { // 1. ЭТО НАША ОШИБКА ?
//       if (err.battery1Error) {
//         xboxGamepad.insertBattery(b1, b2);
//       } else if (err.battery2Error) {
//         xboxGamepad.insertBattery(b1, b2);
//       } else  {
//         throw err;
//       }
      
//       console.log('НАША ОШИБКА, МЫ ВЫЛЕЧИЛИ');
//     } else {
//       console.log('О БОЖЕ МОЙ! ЭТО КАКОЙ ТО УЖАС БРОСАЕМСЯ ДАЛЬШЕ!');
//       throw err // 2. ДАТЬ СЛУЧИТСЯ ОШИБКЕ ЕСЛИ ОНА НЕ НАША!
//     }
   
//   }



// xboxGamepad.connectTo('TV');
// xboxGamepad.play();
// xboxGamepad.play();
// // xboxGamepad.play();
// // xboxGamepad.play();
// // xboxGamepad.play();
// // xboxGamepad.disconnect();
// // xboxGamepad.play();
// // xboxGamepad.play();
// // xboxGamepad.play();
// // xboxGamepad.play();
// // xboxGamepad.play();
// // xboxGamepad.play();
// // xboxGamepad.play();
// // xboxGamepad.play();
// // xboxGamepad.play();
// // console.log(xboxGamepad);
// // xboxGamepad.play();


