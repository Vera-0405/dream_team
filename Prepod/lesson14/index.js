
// function counterMaker() {
//     let count = 0;

//     return function (val) {
//         count = count + 1;
        
//         console.log(count);
//     }
// }

// const counter = counterMaker();
// const counter2 = counterMaker();


// counter(); // 1
// counter(); // 2
// counter2(); // 1




// console.log(counter());
// console.log(counter());
// console.log(counter());

// Создать функцию «переключатель» toggleMe(), которая при вызове чередует возвращаемые булевы значения (true, false).
// toggleMe() // true
// toggleMe() // false
// toggleMe() // true
// toggleMe() // false



// Создать функцию counter(), которая способна считать 
// количество своих вызовов (возвращает число).
//  Если передать в эту функцию число как аргумент, 
// то она должна возвращать счетчик начиная с этого числа.
// Пример:

// counter() // 1
// counter() // 2
// counter(6) // 7
// counter() // 8
// counter(11) // 12
// counter() // 13
// counter() // 14





// function counterMaker () {
//     let number = 0;
    
//     return function (val) { // undefined

//         // if (val !== undefined) {
//         //     number = val;
//         // }

//         // return ++number;
       

//         // if (!isNaN(val) && typeof val === 'number') {
//         //     number = val; 
//         // } 

//         // return ++number;

//     };
// }


// const counter = counterMaker();
// console.log(counter());
// console.log(counter());
// console.log(counter(5));
// console.log(counter());

// console.log(counter());
