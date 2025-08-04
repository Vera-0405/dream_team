
<<<<<<< HEAD
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
=======
const car= {
brand: "Opel",
year: 2025,
engine: "patrol"}
car.brand="BMW";
console.log( ` i have a ${car.brand}`);
delete car.year;


const subscribers = {

oldSubscribers: 300,
newSubscribers: 500
}
subscribers.currentSubscribers= subscribers.oldSubscriberssubscribers + subscribers.newSubscribers; 
if (subscribers.newSubscribers > 700) {console.log (`You are famous!`);}
else {console.log (`Try harder`);}



function test(stroka1, stroka2){console.log(stroka1,stroka2); }
test (`hi there`,`hello wotld`);

function sum(number1,number2){console.log(number1+number2);}
sum(2,3);


function getAnnualRating(note1, note2, note3,note4){console.log((note1+note2+note3+note4)/4); }
getAnnualRating (4,5,3,5);

const day=Number(prompt(`input number of day`));console.log(day);
getDayofWeek(day);
function getDayofWeek(day){ 
   switch (day) {
        case 1: {console.log(`понедельник`);break;}
        case 2: {console.log(`вторник`);break;}
        case 3: {console.log(`среда`);break;}
        case 4: {console.log(`четверг`);break;}
        case 5: {console.log(`пятница`);break;}
        case 6: {console.log(`суббота`);break;}
        case 7: {console.log(`воскресенье`);break;} 
       default: {console.log(`такого дня нет`);}         
}}

// algorithm: reverse massiv
//let arr = ["H", "e", "l", "l", "o", "-", "W", "o", "r", "l", "d"];
//console.log(`Reverse arr is ${reverse(arr)}`);

//function reverse(arr) {
   // let arr = ["H", "e", "l", "l", "o", "-", "W", "o", "r", "l", "d"];
   // console.log(`Reverse arr is ${reverse(arr)}`);
    
    //function reverse(arr) {
    //    let l = 0;
     //   let r = arr.length - 1;
     //   while(l < r) {
      //      let temp = arr[l];
      //      arr[l] = arr[r];
       //     arr[r] = temp;
       //     l++;
       //     r--;
       // }
        //return arr;
    //}

    let arr = ["H", "e", "l", "l", "o", "-", "W", "o", "r", "l", "d"];
console.log(`Reverse arr is ${reverse(arr)}`);

function reverse(arr) {
    let l = 0;
    let r = arr.length - 1;
    while(l < r) {
        let temp = arr[l];
        arr[l] = arr[r];
        arr[r] = temp;
        l++;
        r--;
    }
    return arr;
}

// 1. получить от пользователя камень ножницы или бумагу
// 2. получить от компа камень ножницы или бумагу
// 3. сопоставить полученные данные и выяснить кто победил
// 4. если победил комп то очко компу
// 5. если победил пользка то очко пользователю

const userChoiceToNumber = {
    камень: 0,
    ножницы: 1,
    бумага: 2,
  };
  let userScore = 0;
  let compScore = 0;
  for (;;) {
    const userChoiceString = prompt(`Введите камень/ножницы/бумага`);
    const compChoiceNumber = Math.floor(Math.random() * 3);
    const userChoiceNumber = userChoiceToNumber[userChoiceString];
    if (userChoiceNumber === compChoiceNumber) {
      alert(`Ничья`);
      continue;
    } else if (
      (userChoiceNumber === 0 && compChoiceNumber === 1) ||
      (userChoiceNumber === 1 && compChoiceNumber === 2) ||
      (userChoiceNumber === 2 && compChoiceNumber === 0)
    ) {
      alert(`Вы победили`);
      userScore++;
    } else {
      alert(`Вы проиграли`);
      compScore++;
    }
    if (userScore === 5 || compScore === 5) {
      alert(`Счет: user - ${userScore}, comp - ${compScore}`);
      break;
    }
  }
  // minimum
//const massiv = [4, 7, 1, 3, 9, 3, 6, 2, 6, 9];
//for (let i = 0; i < massiv.length; i++) {
//    if (i === 0) { minNumber = massiv[i]; continue; }
//   else if (minNumber > massiv[i]) { minNumber = massiv[i]; }
//}
//console.log(minNumber);
// 1. Дан массив [4,7,1,3,9,3,6,2,6,9]

// вывести в консоль КОЛИЧЕСТВО (штук) четных чисел из этого массива

//
//const massiv = [4, 7, 1, 3, 9, 3, 6, 2, 6, 9];
//let j = 0;
//let k = 0;
//for (let i = 0; i < massiv.length; i++) {
//  if (massiv[i] % 2 === 0) {
//    k = k + 1;
//    console.log(`количество четных чисел ${k} `);
//  } else {
//    j = j + 1;
//    console.log(`количество нечетных чисел ${j}`);
//  }
//}

//function concatArrs (site, userArr1, userArr2, ...renumber){
//  let resultArr = []
//  if (site === 'right') {
//      resultArr = [...userArr1, ...userArr2, ...renumber];
//  } else {
//      resultArr = [...renumber, ...userArr2, ...userArr1];
//  }
//  return resultArr
//}

//console.log(concatArrs('right', [1,2,3], [4,5,6], 7,8,9));
//console.log(concatArrs('left', [1,2,3], [4,5,6], 7,8,9));
>>>>>>> b93cb2f312d867dcea10d638a4178c53fef16f92
