

// function sum ( a, b ) {

//     console.log(a);
//     console.log(b);

//     if (a < 0 || b < 0) {
//         return;
//     }

//     return a + b;
// }

// const result = 7 - sum(2,3);

// console.log(result);

// Написать игру "камень ножницы бумага"
// играем против компа
// играем до 5 побед
// если пользователь нажал "отмена", то считаем что он проиграл

// 1. получить от пользователя камень ножницы или бумагу
// 2. получить от компа камень ножницы или бумагу
// 3. сопоставить полученные данные и выяснить кто победил
// 4. если победил комп то очко компу
// 5. если победил пользка то очко пользователю


// const userChoiceString = prompt('введите кнб'); // 'бумага'
// const compChoiceNumber = Math.round( Math.random() * 2 ); // 0 1 2

// const obj = {
//     'камень': 0,
//     'ножницы': 1,
//     'бумага': 2
// };

// const userChoice = 2;

// const compChoice = compVariants[compChoiceNumber];

// function getUserChoice() {
//   const userChoiceToNumber = {
//     камень: 0,
//     ножницы: 1,
//     бумага: 2,
//   };

//   const userChoiceString = prompt(`Введите камень/ножницы/бумага`);

//   return userChoiceToNumber[userChoiceString];
// }

// function getCompChoice() {
//   return Math.floor(Math.random() * 3);
// }

// function isUserWin(userChoice, compChoice) {
//   return (
//     (userChoice === 0 && compChoice === 1) ||
//     (userChoice === 1 && compChoice === 2) ||
//     (userChoice === 2 && compChoice === 0)
//   );
// }

// function isDraw(userChoice, compChoice) {
//   return userChoice === compChoice;
// }

// function doesWinnerExist(userScore, compScore) {
//   return userScore === 2 || compScore === 2;
// }

// function startGame() {
//   let userScore = 0;
//   let compScore = 0;

//   for (;;) {
//     const userChoice = getUserChoice();
//     const compChoice = getCompChoice();

//     if (isDraw(userChoice, compChoice)) {
//       alert(`Ничья`);
//       continue;
//     } else if (isUserWin(userChoice, compChoice)) {
//       alert(`Вы победили`);
//       userScore++;
//     } else {
//       alert(`Вы проиграли`);
//       compScore++;
//     }
//     if (doesWinnerExist(userScore, compScore)) {
//       alert(`Счет: user - ${userScore}, comp - ${compScore}`);
//       break;
//     }
//   }
// }

// for (;;) {
//     const shouldRestart = prompt('start new game?');
//     if (shouldRestart === 'да') {
//         startGame();
//     } else {
//         break;
//     }
// }

// sread operator

// const arr = [2,3,1,23,13,1,23,54,5];
// const arr2 = [4,6,8,7,6,7,4,5,7,67];

// console.log( Math.max( ...arr ) ); // spread operator
// console.log( ...arr );
// const arr2 = [...arr]; // pure copy

// const resultArr = arr.concat(arr2);
// const resultArr = [...arr, ...arr2];

// const resultArr = [...arr, false, true, 'blablabla', ...arr2];
// console.log(resultArr);

// const arr = [2,3,1,23,13,1,23,54,5];

// console.log( ...arr );

// rest operator

// function sum (...arr) { // [1,2,3] rest
//     console.log(...arr);// spread
// }

// sum(1,2,3);

// sum(1,2,3,4);

// sum(2,32,13,1,31,23,1,23,14,3,5,46,54,6,567,6,43,5345,6);

// const arr = [23,1,2,3,123,12,4,43];

// function blabla (...rest) { // [2,10,'asdasd','adasd','adad']
//     // some logic here
//     console.log(rest);

//     // console.log(indexCursor);
//     // console.log(amountToDelete);
// }

// blabla(2, 10, 'adasd', 'asdasd', 'adsasd','adasd', 'asdasd');

// const arr = [1, 2, 3];
// const arr2 = [5, 8, 7];
// const arr3 = [2, 31, 31, 23, 12, 3];
// const arr4 = [5, 4, 35, 34, 5];

// // [1,2,3,5,8,7,1,1,1,1]

// function arrayCommaner(mas1, mas2, ...rest) { // rest ДОЛЖЕН ВСЕ БЫТЬ В КОНЦЕ!
//   // rest === ВСЕ ОСТАЛЬНЫЕ АРГУМЕНТЫ УПАКОВАТЬ В МАССИВ!
//   const myFashionableArray = [
//     ...mas1,
//     2,
//     31,
//     3,
//     123,
//     ...mas2,
//     2,
//     3,
//     12,
//     3,
//     12,
//     ...rest,
//     1,
//     5,
//     4,
//   ];


//   console.log(myFashionableArray);

//   // const result = mas1.concat(mas2);
//   // const arrArguments = [a,b,c,d];
//   // const resultArr = result.concat(arrArguments);
//   // console.log(resultArr);
// }

// arrayCommaner(arr, arr2, 1, 1, 1, 1);

// arrayCommaner(arr3, arr4, 2, 2, 2, 2);

// function test (a,b,c,d,e,f,...rest) {
//     console.log(rest);
// }

// test(1,2,3,4,5,6,7);



// 1. написать функцию которая возвращает среднее арифметическое n аргументов

// 2. написать функцию, которая принимает первым аргументом 'right' 'left', 2 массива и n аргументов
// если первый аргумент 'right' то функция должна объединить массивы в таком порядке [a,b,n-args]
// если первый аргумент 'left' то функция должна объединить массивы в таком порядке [n-args,b,a]

