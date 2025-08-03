//const { Children } = require("react");
//game_Slovo

let clickValue = 0; // начало новой игры
let letterWordArr = [];
let inputValue = "";
let imageNumber = 1;
const img = document.querySelector("#imgWrapper>img");
const word = document.getElementById("word");
console.log(word);
const inputLetter = document.getElementById("myInput");
const button = document.getElementById("btn");
const button2 = document.getElementById("btn2");
// обработчики
button2.addEventListener("click", () => {
  clickValue++;
  console.log(clickValue);
  if (clickValue === 1) {
    imageNumber = 1;
    letterWordArr = [];
    img.src = `./${imageNumber}.png`;
    getWord(letterWordArr);
  } else {
    clickValue--;
  }
});
inputLetter.addEventListener("input", () => {
  if (clickValue === 1) {
    inputValue = inputLetter.value;
  } else {
    clickValue = 0;
    inputLetter.value = "";
  }
});

button.addEventListener("click", () => {
  if (clickValue === 1) {
    getLetter();
  } else {
    clickValue = 0;
  }
});
button.addEventListener("click", () => {
  if (clickValue === 1) {
    setTimeout(getWinn, 500);
  } else {
    clickValue = 0;
  }
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
    "Валерчик",
    "Аристарх",
    "Митрофан",
    "Фекла",
  ];
  const wordArrNumber = Math.floor(Math.random() * wordArr.length);
  //console.log(wordArrNumer,wordArr[wordArrNumer]);
  const myWord = wordArr[wordArrNumber];
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

//проверяем введенную букву
function getLetter() {
  let trueinputLetter = false;
  if (typeof inputValue === "string" && inputValue !== "") {
    console.log(inputValue);
    for (let i = 0; i < letterWordArr.length; i++) {
      if (letterWordArr[i] === inputValue) {
        trueinputLetter = true;
        document.getElementById("word").children[i].textContent = inputValue;
      }
    }
  }
  if (trueinputLetter === false) {
    imageNumber++;
    console.log(imageNumber);
    img.src = `./${imageNumber}.png`;
  }
  return;
}

// выбираем и проверяем тэги span на выигрыш
function getWinn() {
  const spanElementList = document.querySelectorAll("span");
  console.log(spanElementList);
  const spanElementArr = [...spanElementList];
  console.log(spanElementArr);
  const isAllLetterDiscovered = spanElementArr.every((span) => {
    if (span.textContent !== " _ ") {
      return true;
    } else {
      return false;
    }
  });
  if (isAllLetterDiscovered) {
    alert("Вы выиграли!!!");
    clickValue = 0; // начало  новой игры
    for (let i = 0; i < spanElementArr.length; i++) {
      document.querySelector("span").remove();
    }
  } else {
    if (imageNumber >= 5) {
      alert(`Вы проиграли Имя : ${letterWordArr}`);
      clickValue = 0; // начало новой игры
      for (let i = 0; i < spanElementArr.length; i++) {
        document.querySelector("span").remove();
      }
    }
  }
  return;
}
