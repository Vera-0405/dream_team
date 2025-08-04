// Spread and rest operators

// Решая эти задачи старайтесь как можно чаще использовать rest и spread операторы

// 1. Напиши функцию `findMinMax`, которая принимает массив чисел и возвращает объект с минимальным и максимальным значением, используя SPREAD для передачи элементов в `Math.min` и `Math.max`.

// function isArrayLiquid(userArr) {
//   return (
//     Array.isArray(userArr) &&
//     userArr.length > 0 &&
//     userArr.every((item) => typeof item === "number" && !isNaN(item))
//   );
// }

// function findMinMax(userArr) {
//     if (isArrayLiquid(userArr)){
//         let myObj = {};
//         myObj.max = Math.max(...userArr);
//         myObj.min = Math.min(...userArr);
//         return myObj;
//     } else {
//         alert (`enter liquid array of numbers`)
//     }
// }

// const userInputArr = [23, 45, 78, 35, 9, -67]
// findMinMax(userInputArr);
// console.log(findMinMax(userInputArr));

// 2. Напишите функцию `filterStrings`, которая принимает любое количество аргументов (REST) и возвращает только строки.
// ```javascript
// filterStrings(1, "hello", true, "world", 42); // ["hello", "world"]
// ```

// function filterStrings (...args) {
//     let inputArr = [...args];
//     let filterStringsArr = inputArr.filter((item) => typeof item === 'string');
//     return filterStringsArr
// }

// console.log (filterStrings (1, "hello", true, "world", 42));

// 3. Напишите функцию `mergeArrays`, которая принимает любое количество массивов и объединяет их в один с помощью SPREAD оператора.

// Способ через concat

// function mergeArrays(...arrs) {
//   let resultArr = [].concat(...arrs);
//   console.log(resultArr);
//   return resultArr;
// }

// Способ только через spread
function mergeArrays(...arrs) {
  let userArr = [...arrs];
  let resultArr = [];
  for (let item of userArr) {
    if (Array.isArray(item)) {
      resultArr.push(...item);
    } else resultArr.push(item);
  }
  console.log(resultArr);
  return resultArr;
}

mergeArrays([1, 2], [3, 4], [5, 6]);
mergeArrays([1, 2], [3, 4], [5, 6], [7, 8]);