// concatArrs('right', [1,2,3], [4,5,6], 7,8,9); // [1,2,3,4,5,6,7,8,9]
// concatArrs('left', [1,2,3], [4,5,6], 7,8,9); // [7,8,9,4,5,6,1,2,3]



// function concatArrs (side, arr1, arr2, ...args) {
//     return side === 'right' ? 
//         [...arr1,...arr2,...args]:
//         [...args, ...arr2, ...arr1];
// }

// console.log(concatArrs('right', [1,2,3], [4,5,6], 7,8,9));
// console.log(concatArrs('left', [1,2,3], [4,5,6], 7,8,9));



// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: {
//         d1: 1,
//         d2: 2
//     }
// };

// const obj2 = structuredClone(obj); // deep copy

// obj2.d.d1 = 999;

// console.log(obj);



// const obj = {
//     a: 1,
//     b: 2,
//     c: 3,
// };

// const obj2 = {
//     a: 22,
//     d: 4,
//     e: 5
// };

// const result = {
//     l: 100,
//     ...obj2,
//     p: 200,
//     ...obj,
//     u: 300
// };

// const result2 = Object.assign({a:1,b:2}, {a:11, c: 3});

// console.log(result2);




// const userName = prompt('enter ur name');

// const adress = {
//     street: 'asdasd',
// };

// const person = {
//     age: 12,
//     city: 'Berlin',
//     userName, // userName: userName
//     job: 'Programmer',
//     adress
// };


// console.log(person);




// const fieldName = 'earsAmount';

// const person = {
//     age: 12,
//     city: 'Berlin',
//     job: 'Programmer',
//     [fieldName]: 2
// };

// console.log(person);


// destructurization

// const persons = ["Valerchik", "Oleg", "Afanasi", "Mitrofan", "Marfa"];

// const valerchik = persons[0];
// const oleg = persons[1];
// const afanasi = persons[2];
// const rest = persons.slice(3);
// OR
// const [a, b, c, ...rest] = persons; // const a = persons[0]; const b = persons[1]
// const a = persons[0];
// const b = persons[1];
// const c = persons[2];
// const rest = persons.slice(3);

// const arr = [c,b,a];
// const obj = { a,b,c };

// console.log(obj);


// const persons = ["Valerchik", "Oleg", "Afanasi", "Mitrofan", "Marfa"];

// const [ , oleg, , mitrofan, ] = persons;


// const persons = ["Valerchik", "Oleg", "Afanasi"];

// const [
//     a = "Stas0",
//     b = "Zina1",
//     c = 2,
//     d = [1,2,3],
//     e = false
// ] = persons;

// console.log(persons);


// obj destructurization ДЕ СТРУ КТУ РИ ЗА ЦИ Я

// const person = {
//     userName: "Valerchik",
//     city: "Berlin",
//     age: 23,
// };

// const person2 = {
//     userName: "Oleg",
//     city: "Keln",
//     age: 123,
//     cardNumber: 123123
// };

// const { userName, age, city, a = 'LALALA' } = person;
// const { userName: userName2 = "Stas0", age: age2, ...rest } = person2;



// const person = {
//     userName: "Valerchik",
//     city: "Berlin",
//     age: 23,
// };

// const person2 = {
//     userName: "Oleg",
//     city: "Keln",
//     age: 123,
//     cardNumber: 123123
// };

// Деструктуризация работает точно так же и внутри аргументов функций
// function getOldestAge ({age}  , {age: age2}) { // [a,b,c], [d,e,f]
//     if (age > age2) {
//         return age;
//     } else {
//         return age2;
//     }
// }


// console.log( getOldestAge(person, person2) );


// const objOMG = {
//     a: 1,
//     b: {
//         c: [1,2,3],
//         d: [
//             {
//                 e: 2
//             },
//             {
//                 e: 3
//             },
//             {
//                 e: 4
//             }
//         ],
//         f: 'Hello'
//     },
//     k: [
//         {
//             p: ["one", "two", "three"]
//         },
//         {
//             p: ["four", "five"]
//         }
//     ]
// };

// const { b: { c }, k: [ { p } ] } = objOMG;
// const result = [ ...c, ...p ];







// 1. добыть значение 4 из поля e
// 2. добыть строку 'Hello'
// 3. добыть "three" из массива p


// const { b: { c: [ , myVar] } } = objOMG;



// DOMASHKA RECAP

// getDayOfWeek(), которая принимает номер дня недели и выводит в консоль его название, 
// если введен не сущетвующий день недели, то функция должна выводить "такого дня нет". *: 
// продумайте функцию так, чтобы она могла выводить названия на разных языках

// const getDayOfWeek = function (dayNumber) {

//     switch (dayNumber) {
//         case 1:
//             return 'Monday';
//         case 2:
//             return 'Tuesday';
//         case 3:
//             return 'Wednesday';
//         case 4:
//             return 'Thursday';
//         case 5:
//             return 'Friday';
//         case 6:
//             return 'Saturday';
//         case 7:
//             return 'Sunday';
//         default: 
//             return 'Monday';
//     }

// };

// console.log(getDayOfWeek(72));


// function getDayOfWeek (dayNumber) {
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday'];

//     const day = days[dayNumber - 1];

//     return day ? day : 'Monday';
// }

// console.log(getDayOfWeek(3));


// function getDayOfWeek (dayNumber, lang) { // let dayNumber, let lang

//     const dayLanguages = {
//         en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday', 'Sunday'],
//         de: ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'],
//         defaults: {
//             en: 'Monday',
//             de: 'Montag'
//         }
//     }

//     const day = dayLanguages[lang][dayNumber - 1];

//     return day ? day : dayLanguages.defaults[lang];
// }

// const result = getDayOfWeek(22, 'en') ;

// console.log( result );


