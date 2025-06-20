
// 3. Дан массив объектов
// const arr = [
//     {a: 2, b: 1},
//     {a: 5, b: 12},
//     {a: 95, b: 7}
//   ]
//   Используя ТОЛЬКО методы массивов (циклы запрещены):
//   Вывести в консоль 'its valid', если во всех объектах поле a > b, 
// вывести 'its invalid' если хотя бы в одном объекте a<=b
// const arr = [
//     {a: 2, b: 1}, // func({a: 2, b: 1}, 0, arr)
//     {a: 5, b: 12}, // func({a: 5, b: 12}, 1, arr)
//     {a: 95, b: 7} // func({a: 95, b: 7}, 2, arr)
// ];

// const func = (obj) => obj.a > obj.b;

// const isABiggerThanB = arr.every( func );

// console.log(isABiggerThanB ? 'its valid' : 'its invalid');

// 4.   На основе массива arr, создать массив объектов у которых поле b возведено
//  в квадрат пример:
//   const arr2 = [
//     {a: 2, b: 1},
//     {a: 5, b: 144},
//     {a: 95, b: 49}
//   ];
