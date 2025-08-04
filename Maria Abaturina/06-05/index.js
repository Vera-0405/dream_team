// 1. Напиши функцию `findMinMax`, которая принимает массив чисел и возвращает объект с минимальным и максимальным значением, используя SPREAD для передачи элементов в `Math.min` и `Math.max`.

// function findMinMax (arr) {
//     return {
//         min: Math.min(...arr),
//         max: Math.max(...arr)
//     }
// }
// console.log(findMinMax([2,5,7,8,9,4,2,1]));

// 2. Напишите функцию `filterStrings`, которая принимает любое количество аргументов (REST) и возвращает только строки.
// ```javascript
// filterStrings(1, "hello", true, "world", 42); // ["hello", "world"]
// ```
// function filterStrings(...args) {
//   let result = [];
//   for (let i = 0; i < args.length; i++) {
//     let current = args[i];
//     if (typeof current === "string") {
//       result.push(current);
//     }
//   }
//   return result;
// }
// console.log(filterStrings(1, "hello", true, "world", 42));

// 3. Напишите функцию `mergeArrays`, которая принимает любое количество массивов и объединяет их в один с помощью SPREAD оператора.
// mergeArrays([1, 2], [3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]
// mergeArrays([1, 2], [3, 4], [5, 6],[7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
// ```

// function mergeArrays(...arrays) {
//   return [].concat(...arrays);
// }
// console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
// console.log(mergeArrays([1, 2], [3, 4], [5, 6], [7, 8]));
