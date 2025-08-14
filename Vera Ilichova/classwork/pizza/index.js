let clickValueBase = 0;
let clickValueIng1 = 0;
let clickValueIng2 = 0;
let clickValueSous = 0; // начало заказа
let inputValue = "";
let inputElement = "";
let imageNumber = 1;
const zakazArr = [];
const img = document.querySelector("#imgPizza>img");
const myZakaz = document.getElementById("zakaz");
console.log(`Формирование заказа`);
const button = document.getElementById("btn");
// обработчики
console.dir(document);
const b = myZakaz.children[0];
const ing1 = b.nextElementSibling;
const ing2 = ing1.nextElementSibling;
const s = ing2.nextElementSibling;

b.addEventListener("click", (event) => {
  clickValueBase++;
  inputValue = event.target.innerText;
  inputElement = b.children[0].innerText;
  if (clickValueBase === 1) {
    zakazArr.push(inputValue);
    console.log(inputElement, inputValue);
  }
});
ing1.addEventListener("click", (event) => {
  clickValueIng1++;
  inputValue = event.target.innerText;
  inputElement = ing1.children[0].innerText;
  if (clickValueIng1 <= 2) {
    zakazArr.push(inputValue);
    console.log(inputElement, inputValue);
  }
});
ing2.addEventListener("click", (event) => {
  clickValueIng2++;
  inputValue = event.target.innerText;
  clickValue = 0;
  inputElement = ing2.children[0].innerText;
  if (clickValueIng2 <= 2) {
    zakazArr.push(inputValue);
    console.log(inputElement, inputValue);
  }
});
s.addEventListener("click", (event) => {
  clickValueSous++;
  inputValue = event.target.innerText;
  inputElement = s.children[0].innerText;
  if (clickValueSous === 1) {
    zakazArr.push(inputValue);
    console.log(inputElement, inputValue);
  }
});



console.log(zakazArr);


//  if (document.querySelectorAll("ol .ingredient1")) {console.log(ing1.innerText);}
// if (document.querySelectorAll("ol .ingredient2")) {console.log( ing2.innerText);}
// if (inputValue=== "инг1") { const inputArr= [...s.children]; console.log(inputArr);



// button.addEventListener("click", () => {
//   clickValue++;
//   console.log(clickValue);
//   if (clickValue === 1) {
//     imageNumber = 1;
//     letterWordArr = [];
//     img.src = `./${imageNumber}.png`;
//     formZakaz();
//   } else {
//     clickValue--;
//   }
// });

class Pizza {
  constructor(base, ingredient1, ingredient2, price) {
    this.base = base;
    this.ingredient1 = ingredient1;
    this.ingredient2 = ingredient2;
    this.price = price;
  }
  run() {
    console.log(
      `pizza ${this.base} , ${this.ingredient1}, ${this.ingredient2} is prepearing`
    );
  }
}

const myPizza = new Pizza(`brot`, `wurst`, `pilze`, 5000);
myPizza.run();
//const myPizza= {
// brand: "Margarita",
// price: 5000,
// ingredient: "ing1"}
// myPizza.brand="Chilli";
// console.log( `i have a ${myPizza.brand}`);
// delete myPizza.price;
