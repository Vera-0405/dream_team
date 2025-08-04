

// callback

// const foo = () => {
//     console.log('foo');
// };

// function func (callback) {
//     callback();
// }

// func(foo);

// const arr = [1,2,3]; // [2, 4, 6]

// const multiply = (a) => a * 2;
// const sub = (a) => a - 2;
// const add = (a) => a + 10;

// function arrayMapper (arr, callback) {
//     const resultArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         resultArr.push( callback(arr[i]) );
//     }

//     return resultArr;
// }

// console.log( arrayMapper(arr, add) );

// const arr = [1, 2, 3, 4, 5];

// *****
// map используем когда на основе одного массива, нужно получить новый другой массив
// map используем по принципу "были одни элементы массива - стали другие элементы массива"
// const resultArr = arr.map((item, index, massiv) => {
//     return item * 2;
// });

// console.log(resultArr);

// **
// forEach используем просто на посмотреть
// arr.forEach((item, index, massiv) => {
//     console.log(item);
// });

// console.log(arr);

// *
// .some
// используем когда хотим проверить, подходит ли хотя бы ОДИН элемент под определенный критерий
// const result = arr.some((item, index, massiv) => {
//     return item <= 1;
// });

// console.log(result);

// *
// .every
// используем когда нам нужно проверить, подходят ли ВСЕ элементы под определенный критерий
// const result = arr.every((item) => {
//     return item <= 2;
// });

// console.log(result);

// *****
// .filter
// создаем новый массив в который попадут только те элементы массива которые подходили под критерий
// const kovcheg = arr.filter((item, index, massiv) => {
//     return item % 2 === 0;
// });

// console.log(kovcheg);

// ***
// используем когда в массиве нужно найти один конкретный элемент и вернуть его
// const result = arr.find((item, index, massiv) => {
//     return item > 2;
// });

// console.log(result);

// **
// sort применяем когда хотим отсортировать массив
// const sorted = arr.sort((a, b) => b - a);

// console.log(sorted);

// *****
// .reduce .reduceRight

// const arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((sum, item) => sum + item);

// const omgObj = arr.reduce((acc, item) => ({...acc, [item]: item}), {});

// console.log(omgObj);

// const filtered = arr.reduce((resultArr, item) => {
//     if (item % 2 === 0) {
//         return [...resultArr, item];
//     } else {
//         return resultArr;
//     }
// }, []);

// console.log(filtered)

// const everyResult = arr.reduce((result, item) => {
//     if (!result) {
//         return false;
//     }

//     if (!(item > 0)) {
//         return false;
//     }

//     return true;
// }, true);

// console.log(everyResult);

// const arr = [4,52,6,3,67,68,3,43,5];
// 1. Дан случайный массив чисел (создайте самостоятельно). С помощью метода
// .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные
// двухзначные числа из исходного.

// 2. Пользователь вводит 5 случайных значений.
//  Каждое значение необходимо записать в массив.
// С помощью метода .every() проверить были ли все введенные пользователем данные – числами

// 3. Дан массив объектов
// const arr = [
//     {a: 2, b: 1},
//     {a: 5, b: 12},
//     {a: 95, b: 7}
//   ]
//   Используя ТОЛЬКО методы массивов (циклы запрещены):
//   Вывести в консоль 'its valid', если во всех объектах поле a > b,
// вывести 'its invalid' если хотя бы в одном объекте a<=b

// 4.   На основе массива arr, создать массив объектов у которых поле b возведено
//  в квадрат пример:
//   const arr2 = [
//     {a: 2, b: 1},
//     {a: 5, b: 144},
//     {a: 95, b: 49}
//   ];

// 5. На основе этого же массива, нужно создать массив только из чисел
// по принципу [a,b,a,b...]
// например [2,1,5,144,95,49]

// const arr = [
//     {a: 2, b: 1}, // func({a: 2, b: 1}, 0, arr)
//     {a: 5, b: 12}, // func({a: 5, b: 12}, 1, arr)
//     {a: 95, b: 7} // func({a: 95, b: 7}, 2, arr)
// ];

// const func = (obj) => obj.a > obj.b;

// const isABiggerThanB = arr.every( func );

// console.log(isABiggerThanB ? 'its valid' : 'its invalid');

// const arr = [
//   { a: 2, b: 1 }, // func({a: 2, b: 1}, 0, arr) ===>>> {a: 2, b: 1}
//   { a: 5, b: 12 }, // func({a: 5, b: 12}, 1, arr) ===>>> {a: 5, b: 144}
//   { a: 95, b: 7 },
// ];

// const func = (arrItem) => ({
//   ...arrItem,
//   b: arrItem.b ** 2,
// });

// const resultArr = arr.map(func); // [{a: 2, b: 1}, ]

// console.log(resultArr);

// 5. На основе этого же массива, нужно создать массив только из чисел
// по принципу [a,b,a,b...]
// например [2,1,5,144,95,49]

// const arr = [
//     { a: 2, b: 1 }, 
//     { a: 5, b: 12 },
//     { a: 95, b: 7 },
// ];

// [2,1,5,12,95,7];

// const anotherResultArr = arr.reduce((acc, {a,b}) => [...acc, a, b], []);

// const func = (acc, {a,b}) => [...acc, a, b];

// const anotherResultArr = arr.reduce(func, []);

// console.log(anotherResultArr);

// const resultArr = [];
// arr.forEach(({a,b}) => resultArr.push(a,b));



// const func = () => {
//     console.log('FUNCTION!');
// };

// const func2 = () => {
//     console.log('FUNCTION2 !');
// };


// const timeoutId = setTimeout(func, 2000);
// const timeoutId2 = setTimeout(func2, 2000);

// clearTimeout(timeoutId2);
// clearTimeout(timeoutId);


// const intervalId = setInterval(func, 500);
// clearInterval(intervalId);

// 1. вывести в консоль таймер который будет тикать каждую секунду (1000ms)
// после 5 тиков вывод в консоль должен быть остановлен
// 1
// 2
// 3
// 4
// 5

// function tick (vremya) {
//     let time = 0;

//     const timer = () => {
//         console.log(++time);
//     };
    
//     const timerId = setInterval(timer, 1000);
    
//     const stop = () => {
//         clearInterval(timerId);
//     };
    
//     setTimeout(stop, vremya); // запустись чз 5 сек
// } 



// tick(2000)