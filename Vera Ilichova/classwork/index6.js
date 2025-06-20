// замыкание


// Создать функцию «переключатель» toggleMe(), которая при вызове чередует возвращаемые булевы значения (true, false).
// toggleMe() // true
// toggleMe() // false
// toggleMe() // true
// toggleMe() // false


function toggleMeMaker() {
  let bolean = false;
  return function () {
    bolean = !bolean;
    return bolean;
  };
}
const toggleMe = toggleMeMaker();
toggleMe();
console.log(toggleMe());
console.log(toggleMe());
console.log(toggleMe());
console.log(toggleMe());


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

function counterMaker() {
  let number = 0;
  return function (val) {
    if (isNaN(val)) {
      return ++number;
    }
    number = val;
    return ++number;
  };
}
const counter = counterMaker();
console.log(counter());
console.log(counter());
console.log(counter(6));
console.log(counter());
console.log(counter(11));
console.log(counter());
console.log(counter());

// Promise
Promise.resolve(1)
.then(x => x + 1)
.then(x => { throw x })
.then(x => console.log(x))
.catch(err => { console.log(err); return; })
.then(x => Promise.resolve(1))
.catch(err => console.log(err))
.then(x => console.log(x))