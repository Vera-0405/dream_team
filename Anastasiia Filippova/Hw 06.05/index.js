//  1. Напиши функцию `findMinMax`, которая принимает массив чисел и возвращает объект с минимальным и максимальным значением, используя SPREAD для передачи элементов в `Math.min` и `Math.max`.

// function findMinMax(...numbers) {
//   const maxMinNum = {
//     maxNumber: Math.max(...numbers),
//     minNumber: Math.min(...numbers),
//   };
//   console.log(maxMinNum);
// }

// findMinMax(1, 5, 7, 9, 3, 6);

// 2. Напишите функцию `filterStrings`, которая принимает любое количество аргументов (REST) и возвращает только строки.
// ```javascript
// filterStrings(1, "hello", true, "world", 42); // ["hello", "world"]
// ```

// function filterStrings(...rest) {
//   const onlyString = [];
//   for (let i = 0; i < rest.length; i++) {
//     if (typeof rest[i] === "string") {
//       onlyString.push(rest[i]);
//     }
//   }
//   return onlyString;
// }

// console.log(filterStrings(1, "hello", true, "world", 42));

// 3. Напишите функцию `mergeArrays`, которая принимает любое количество массивов и объединяет их в один с помощью SPREAD оператора.

// ```javascript
// mergeArrays([1, 2], [3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]
// mergeArrays([1, 2], [3, 4], [5, 6],[7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
// ```

// function mergeArrays(...arrays) {
//   return [].concat(...arrays);
// }

// console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
// console.log(mergeArrays([1, 2], [3, 4], [5, 6], [7, 8]));
