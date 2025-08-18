function getPizza() {
  let clickValueBase = 0;
  let zakazBaseArr = [];
  let clickValueIng1 = 0;
  let zakazIngredient1Arr = [];
  let clickValueIng2 = 0;
  let zakazIngredient2Arr = [];
  let clickValueSous = 0;
  let zakazSousArr = []; // начало заказа
  let inputValue = "";
  let inputElement = "";
  let imageNumber = 1; let sum =0;
  const zakazPriceArr = [];
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
    let selectedElement = event.target;
    inputValue = event.target.innerText;
    inputValue = event.target.innerText;
    inputElement = b.children[0].innerText;
    if (clickValueBase === 1) {
      zakazBaseArr.push(inputValue);
      selectedElement.style.color = `red`;
      console.log(inputElement, zakazBaseArr);
    }
  });
  ing1.addEventListener("click", (event) => {
    clickValueIng1++;
    let selectedElement = event.target;
    inputValue = event.target.innerText;
    inputValue = event.target.innerText;
    inputElement = ing1.children[0].innerText;
    if (clickValueIng1 <= 2) {
      zakazIngredient1Arr.push(inputValue);
      selectedElement.style.color = `red`;
      console.log(inputElement, zakazIngredient1Arr);
    }
  });
  ing2.addEventListener("click", (event) => {
    clickValueIng2++;
    let selectedElement = event.target;
    inputValue = event.target.innerText;
    inputValue = event.target.innerText;
    clickValue = 0;
    inputElement = ing2.children[0].innerText;
    if (clickValueIng2 <= 2) {
      zakazIngredient2Arr.push(inputValue);
      // myElement.style.classlist.add (`active`);
      selectedElement.style.color = `red`;

      console.log(inputElement, zakazIngredient2Arr);
    }
  });
  s.addEventListener("click", (event) => {
    clickValueSous++;
    let selectedElement = event.target;
    inputValue = event.target.innerText;
    inputElement = s.children[0].innerText;
    if (clickValueSous === 1) {
      zakazSousArr.push(inputValue);
      selectedElement.style.color = `red`;
      console.log(inputElement, zakazSousArr);
    }
  });
  class Pizza {
    constructor(base, ingredient1, ingredient2, sous) {
      this.base = base;
      this.ingredient1 = ingredient1;
      this.ingredient2 = ingredient2;
      this.sous = sous;
    }
    run() {
            const pizzaPrice = {
        basePrice: [20, 30, 40, 50],
        ingredient1Price: [4, 6, 8, 10],
        ingredient2Price: [5, 10, 15, 20],
        sousPrice: [1, 2, 3, 4],
      };

      myZakaz.addEventListener("click", (event) => {
        console.log(
          `pizza ${this.base} , ${this.ingredient1}, ${this.ingredient2}, ${this.sous} is prepearing`
        );
        const baseArrList = document
          .querySelector(".base")
          .querySelectorAll("li");
        console.log(baseArrList);
        const baseArr = [...baseArrList];
        console.log(baseArr);
        baseArr.forEach((li, index) => {
                     {if (li.style.color ==="red"){console.log (index);
            sum = sum + pizzaPrice.basePrice[index];
             console.log(sum);}}
             });
         const ingredient1ArrList = document
         .querySelector(".ingredient1")
           .querySelectorAll("li");
         console.log(ingredient1ArrList);
         const ingredient1Arr = [...ingredient1ArrList];
         console.log(ingredient1Arr);
         ingredient1Arr.forEach((li, index) => {
                      {if (li.style.color ==="red"){console.log (index);
             sum = sum + pizzaPrice.ingredient1Price[index];
              console.log(sum);}}
      });
       const ingredient2ArrList = document
           .querySelector(".ingredient2")
           .querySelectorAll("li");
         console.log(ingredient2ArrList);
         const ingredient2Arr = [...ingredient2ArrList];
         console.log(ingredient2Arr);
         ingredient2Arr.forEach((li, index) => {
                      {if (li.style.color ==="red"){console.log (index);
       sum = sum + pizzaPrice.ingredient2Price[index];
        console.log(sum);}}
        });
           
         const sousArrList = document
          .querySelector(".sous")
          .querySelectorAll("li");
         console.log(sousArrList);
         const sousArr = [...sousArrList];
         console.log(sousArr);
         sousArr.forEach((li, index) => {
                      {if (li.style.color ==="red"){console.log (index);
             sum = sum + pizzaPrice.sousPrice[index];
              console.log(sum);}}
                   
      });
      
        //  const ingredient1Arr=document.querySelectorAll("ol .ingredient1");
        //if (ingredient1Arr.forEach(item,index) === this.ingredient1){sum = sum + pizzaPrice.ingredient1Price[index];}
        //    const ingredient2Arr=document.querySelectorAll("ol .ingredient2");
        //if (ingredient2Arr.forEach(item,index) === this.ingredient2){sum = sum + pizzaPrice.ingredient2Price;}
        //const sousArr=document.querySelectorAll("ol .sous");
        //if (sousArr.forEach(item,index) === this.sous){sum = sum + pizzaPrice.sousPrice[index];}
        //console.log(`pizzaPrice= ${sum}`);
      });
    }
  }
  const myPizza = new Pizza(
    zakazBaseArr,
    zakazIngredient1Arr,
    zakazIngredient2Arr,
    zakazSousArr
  );
  myPizza.run();
}
getPizza();
// // console.log(zakazIngredient1Arr, zakazIngredient2Arr, zakazSous);
// //  if (document.querySelectorAll("ol .ingredient1")) {console.log(ing1.innerText);}
// // if (document.querySelectorAll("ol .ingredient2")) {console.log( ing2.innerText);}
// // if (inputValue=== "инг1") { const inputArr= [...s.children]; console.log(inputArr);

// // button.addEventListener("click", () => {
// //   clickValue++;
// //   console.log(clickValue);
// //   if (clickValue === 1) {
// //     imageNumber = 1;
// //     letterWordArr = [];
// //     img.src = `./${imageNumber}.png`;
// //     formZakaz();
// //   } else {
// //     clickValue--;
// //   }
// // });

// //
// //const myPizza = new Pizza(zakazBase,zakazIngredient1Arr, zakazIngredient2Arr, zakazSous);
// //myPizza.run();
// function myPizzaPrice(inputValue){
// const pizzaPrice= {
// basePrice: [20,30,40,50],
// ingredient1Price:[4,6,8,10],
// ingredient2Price:[5,10,15,20],
// sousPrice:[1,2,3,4]
// }
// let sum = 0;
// const baseArr=document.querySelectorAll("ol .base");
// if (baseArr.forEach(item,index)===inputValue){sum=sum+pizzaPrice.base[index];}
//   const ingredient1Arr=document.querySelectorAll("ol .ingredient1");
// if (ingredient1Arr.forEach(item,index)=== inputValue){sum=sum+pizzaPrice.ingredient1Price[index];}
//     const ingredient2Arr=document.querySelectorAll("ol .ingredient2");
// if (ingredient2Arr.forEach(item,index)===inputValue){sum=sum+pizzaPrice.ingredient2Price[index];}
// const sousArr=document.querySelectorAll("ol .sous");
// if (sousArr.forEach(item,index)===inputValue){sum=sum+pizzaPrice.sousPrice[index];}
// return sum;
// // myPizza.brand="Chilli";
// // console.log( `i have a ${myPizza.brand}`);
// // delete myPizza.price;
// }
