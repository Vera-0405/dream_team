//const { Children } = require("react");

let letterWordArr = [];
let inputValue = "";
let imageNumber = 1;
const img = document.querySelector("#imgWrapper>img");
const word = document.getElementById("word");
console.log(word);
const inputLetter = document.getElementById("myInput");
const button = document.getElementById("btn");
// обработчики
inputLetter.addEventListener("input", () => {
  inputValue = inputLetter.value;
  console.log(inputValue);
});

button.addEventListener("click", () => {
  getLetter();
});
button.addEventListener("click", () => {
 getWinn;
});
//готовим массив букв из слова
function getWord() {
  const wordArr = [
    "Владислав",
    "Мария",
    "Игорь",
    "Даниэль",
    "Анастасия",
    "Вера",
  ];
  const wordArrNumer = Math.floor(Math.random() * wordArr.length);
  //console.log(wordArrNumer,wordArr[wordArrNumer]);
  const myWord = wordArr[wordArrNumer];
  letterWordArr = [...myWord];
  console.log(letterWordArr);
  letterWordArr.forEach(() => {
    const parent = document.getElementById("word");
    console.log(parent);
    span = document.createElement("span");
    span.textContent = " _ ";
    parent.append(span);
    console.log(span);
    return;
  });
}

getWord(letterWordArr);
console.log(letterWordArr);

//проверяем введенную букву
function getLetter() {
  if (typeof inputValue === "string" && inputValue !== "") {
    console.log(inputValue);
    for (let i = 0; i < letterWordArr.length; i++) {
      if (letterWordArr[i] === inputValue) {
        console.log(letterWordArr[i], i);
        document.getElementById("word").children[i].textContent = inputValue;
      }
    }

    return;
  }
}

// выбираем и проверяем тэги span на выигрыш
function getWinn() {
  const spanElementList = document.querySelectorAll("span");
  console.log(spanElementList);
  spanElementArr = [...spanElementList];
  spanElementArr.every(() => {
    if (spanElementArr.textContent !== " _ ") {
      alert("Вы выиграли!!!");
    } else {
      imageNumber++;
      img.src = `./${imageNumber}.png`;
      console.log(inputValue, imageNumber);
      if (imageNumber > 5) {
        alert("Вы проиграли");
      }
    }
  });
  return;
}
