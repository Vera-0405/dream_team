// 1. Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов). Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount. Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с наибольшим количеством страниц

// class Book {
//   constructor(autohor, bookName, pageAmount) {
//     this.autohor = autohor;
//     this.bookName = bookName;
//     this.pageAmount = pageAmount;
//   }
// }
// function getBiggerBook(books) {
//   let biggest = books[0];

//   for (let i = 0; i < books.length; i++) {
//     if (books[i].pageAmount > biggest.pageAmount) {
//       biggest = books[i];
//     }
//   }
//   return biggest;
// }
// const books = [
//   new Book("Л.Н.Толстой", "Война и мир", 1225),
//   new Book("М.А.Булгаков", "Мастер и Маргарита", 480),
//   new Book("И.С.Тургенев", "Отцы и дети", 300),
//   new Book("Л.Н.Толстой", "Анна Каренина", 864),
//   new Book("Ф.М.Достоевский", "Преступление и наказание", 672),
//   new Book("М.А.Булгаков", "Собачье сердце", 96),
//   new Book("А.С.Пушкин", "Капитанская дочка", 160),
//   new Book("А.П.Чехов", "Рассказы", 150),
// ];

// let biggestBook = getBiggerBook(books);

// console.log(`Книга с наибольшим количеством страниц:`);
// console.log(
//   `${biggestBook.autohor} - "${biggestBook.bookName}" - ${biggestBook.pageAmount} стр.`
// );

// 2. Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]), и методом .code() (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP», «Oleg is coding on Java»). Метод code должен храниться в прототипе класса. Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

class Programmer {
  constructor(name, stack) {
    this.name = name;
    this.stack = stack;
  }
  code() {
    for (let i = 0; i < this.stack.length; i++) {
      console.log(`${this.name} is coding on ${this.stack[i]}`);
    }
  }
  toString() {
    return `Hello, my name is ${this.name}`;
  }
}
let oleg = new Programmer("Oleg", ["Python", "PHP", "Java"]);
oleg.code();
console.log(oleg.toString());
