// TODO:  
// DOM, import, npm,

// event loop

// user -> product -> productAmount

// function getRandomTimeMS () {
//     return Math.floor(Math.random() * 3000);
// }

// new Promise((resolve) => {
//     setTimeout(() => {
//         console.log(1);

//         resolve();
//     }, getRandomTimeMS()); // 1000

// }).then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => { // LAVKA
//             console.log(2);
//             resolve();
//         }, getRandomTimeMS()); // 299

//     });
// }).then(() => {

//     setTimeout(() => { // LAVKA
//         console.log(3);
//     }, getRandomTimeMS()); // 200

// })

// Daniel
// 1 3 4 5 7 2 6
// Mariya
// 1 3 5 4 7 6 2
// Anastasiya
// 1 3 4 5 6 2 7
// Prepod
// 1 3 7 2 4 5 6

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// new Promise((resolve) => {
//   console.log(3);

//   setTimeout(() => {
//     console.log(4);
//     resolve();
//     console.log(5);
//   }, 0);

// }).then(() => {
//   console.log(6);
// });

// console.log(7);

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.reject(3).catch(console.log);

// new Promise((resolve) => setTimeout(resolve)).then(() => console.log(4));

// Promise.resolve(5).then(console.log);

// console.log(6);

// setTimeout(() => console.log(7), 0);

// const p1 = new Promise((resolve) => {
//   console.log('1');
//   setTimeout(() => {
//     resolve('a');
//     console.log('11');
//   }, 100);
// });

// const p2 = new Promise((resolve, reject) => {
//   console.log('2');
//   setTimeout(() => {
//     reject('b');
//     console.log('22');
//   }, 20);
// });

// const p3 = new Promise((resolve) => {
//   console.log('3');
//   setTimeout(() => {
//     resolve('c');
//     console.log('33');
//   }, 50);
// });

// Promise.allSettled([p1,p2,p3])
// .then((result) => {
//   console.log( result );
// });

// Promise.any([p1,p2,p3])
// .then((res) => {
//   console.log(res);
// });

// Promise.race([p1,p2,p3])
// .then((result) => {
//   console.log(result);
// }).catch(() => {});

// Promise.all([p1,p2,p3])
// .then((result) => {
//   console.log('RESOLVE',result);
// })
// .catch((result) => {
//   console.log('CATCH',result);
// })

// function getRandomTimeMS() {
//   return Math.floor(Math.random() * 3000);
// }

// const p1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(1);
//   }, getRandomTimeMS());
// });

// const p2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(2);
//   }, getRandomTimeMS());
// });

// const p3 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(3);
//   }, getRandomTimeMS());
// });

// async await

// class Cls {
//   async run () {}
// }

// Если функция async ОНА ВСЕГДА ВОЗВРАЩАЕТ ПРОМИС!!!

// function generators

// const foo = async () => {
//   console.log(2);
//   try {
//     const res =  p1; // ||
//      bus //undefined
//      kater
//     // console.log(res);
//   } catch (fromTrow) {
//     // console.log("OMG ITS BROKEN!");
//   }
//   console.log(3);
// };

// new Promise(() => {
//   console.log(33);
// });

// foo();

// console.log(4);

// 1 33 2 4 3

// new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(2);
//   }, getRandomTimeMS());
// }).catch((fromTrow) => {
//   console.log("OMG ITS BROKEN!");
// }).then()

// function* makeFor () {
//   for (let i = 0; i < 10; i++) {
//     yield i;
//   }
// }

// function* makeGenerator () {
//   const innerGenerator = makeFor();

//   yield* innerGenerator;

//   const val = yield 11;

//   const a = yield 12;

//   return a + val;
// }

// const generator = makeGenerator();

// console.log(generator.next());

// console.log(generator.next());

// console.log(result);

// 1 5 3 4 2
// 1 3 2 4 5
// const p1 = new Promise((resolve) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//     resolve();
//   }, 200);
// });

// new Promise((resolve) => {
//   setTimeout(async () => {
//     console.log(3);

//     await p1;

//     console.log(4);

//     resolve();

//   })
// })
// .then(() => {
//   console.log(5);
// });

// FETCH!!!

// function foo (a) {
//   return a + Math.floor(Math.random() * 100);
// }

// const result = foo('lasagna');
// const result2 = foo('lasagna');

// console.log(result);
// console.log(result2);

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: {
//     id: 2,
//     name: 'asdasda'
//   },
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// .then((data) => {
//   if (data.status === 200) {
//     alert('VSE OK');
//   }

//   data.ok

//   return data.json();
// })
// .then((response) => console.log(response))
// .catch(() => {
//   alert('VSE NE OK!');
// })

// fetch('адрес/книга/23', {
//   method: 'PATCH',
//   body: {
//     name: 'asdad',
//     pages: 23
//   }
// })
// .then((response) => {
//   if (response.status === 503) {
//     alert('упал сайт сорян');
//   }

//   return response.json(); // ДЖЕЙСОН
// })
// .then((data) => {
//   if (data.error) {
//     data.message = 'wrong password';
//     alert('not ok');
//   }
// })
// .catch((err) => {
//   // 503
// });

// JSON
// JavaScript Object Notation
// формат хранения данных

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     name: 'Fresh post',
//     text: 'asdasdasd'
//   }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
// .then((response) => {
//   return response.json();
// })
// .then((data) => {
//   console.log(data);
// })



// const val = prompt('enter smth');

// const oldVal = localStorage.getItem('test') ?? '[]';

// const readyOldVal = JSON.parse('{ "a": 2, "b": false }');

// readyOldVal.push(val);

// localStorage.setItem('test', JSON.stringify({a:1, b:false}));

// document.write(readyOldVal);

// JSON.stringify({ a: 1, b: false }); // '{ "a": 2, "b": false }'

// JSON.parse('{ "a": 2, "b": false }'); // { a: 1, b: false }

// structuredClone()

// const obj = { a: 1, b: false };
// const obj2 = structuredClone(obj);
// obj2.a = 100;

// console.log(obj2);



// const dog = {
//   name: 'Bobik'
// };


// const cat = {
//   name: 'Murzik',
//   run () {
//     console.log(this);
//     console.log(`${this.name} runs`)
//   }
// };

// const foo = cat.run.bind({});

// foo.call(cat);
