//Напишите функцию которая вычисляет сумму чисел от 0 до n, значение n передается как аргумент функции. Например sumTo(3) вычисляется ка 0 + 1 + 2 + 3.

function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(3));

//Напишите функцию arrMaker(), которая принимает 3 числа и выводит в консоль массив из этих трех чисел. Например: arrMaker(1,2,3) выводит [1,2,3].

function arrMaker(a, b, c) {
  const arr = [a, b, c];
  console.log(arr);
}
arrMaker(1, 2, 3);

//Напишите функцию, которая возвращает процент побед и процент поражений в морской бой или шахматы. Функция принимает два параметра: первый это количество побед, а второй это количество поражений. Функция выводит в консоль результативность в процентах. Пример работы: myStats(352,211), это значит было 352 победы и 211 поражений. Функция выводит сообщение «ваш процент побед - 62%, поражений – 38%»
function myStats(wins, losses) {
  const totalGames = wins + losses;

  if (totalGames === 0) {
    console.log(`Нет сыгранных игр.`);
    return;
  }

  const winRate = Math.round((wins / totalGames) * 100);
  const lossRate = 100 - winRate;

  console.log(`Ваш процент побед – ${winRate}%, поражений – ${lossRate}%`);
}

myStats(352, 211);

//getDayOfWeek(), которая принимает номер дня недели и выводит в консоль его название, если введен не сущетвующий день недели, то функция должна выводить "такого дня нет". *: продумайте функцию так, чтобы она могла выводить названия на разных языках

function getDayOfWeek(dayNumber, lang = "ru") {
  const days = {
    ru: [
      `Понедельник`,
      `Вторник`,
      `Среда`,
      `Четверг`,
      `Пятница`,
      `Суббота`,
      `Воскресенье`,
    ],
    en: [
      `Monday`,
      `Tuesday`,
      `Wednesday`,
      `Thursday`,
      `Friday`,
      `Saturday`,
      `Sunday`,
    ],
    de: [
      `Montag`,
      `Dienstag`,
      `Mittwoch`,
      `Donnerstag`,
      `Freitag`,
      `Samstag`,
      `Sonntag`,
    ],
  };

  if (dayNumber < 1 || dayNumber > 7) {
    console.log("Такого дня нет");
    return;
  }

  console.log(days[lang][dayNumber - 1]);
}
getDayOfWeek(1);
getDayOfWeek(3, "en");
getDayOfWeek(0);
