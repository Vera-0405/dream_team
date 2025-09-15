function getPizza() {
  let clickValueBase = 0;
  let zakazBaseArr = [];
  let zakazBaseArrlist = [];
  let clickValueIng1 = 0;
  let zakazIngredient1Arr = [];
  let zakazIngredient1ArrList = [];
  let clickValueIng2 = 0;
  let zakazIngredient2Arr = [];
  let zakazIngredient2ArrList = [];
  let clickValueSous = 0;
  let zakazSousArr = [];
  let zakazSousArrList = [];
  let inputValue = "";
  let inputElement = "";
  let sum = 0;
  let clickZakaz = "";
  const pizzaPrice = {
    basePrice: [1, 2, 3, 4],
    ingredient1Price: [1, 3, 2, 4],
    ingredient2Price: [4, 3, 2, 1],
    sousPrice: [4, 2, 3, 1]
  };
  //начало заказа
  const img = document.querySelector("#imgPizza>img");
  const myZakaz = document.getElementById("zakaz");
  console.log(`Формирование заказа`);
  const button = document.getElementById("btn");
  // DOM
  //console.dir(document);
  const b = myZakaz.children[0]; //base-osnova
  const ing1 = b.nextElementSibling; //ingredient1
  const ing2 = ing1.nextElementSibling; //ingredient2
  const s = ing2.nextElementSibling; //sous

  // обработчики
  b.addEventListener("click", (event) => {
    endZakaz();
    clickValueBase++;
    let selectedElement = event.target;
    inputValue = event.target.innerText;
    inputElement = b.children[0].innerText;
    if (inputValue === inputElement) {
      clickValueBase--;
    } else if (clickValueBase === 1 && clickZakaz !== "end") {
      zakazBaseArr.push(inputValue);
      zakazBaseArrlist.push(selectedElement);
      selectedElement.style.color = "red";
     // console.log(inputElement, zakazBaseArr);
      const parent = document.getElementById("zakazFormation");
     // console.log(parent);
      ul = document.createElement("ul");
      ul.textContent = inputValue;
      parent.append(ul);
    //  console.log(ul);
    }
  });
  ing1.addEventListener("click", (event) => {
    endZakaz();
    clickValueIng1++;
    let selectedElement = event.target;
    inputValue = event.target.innerText;
    inputElement = ing1.children[0].innerText;
    if (inputValue === inputElement) {
      clickValueIng1--;
    } else if (clickValueIng1 <= 2 && clickZakaz !== "end") {
      zakazIngredient1Arr.push(inputValue);
      zakazIngredient1ArrList.push(selectedElement);
      selectedElement.style.color = "red";
    //  console.log(inputElement, zakazIngredient1Arr);
      const parent = document.getElementById("zakazFormation");
    //  console.log(parent);
      ul = document.createElement("ul");
      ul.textContent = inputValue;
      parent.append(ul);
    //  console.log(ul);
    }
  });
  ing2.addEventListener("click", (event) => {
    endZakaz();
    clickValueIng2++;
    let selectedElement = event.target;
    inputValue = event.target.innerText;
    inputElement = ing2.children[0].innerText;
    if (inputValue === inputElement) {
      clickValueIng2--;
    } else if (clickValueIng2 <= 2 && clickZakaz !== "end") {
      zakazIngredient2Arr.push(inputValue);
      zakazIngredient2ArrList.push(selectedElement);
      selectedElement.style.color = "red";
    //  console.log(inputElement, zakazIngredient2Arr);
      const parent = document.getElementById("zakazFormation");
   //   console.log(parent);
      ul = document.createElement("ul");
      ul.textContent = inputValue;
      parent.append(ul);
    //  console.log(ul);
    }
  });
  s.addEventListener("click", (event) => {
    endZakaz();
    clickValueSous++;
    let selectedElement = event.target;
    inputValue = event.target.innerText;
    inputElement = s.children[0].innerText;
    if (inputValue === inputElement) {
      clickValueSous--;
    } else if (clickValueSous === 1 && clickZakaz !== "end") {
      zakazSousArr.push(inputValue);
      zakazSousArrList.push(selectedElement);
      selectedElement.style.color = "red";
    //  console.log(inputElement, zakazSousArr);
      const parent = document.getElementById("zakazFormation");
    //  console.log(parent);
      ul = document.createElement("ul");
      ul.textContent = inputValue;
      parent.append(ul);
    //  console.log(ul);
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
      // выбор ингредиентов
      b.addEventListener("click", () => {
        endZakaz();
        const baseArrList = document
          .querySelector(".base")
          .querySelectorAll("li");
        console.log(
          `pizza ${this.base} , ${this.ingredient1}, ${this.ingredient2}, ${this.sous} is prepearing`
        );
        const baseArr = [...baseArrList];
    //    console.log(baseArr);
        baseArr.forEach((li, index) => {
          if (
            li.style.color === "red" &&
            clickValueBase === 1 &&
            inputValue !== inputElement
          ) {
          //  console.log(index);

            sum = sum + pizzaPrice.basePrice[index];
            //   console.log(pizzaPrice.basePrice[index], sum);
            img.src = `img/pizza2.jpg`;
          }
        });
      });
      ing1.addEventListener("click", () => {
        endZakaz();
        const ingredient1ArrList = document
          .querySelector(".ingredient1")
          .querySelectorAll("li");
        console.log(
          `pizza ${this.base} , ${this.ingredient1}, ${this.ingredient2}, ${this.sous} is prepearing`
        );
        const ingredient1Arr = [...ingredient1ArrList];
      //  console.log(ingredient1Arr);
        ingredient1Arr.forEach((li, index) => {
                    let tempValue1 = 0;
          if (
            li.style.color === "red" &&
            clickValueIng1 <= 2 &&
            inputValue !== inputElement
          ) {
          //  console.log(index);
            if (clickValueIng1 === 1) {
              tempValue1 = index;
              sum = sum + pizzaPrice.ingredient1Price[tempValue1];
            }

            if (clickValueIng1 === 2) {
              if (index === tempValue1) {
                sum = sum - pizzaPrice.ingredient1Price[tempValue1];
              }
              sum = sum + pizzaPrice.ingredient1Price[index];
            }

            //  console.log(pizzaPrice.ingredient1Price[index], sum);
                  img.src = `img/pizza3.jpg`;
          }
        });
      });
      ing2.addEventListener("click", () => {
        endZakaz();
        const ingredient2ArrList = document
          .querySelector(".ingredient2")
          .querySelectorAll("li");
        console.log(
          `pizza ${this.base} , ${this.ingredient1}, ${this.ingredient2}, ${this.sous} is prepearing`
        );

        const ingredient2Arr = [...ingredient2ArrList];
      //  console.log(ingredient2Arr);
        ingredient2Arr.forEach((li, index) => {
          let tempValue2 = 0;
          if (
            li.style.color === "red" &&
            clickValueIng2 <= 2 &&
            inputValue !== inputElement
          ) {
         //   console.log(index);

            if (clickValueIng2 === 1) {
              tempValue2 = index;
              sum = sum + pizzaPrice.ingredient2Price[tempValue2];
            }
            if (clickValueIng2 === 2) {
              if (index === tempValue2) {
                sum = sum - pizzaPrice.ingredient2Price[tempValue2];
              }
              sum = sum + pizzaPrice.ingredient2Price[index];
            }

            //  console.log(pizzaPrice.ingredient2Price[index], sum);

            img.src = `img/pizza4.jpg`;
          }
        });
      });
      s.addEventListener("click", () => {
        endZakaz();
        const sousArrList = document
          .querySelector(".sous")
          .querySelectorAll("li");
        console.log(
          `pizza ${this.base} , ${this.ingredient1}, ${this.ingredient2}, ${this.sous} is prepearing`
        );
        const sousArr = [...sousArrList];
      //  console.log(sousArr);
        sousArr.forEach((li, index) => {
          if (
            li.style.color === "red" &&
            clickValueSous === 1 &&
            inputValue !== inputElement
          ) {
            //console.log(index);
            sum = sum + pizzaPrice.sousPrice[index];
        //    console.log(pizzaPrice.sousPrice[index], sum);
            img.src = `img/pizza5.jpg`;
          }
        });
      });
    }
  }
  // экземпляр пиццы
  const myPizza = new Pizza(
    zakazBaseArr,
    zakazIngredient1Arr,
    zakazIngredient2Arr,
    zakazSousArr
  );
  myPizza.run();
  // обработчики области заказа
  zakazFormation.addEventListener("click", (event) => {
    endZakaz();
   // console.log(clickZakaz);
    if (clickZakaz !== "end") {
      selectedValue = event.target.innerText;
     // console.log(selectedValue);
      zakazBaseArr.some((item, index) => {
        if (item === selectedValue && clickValueBase !== 0) {
         // console.log(item);
         // console.log(selectedValue);
          zakazBaseArr[index] = "";
          console.log(zakazBaseArr[index]);
          zakazBaseArrlist[index].style.color = "blue";
          sum = sum - pizzaPrice.basePrice[index];
          event.target.remove();
          clickValueBase--;
        }
      });
      zakazIngredient1Arr.some((item, index) => {
        if (item === selectedValue && clickValueIng1 !== 0) {
        //  console.log(item);
        //  console.log(selectedValue);
          zakazIngredient1Arr[index] = "";
          console.log(zakazIngredient1Arr[index]);
          zakazIngredient1ArrList[index].style.color = "blue";
          sum = sum - pizzaPrice.ingredient1Price[index];
          event.target.remove();
          clickValueIng1--;
        }
      });
      zakazIngredient2Arr.some((item, index) => {
        if (item === selectedValue && clickValueIng2 !== 0) {
        //  console.log(item);
        //  console.log(selectedValue);
          zakazIngredient2Arr[index] = "";
        //  console.log(zakazIngredient2Arr[index]);
          zakazIngredient2ArrList[index].style.color = "blue";
          sum = sum - pizzaPrice.ingredient2Price[index];
          event.target.remove();
          clickValueIng2--;
        }
      });
      zakazSousArr.some((item, index) => {
        if (item === selectedValue && clickValueSous !== 0) {
        //  console.log(item);
        //  console.log(selectedValue);
          zakazSousArr[index] = "";
        //  console.log(zakazSousArr[index]);
          zakazSousArrList[index].style.color = "blue";
          sum = sum - pizzaPrice.sousPrice[index];
          event.target.remove();
          clickValueSous--;
        }
      });
    }
  });

  //  условие конца заказа
  function endZakaz() {
    if (
      clickValueBase === 1 &&
      clickValueIng1 >= 1 &&
      clickValueIng2 >= 1 &&
      clickValueSous === 1
    ) {
      clickZakaz = "end";
    }
    return clickZakaz;
  }
  // обработчики конца заказа
  button.addEventListener("click", () => {
    endZakaz();
    if (clickZakaz === "end") {
      img.src = `img/pizza1.jpg`;
      console.log(`Pizza ${zakazBaseArr}, ${zakazIngredient1Arr}, ${zakazIngredient2Arr}, 
     ${zakazSousArr} is ready`);
      const span = document.getElementById("span");
      if (sum > 0) {
        span.textContent = sum;
        alert(`Заказ успешно сформирован`);
      } else {
        console.log(`ошибка: сделать новый заказ`);
      }
    } else {
      console.log(`заказ не сформирован`);
      alert(`ошибка: сделать новый заказ`);
    }
  });
}
getPizza();
