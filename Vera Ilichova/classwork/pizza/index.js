// let clickValue = 0; // начало новой игры
// let letterWordArr = [];
// let inputValue = "";
// let imageNumber = 1;
 const img = document.querySelector("#imgPizza>img");
 const formZakaz = document.getElementById("zakaz");
// console.log(formZakaz);
 const inputLetter = document.getElementById("myInput");
 const button = document.getElementById("btn");
// const button2 = document.getElementById("btn2");
// // обработчики
// button2.addEventListener("click", () => {
//   clickValue++;
//   console.log(clickValue);
//   if (clickValue === 1) {
//     imageNumber = 1;
//     letterWordArr = [];
//     img.src = `./${imageNumber}.png`;
//     getWord(letterWordArr);
//   } else {
//     clickValue--;
//   }
// });
// inputLetter.addEventListener("input", () => {
//   if (clickValue === 1) {
//     inputValue = inputLetter.value;