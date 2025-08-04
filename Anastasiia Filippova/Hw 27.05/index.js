// 1. Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов). Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount. Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с наибольшим количеством страниц

// class Book {
//   constructor(author, bookName, pageAmount) {
//     this.author = author;
//     this.bookName = bookName;
//     this.pageAmount = pageAmount;
//   }
// }

// const books = [
//   new Book("Author 1", "Name 1", 234),
//   new Book("Author 2", "Name 2", 456),
//   new Book("Author 3", "Name 3", 645),
//   new Book("Author 4", "Name 4", 345),
//   new Book("Author 5", "Name 5", 567),
//   new Book("Author 6", "Name 6", 676),
//   new Book("Author 7", "Name 7", 452),
//   new Book("Author 8", "Name 8", 746),
// ]

// function getBiggerBook (maxBooks) {
//   let maxPageBook = maxBooks[0];
//   for (let i = 1; i < books.length; i++) {
//     if (maxBooks[i].pageAmount > maxPageBook.pageAmount) {
//       maxPageBook = maxBooks[i]
//     }
//   }
//   return maxPageBook
// }

// console.log(getBiggerBook(books));

// 2. Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]), и методом .code() (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»). Метод code должен храниться в прототипе класса. Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

// class Programmer {
//   constructor(name, stack) {
//     this.name = name;
//     this.stack = stack;
//   }
//   code() {
//     for (let i = 0; i < this.stack.length; i++) {
//       console.log(`${this.name} is coding on ${this.stack[i]}`);
//     }
//   }
//   toString() {
//     return `Hello my name is ${this.name}`;
//   }
// }

// const programmers = new Programmer("Oleg", ["Python", "PHP", "Java"]);

// programmers.code();
// console.log(programmers.toString());
