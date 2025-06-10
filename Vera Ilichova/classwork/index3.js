//Inheritance
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    return `${this.name} says Hello!`;
  }
}
const human1 = new Human(`Bil`, 25);
console.log(human1);
console.log(human1.sayHi());
class Programmer extends Human {
  constructor(technologies, name, age) {
    super(name, age);
    this.technologies = technologies;
  }
  startCoding() {
    return `${this.name} is coding using 
        ${this.technologies}`;
  }
}
const programmer1 = new Programmer([`HTML`, `CSS`, `JS`], `David`, 25);
console.log(programmer1.sayHi());
console.log(programmer1.startCoding());
class Sportsman extends Human {
  constructor(medals, name, age) {
    super(name, age);
    this.medals = medals;
  }
}
const sportsman1 = new Sportsman(2, `Donald`, 35);
console.log(sportsman1.medals);

class FootballPlayer extends Sportsman {
  constructor(team, medals, name, age) {
    super(medals, name, age);
    this.team = team;
  }
  run(speed) {
    console.log(`${this.name} is running ${speed} kmph`);
  }
}
const footballplayer1 = new FootballPlayer(`Bayern`, 2, `Ron`, 35);
footballplayer1.run(6);
