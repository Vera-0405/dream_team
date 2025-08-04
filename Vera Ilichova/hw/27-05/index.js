// hw 27-05

// classes
// Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов).
//Каждая книга должна представлять из себя объект, в котором есть три поля: author, bookName, pageAmount.
// Создать функцию getBiggerBook(), которая принимает массив книг и возвращает ОДНУ книгу с
//наибольшим количеством страниц
let bookArr = [];
class Book {
  constructor(author, bookName, pageAmount) {
    this.author = author;
    this.bookName = bookName;
    this.pageAmount = pageAmount;
        bookArr.push(this);
  }
}
const book1 = new Book(`R.Nosov`, `Neznaika na Zemle`, 25);
const book2 = new Book(`M.Nosov`, `Neznaika na Solnze`, 25);
const book3 = new Book(`O.Nosov`, `Neznaika na Yupitere`, 32);
const book4 = new Book(`P.Nosov`, `Neznaika na Venere`, 33);
const book5 = new Book(`N.Nosov`, `Neznaika na Lune`, 37);
const book6 = new Book(`S.Nosov`, `Neznaika na Plutone`, 30);
const book7 = new Book(`T.Nosov`, `Neznaika na Saturne`, 28);
const book8 = new Book(`U.Nosov`, `Neznaika na Marse`, 32);
getBiggerBook(bookArr);
function getBiggerBook() {
  let book = book1;
  for (let i = 0; i < bookArr.length; i++) {
    if (bookArr[i].pageAmount > book.pageAmount) {
      book = bookArr[i];
    }
  }
  console.log(book); return book;
}
//2. Создать класс Programmer, инстанс которого обладает полями name, stack (массив строк, типа [«Python», «PHP», «Java»]),
// и методом .code() (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python», «Oleg is coding on PHP»,
//    «Oleg is coding on Java»). Метод code должен храниться в прототипе класса. Переопределить метод toString у инстансов Programmer,
//     чтобы они выводили соо(бщение вида «Hello my name is Oleg»

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
    console.log(`Hello, my name is ${this.name}`);
  }
}
const p1 = new Programmer("Oleg", [`Python`, `PHP`, `Java`]);
//console.log(p1);
p1.code();
p1.code = p1.toString;
p1.code();


