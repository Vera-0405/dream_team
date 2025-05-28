// Создать конструктор Car, который принимает параметры
// model, color, price. Конструктор должен возвращать объект в
// котором присутствуют вышеназванные поля со значениями.
// Каждый представитель класса Car должен обладать методом
// run() который выводит сообщение вида : MODEL + “ ” +
// COLOR + ” is running”.

class Car {
  constructor(model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
  }
  run() {
    console.log(`${this.model} , ${this.color} is running`);
  }
}

const bmwX5 = new Car(`X5`, `red`,5000);
bmwX5.run();
