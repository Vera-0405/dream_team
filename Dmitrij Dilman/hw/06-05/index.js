// Решая эти задачи старайтесь как можно чаще использовать rest и spread операторы

// 1. Напиши функцию `findMinMax`, которая принимает массив чисел и возвращает объект с минимальным и максимальным значением,
// используя SPREAD для передачи элементов в `Math.min` и `Math.max`.

function findMinMax(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return { min, max };
}

console.log(findMinMax([3, 8, 5, 9, 16, 1, 18, 2]));


// 2. Напишите функцию `filterStrings`, которая принимает любое количество аргументов (REST) и возвращает только строки.
// ```javascript
// filterStrings(1, "hello", true, "world", 42); // ["hello", "world"]
// ```

function filterStrings(...args) {
    return args.filter(item => typeof item ==="string");
}

console.log (filterStrings(1, "hello", true, "world", 42));


// 3. Напишите функцию `mergeArrays`, которая принимает любое количество массивов и объединяет их в один с помощью SPREAD оператора.

// ```javascript
// mergeArrays([1, 2], [3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]
// mergeArrays([1, 2], [3, 4], [5, 6],[7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]


function mergeArrays(...arrays){
  return [].concat(...arrays);

}
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(mergeArrays([1, 2], [3, 4], [5, 6], [7, 8]));