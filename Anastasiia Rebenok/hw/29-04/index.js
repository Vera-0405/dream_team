// 1. Напишите функцию которая вычисляет сумму чисел от 0 до n, значение n передается как аргумент функции. Например `sumTo(3)` вычисляется ка 0 + 1 + 2 + 3.

// Method 1. according to the formula of the sum of natural numbers up to a given number.

// function sumTo(userNum) {
//     console.log(`the sum of numbers from 0 to ${userNum} is ${userNum*(userNum+1)/2}`);
// }


// Method 2. use a cycle

// function sumTo(userNum) {

//     let sumToVar = 0;

//     for (let i = 1; i <= userNum; i++) {
//         sumToVar += i 
//     }

//     console.log(`Sum of numbers from 0 to ${userNum} is ${sumToVar}`);
// }


// sumTo(100)




// 2. Напишите функцию `arrMaker()`, которая принимает 3 числа и выводит в консоль массив из этих трех чисел. Например: `arrMaker(1,2,3)` выводит `[1,2,3]`.

// function arrMaker(userNum1, userNum2, userNum3){

//     const arrMakerArr = [userNum1, userNum2, userNum3];
//     console.log(`array of three given numbers: ${arrMakerArr}`);

// }
// arrMaker(4, 23, -7)





// 3. Напишите функцию, которая возвращает процент побед и процент поражений в морской бой или шахматы. Функция принимает два параметра: первый это количество побед, а второй это количество поражений. Функция выводит в консоль результативность в процентах. Пример работы: `myStats(352,211)`, это значит было 352 победы и 211 поражений. Функция выводит сообщение «ваш процент побед - 62%, поражений – 38%»


function winningPercentage (winningNum, lossNum){
    
    if (winningNum === 0 && lossNum === 0){
        console.log("No games played.");
        return
    };

    let winPercent = (winningNum/(winningNum+lossNum)) * 100;
    let lossPercent = 100 - winPercent

    console.log(`Yours percentage of wins is ${winPercent.toFixed(2)}%,
    The percentage von loss is ${lossPercent.toFixed(2)}%`);

}

winningPercentage (15,16)


// // Задача 4. Функция `getDayOfWeek()`, которая принимает номер дня недели и выводит в консоль его название, если введен не сущетвующий день недели, то функция должна выводить "такого дня нет".
// // *: продумайте функцию так, чтобы она могла выводить названия на разных языках

// function getDayOfWeek (dayInputString, lang){

//     dayInputNum = Number(dayInputString)

//     const arrWeekDays = [
//         {en: 'Monday',    fr: 'Lundi',      de: 'Montag'},
//         {en: 'Tuesday',   fr: 'Mardi',      de: 'Dinstag'},
//         {en: 'Wednesday', fr: 'Mercredi',   de: 'Mitwoch'},
//         {en: 'Thursday',  fr: 'Jeudi',      de: 'Donnerstag'},
//         {en: 'Friday',    fr: 'Vendredi',   de: 'Freitag'},
//         {en: 'Saturday',  fr: 'Samedi',     de: 'Samstag'},
//         {en: 'Sunday',    fr: 'Dimanche',   de: 'Sontag'},
//     ]
        
//     const result = arrWeekDays.find((_, index) => index === (dayInputNum - 1));

//     if (result && result[lang] ){
//         console.log(result[lang]);
//     } else {
//         console.log('this day does not exist');
//     }

// }

// getDayOfWeek (7, "de")