// 1. Напишите функцию которая вычисляет сумму чисел от 0 до n, значение n передается как аргумент функции. Например `sumTo(3)` вычисляется ка 0 + 1 + 2 + 3.

// function sumTo(number) {
//     let sum = 0;
//     for (let i = 0; i <= number; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumTo(3));

// 2. Напишите функцию `arrMaker()`, которая принимает 3 числа и выводит в консоль массив из этих трех чисел. Например: `arrMaker(1,2,3)` выводит `[1,2,3]`.

// function arrMaker (...arr) {
//     console.log([...arr]);

// }
// arrMaker(1,2,3);

// 3. Напишите функцию, которая возвращает процент побед и процент поражений в морской бой или шахматы. Функция принимает два параметра: первый это количество побед, а второй это количество поражений. Функция выводит в консоль результативность в процентах. Пример работы: `myStats(352,211)`, это значит было 352 победы и 211 поражений. Функция выводит сообщение «ваш процент побед - 62%, поражений – 38%»

// function myStats (sumWin, sumFail) {
//     let sum = sumWin + sumFail;
//     let win = sumWin / sum;
//     let fail = sumFail / sum;
//     console.log(`Ваш процент побед - ${Math.round(win * 100)}%, поражений – ${Math.round(fail * 100)}%.`);
// }
// myStats(352,211);

// 4. `getDayOfWeek()`, которая принимает номер дня недели и выводит в консоль его название, если введен не сущетвующий день недели, то функция должна выводить "такого дня нет".
// *: продумайте функцию так, чтобы она могла выводить названия на разных языках

// function getDayOfWeek(dayNumber) {
//   switch (dayNumber) {
//     case 1:
//       return "Monday";
//     case 2:
//       return "Tuesday";
//     case 3:
//       return "Wednesday";
//     case 4:
//       return "Thursday";
//     case 5:
//       return "Friday";
//     case 6:
//       return "Saturday";
//     case 7:
//       return "Sunday";
//     default:
//       return "Нет такого дня недели";
//   }
// }

// console.log(getDayOfWeek(3));
