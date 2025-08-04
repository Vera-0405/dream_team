// hw 06-05
//Напиши функцию `findMinMax`, которая принимает массив чисел и возвращает объект с минимальным и максимальным значением,
//  используя SPREAD для передачи элементов в `Math.min` и `Math.max`.
const arr = [];
const arr2 = [];
function findMinMax(arr) {
  console.log(arr);
  const arr2 = [Math.min(...arr), Math.max(...arr)];
  console.log(arr2);
  return arr2;
}
findMinMax([1, 2, 3, 4, 5]);

// Напишите функцию `filterStrings`, которая принимает любое количество аргументов (REST) и возвращает только строки.
//```javascript
//function filterStrings(1, "hello", true, "world", 42); // ["hello", "world"]
const arr3 = [];
const arr4 = [];
function filterStrings(...arr3) {
  console.log(...arr3);
  for (let i = 0; i < arr3.length; i++) {
    if (isNaN(arr3[i])) {
      arr4.push(arr3[i]);
    }
  }
  console.log(arr4);
  return arr4;
}
filterStrings(1, "hello", true, "world", 42); // ["hello", "world"]
//```

// Напишите функцию `mergeArrays`, которая принимает любое количество массивов и объединяет их в один с помощью SPREAD оператора.

function mergeArrays(...rest) {
  resultArr = [];
  for (let i = 0; i < rest.length; i++) {
    resultArr.push(...rest[i]);
  }
  console.log(resultArr);
}
// mergeArrays([1, 2], [3, 4], [5, 6],[7, 8]);

//```javascript
mergeArrays([1, 2], [3, 4], [5, 6]); // [1, 2, 3, 4, 5, 6]
mergeArrays([1, 2], [3, 4], [5, 6], [7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
//```
