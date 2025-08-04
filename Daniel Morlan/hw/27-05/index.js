//Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов).
// Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount.
// Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с наибольшим количеством страниц

class Book {
  constructor(author, bookName, pageAmount) {
    this.author = author;
    this.bookName = bookName;
    this.pageAmount = pageAmount;
  }
}
const books = [
  new Book(`Толстой`, `Война и мир`, 1225),
  new Book(`Достоевский`, `Преступление и наказание`, 671),
  new Book(`Пушкин`, `Евгений Онегин`, 384),
  new Book(`Булгаков`, `Мастер и Маргарита`, 540),
  new Book(`Гоголь`, `Тарас Бульба`, 180),
  new Book(`Шекспир`, `Ромео и Джульета`, 160),
  new Book(`Беляев`, `Человек амфибия`, 240),
  new Book(`Есенин`, `Преображение`, 150),
];
function getBiggerBook(bookArray) {
  let bigBook = bookArray[0];
  for (let i = 1; i < bookArray.length; i++) {
    if (bookArray[i].pageAmount > bigBook.pageAmount) {
      bigBook = bookArray[i];
    }
  }
  return bigBook;
}
const bigBook = getBiggerBook(books);
console.log(bigBook);

//Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]),
//и методом .code() (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python»,
// «Oleg is coding on PHP», «Oleg is coding on Java»). Метод code должен храниться в прототипе класса.
// Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

class Programmer {
  constructor(name, stack) {
    this.name = name;
    this.stack = stack;
  }

  code() {
    this.stack.forEach((language) => {
      console.log(`${this.name} is coding on ${language}`);
    });
  }

  toString() {
    return `Hello my name is ${this.name}`;
  }
}

const oleg = new Programmer(`Oleg`, [`Python`, `PHP`, `Java`]);
oleg.code();
console.log(oleg.toString );
