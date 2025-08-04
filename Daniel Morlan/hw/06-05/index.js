//Напиши функцию findMinMax, которая принимает массив чисел и возвращает объект с минимальным и максимальным значением, используя SPREAD для передачи элементов в Math.min и Math.max.

function findMinMax(arr) {
  return {
    min: Math.min(...arr),
    max: Math.max(...arr),
  };
}

const numbers = [10, 5, 8, 21, -3, 0];
const result = findMinMax(numbers);
console.log(result);

//Напишите функцию filterStrings, которая принимает любое количество аргументов (REST) и возвращает только строки.
function filterStrings(...args) {
  return args.filter((item) => typeof item === `string`);
}

console.log(filterStrings(1, `hello`, true, `world`, 42));

//Напишите функцию mergeArrays, которая принимает любое количество массивов и объединяет их в один с помощью SPREAD оператора.

function mergeArrays(...arrays) {
  return [].concat(...arrays);
}

console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
console.log(mergeArrays([1, 2], [3, 4], [5, 6], [7, 8]));
