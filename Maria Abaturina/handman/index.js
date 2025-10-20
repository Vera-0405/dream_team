const img = document.querySelector("#imgWrapper > img");
const word = document.getElementById("word");
const inputLetter = document.getElementById("letter");
const button = document.getElementById("btn");
const newGamebtn = document.getElementById("newGamebtn");

function hangmanGame() {
  let secretWord = " ";
  let imgNumber = 0;

  function startGame() {
    const words = ["восхищение", "радость", "удивление", "злость", "грусть"];
    const randomWord = Math.floor(Math.random() * words.length);
    imgNumber = 1;
    secretWord = words[randomWord];

    img.src = `./img/${imgNumber}.png`;
    inputLetter.value = "";
    word.innerHTML = "";
    for (let i = 0; i < secretWord.length; i++) {
      const span = document.createElement("span");
      span.textContent = "_ ";
      word.appendChild(span);
    }
    button.removeEventListener("click", handleInputLetter);
    button.addEventListener("click", handleInputLetter);
    newGamebtn.addEventListener("click", startGame);
  }
  function endGame(message) {
    button.removeEventListener("click", handleInputLetter);
    setTimeout(() => alert(message), 100);
  }

  function handleInputLetter() {
    const letter = inputLetter.value.trim().toLowerCase();

    if (letter.length !== 1 || !/^[а-яА-ЯёЁ]/i.test(letter))
      if (letter !== "") {
        alert("Введите букву (на кириллице)");

        return;
      }
    inputLetter.value = "";
    if (secretWord.indexOf(letter) !== -1) {
      for (let i = 0; i < secretWord.length; i++) {
        if (secretWord[i] === letter) {
          word.children[i].textContent = letter;
        }
      }
    } else {
      imgNumber++;
      if (imgNumber > 5) imgNumber = 5;
      img.src = `./img/${imgNumber}.png`;
      if (imgNumber === 5) {
        endGame(`Вы проиграли 🤦‍♂️😒слово было : ${secretWord}!`);
        return;
      }
    }
    const victory = [...word.children].every(
      (span) => span.textContent.trim() !== "_"
    );
    if (victory) {
      endGame("УРА!!! Победа 🎈🎉");
    }
  }
  newGamebtn.addEventListener("click", startGame);
  startGame();
}
hangmanGame();