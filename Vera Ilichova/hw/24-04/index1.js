//Дан массив `[3,4,7,1,9,3,7,2,5,6]`. Найдите среднее арифметическое значение всех элементов массива, которые имеют четный индекс.
const massiv = [3, 4, 7, 1, 9, 3, 7, 2, 5, 6];
let result = 0;
let indexChet = 0;
for (let i = 0; i < massiv.length; i++) {
  if (i % 2 === 0) {
    result = result + massiv[i];
    indexChet++;
  }
}
result = result / indexChet;
console.log(
  `среднее арифметическое элементов массива с четным индексом ${result} `
);

//2. Сформировать массив длиной 10, в который с помощью цикла запушить только те числа которые делятся на 3 без остатка.
let arr = [];
for (; arr.length < 10; ) {
  userNumber = Number(prompt("введи число"));
  if (userNumber % 3 === 0) {
    arr.push(userNumber);
  }
}
console.log(arr);

//3. Дан массив чисел `[3,5,2,6,8,1,7]`, показать этот массив пользователю с помощью `alert()`, после чего попросить ввести те же числа с помощью `prompt()` по памяти, если все числа совпали, то выводим `alert()` с поздравлениям, если не совпало хотя бы одно число, сразу выводим `alert()` с ошибкой
const arr1 = [3, 5, 2, 6, 8, 1, 7];
alert(arr1);
for (let i = 0; i < arr1.length; i++) {
  userNumber = Number(prompt(`input number`));
  if (userNumber === arr1[i]) {
    continue;
  } else {
    alert(`error`);
    break;
  }
  alert(`Congratulations!`);
}
