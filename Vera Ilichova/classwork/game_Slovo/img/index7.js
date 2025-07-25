//const { Children } = require("react");

let letterWordArr = [];
let inputValue = "";
const img = document.querySelector("#imgWrapper>img");
let imageNumber = 1;
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
//готовим массив букв из слова
function getWord() {
//  const wordArr = ["Владислав", "Мария", "Игорь", "Даниэль", "Анастасия","Вера"];
const wordArr = ["Vera","Maria"];

  const wordArrNumer = Math.floor(Math.random() * wordArr.length);
  //console.log(wordArrNumer,wordArr[wordArrNumer]);
  return function generateWordFormat() {
    const myWord = wordArr[wordArrNumer];
    letterWordArr = [...myWord];
    console.log(letterWordArr);
    return;
  }
 }
// функция с замыканием
const wordFormat = getWord();
wordFormat(); //замыкание
 console.log(letterWordArr);
 gewinn();

 //добавляем тэги span
 letterWordArr.forEach(() => {
   let parent = document.getElementById("word");
   console.log(parent);
   let sp = document.createElement("span");
   sp.textContent = " _ ";
   parent.append(sp);
   console.log(sp);
   return ;
 });
 
 //проверяем введенную букву
function getLetter() {
  if (typeof (inputValue) === "string" && inputValue !="") {
    console.log(inputValue);
    for (let i = 0; i < letterWordArr.length; i++) {
      if (letterWordArr[i] === inputValue) {
        console.log(letterWordArr[i], i);
        document.getElementById("word").children[i].textContent = inputValue;
                }}
                     
                      return;
}}

// выбираем и проверяем тэги span
function gewinn(){
 const spanElementArr=document.querySelectorAll("span");
 console.log(spanElementArr);
 if (spanElementArr.every = " _ "){alert ("Вы выиграли!!!");}
 else { imageNumber++; img.src = `./${imageNumber}.png`;
        console.log(inputValue, letterWordArr[i],imageNumber); }
               
        if (imageNumber>5){ alert("Вы проиграли");
           }
            return;
          }





