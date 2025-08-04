//  HW  29-04
//Напишите функцию которая вычисляет сумму чисел от 0 до n, значение n передается как аргумент функции.
//  Например `sumTo(3)` вычисляется ка 0 + 1 + 2 + 3.
function calculationSum(n) {
  let result = 0;
  for (let i = 0; i <= n; i++) {
    result += i;
  }
  console.log(`сумма ${n + 1} элементов равна ${result}`);
}
calculationSum(3);

//Напишите функцию `arrMaker()`, которая принимает 3 числа и выводит в консоль массив из этих трех чисел.
//  Например: `arrMaker(1,2,3)` выводит `[1,2,3]`.
function arrtoMaker(a, b, c) {
  let arrMaker = [a, b, c];
  console.log(arrMaker);
}
arrtoMaker(1, 2, 3);

// Напишите функцию, которая возвращает процент побед и процент поражений в морской бой или шахматы.
//  Функция принимает два параметра: первый это количество побед, а второй это количество поражений.
// Функция выводит в консоль результативность в процентах. Пример работы: `myStats(352,211)`,
//это значит было 352 победы и 211 поражений. Функция выводит сообщение «ваш процент побед - 62%, поражений – 38%»
function myStats(winnerScore, loserScore) {
  const winnerScorepercent = Math.floor(
    winnerScore / (winnerScore + loserScore) * 100
  );
  console.log(winnerScorepercent);
  const loserScorepercent = 100 - winnerScorepercent;
  console.log(
    `ваш процент побед - ${winnerScorepercent} %, поражений ${loserScorepercent} %`
  );
  return winnerScorepercent, loserScorepercent;
}
myStats(352, 211);

//`getDayOfWeek()`, которая принимает номер дня недели и выводит в консоль его название, если введен не сущетвующий день недели,
//  то функция должна выводить "такого дня нет".
//*: продумайте функцию так, чтобы она могла выводить названия на разных языках
const langUser = prompt(`input language: en,  ru, de`);
const day = Number(prompt(`input number of day`));
console.log(day);
getDayofWeek(day);
function getDayofWeek(day) {
  if (langUser === `ru`) {
    switch (day) {
      case 1: {
        console.log(`понедельник`);
        break;
      }
      case 2: {
        console.log(`вторник`);
        break;
      }
      case 3: {
        console.log(`среда`);
        break;
      }
      case 4: {
        console.log(`четверг`);
        break;
      }
      case 5: {
        console.log(`пятница`);
        break;
      }
      case 6: {
        console.log(`суббота`);
        break;
      }
      case 7: {
        console.log(`воскресенье`);
        break;
      }
      default: {
        console.log(`такого дня нет`);
      }
    }
  } else if (langUser === `de`) {
    switch (day) {
      case 1: {
        console.log(`Montag`);
        break;
      }
      case 2: {
        console.log(`Dienstag`);
        break;
      }
      case 3: {
        console.log(`Mittwoch`);
        break;
      }
      case 4: {
        console.log(`Donnerstag`);
        break;
      }
      case 5: {
        console.log(`Freitag`);
        break;
      }
      case 6: {
        console.log(`Samstag`);
        break;
      }
      case 7: {
        console.log(`Sonntag`);
        break;
      }
      default: {
        console.log(`Kein dieser Tag`);
      }
    }
  } else if (langUser === `en`) {
    switch (day) {
      case 1: {
        console.log(`Monday`);
        break;
      }
      case 2: {
        console.log(`Tuesday`);
        break;
      }
      case 3: {
        console.log(`Wednesday`);
        break;
      }
      case 4: {
        console.log(`Thursday`);
        break;
      }
      case 5: {
        console.log(`Friday`);
        break;
      }
      case 6: {
        console.log(`Saturday`);
        break;
      }
      case 7: {
        console.log(`Sunday`);
        break;
      }
      default: {
        console.log(`no such a Day`);
      }
    }
  }
}
