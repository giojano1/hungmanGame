const catName = document.getElementById("catName");
const cat2 = localStorage.getItem("cat");
const url = "../assets/data/data.json";
const wordCont = document.querySelector(".word_container");
const keys = document.querySelectorAll(".key");
const lifeBar = document.querySelector(".bar");
const winWindow = document.querySelector(".win_cont");
const loseWindow = document.querySelector(".lose_cont");
const pauseWindow = document.querySelector(".pause_cont");
const overlay = document.querySelector(".overlay");
const restartBtn = document.getElementById("restart");
const restartBtn2 = document.getElementById("restart2");
const goCat = document.getElementById("goCat");
const goCat2 = document.getElementById("goCat2");
const goCat3 = document.getElementById("goCat3");
const quit = document.getElementById("quit");
const quit2 = document.getElementById("quit2");
const quit3 = document.getElementById("quit3");
const menuBtn = document.getElementById("menuBtn");
const continueBtn = document.getElementById("continue");
let startWidth = 100;
catName.textContent = cat2;
let chosenWord = "";
startGame();

// start game
function startGame() {
  const randomNum = Math.floor(Math.random() * 30 + 1);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let path = data.categories[cat2];
      let chosenWord = path[randomNum];
      let wordCount = chosenWord.name.length;
      genWordBox(chosenWord.name);
      gamePlay(chosenWord);
    });
}
// generate empty boxes
function genWordBox(word) {
  for (let char of word) {
    let box = document.createElement("div");
    box.classList.add("word");
    if (char === " ") {
      box.classList.add("space");
    }
    wordCont.appendChild(box);
  }
}
//game
function gamePlay(chosenWord) {
  keys.forEach((key) => {
    key.value = key.textContent.toUpperCase();
    let word = chosenWord.name.toUpperCase();
    const box = document.querySelectorAll(".word");
    let counter = 0;
    key.addEventListener("click", () => {
      key.disabled = true;
      let indexes = [];
      let index = word.indexOf(key.value);
      while (index !== -1) {
        indexes.push(index);
        index = word.indexOf(key.value, index + 1);
      }
      if (indexes.length > 0) {
        indexes.forEach((index) => {
          box[index].textContent = key.value;
          box[index].classList.add("guessedWord");
        });
      } else {
        gameLife();
      }
      if (Array.from(box).every((element) => element.textContent !== "")) {
        setTimeout(win, 300);
      }
    });
  });
}
// game life bar
function gameLife() {
  startWidth -= 12.5;
  lifeBar.style.width = `${startWidth}%`;
  if (startWidth === 0) {
    setTimeout(lose, 300);
  }
}
// lose
function lose() {
  loseWindow.classList.add("show");
  overlay.classList.add("show");
}
// win
function win() {
  winWindow.classList.add("show");
  overlay.classList.add("show");
}
// restart
function restart() {
  window.location.reload();
}
// go to categories
function goToCat() {
  window.location.href = "../pages/categories.html";
}
// go to menu
function quitGame() {
  window.location.href = "../index.html";
}
// pause game
function pauseGame() {
  pauseWindow.classList.add("show");
  overlay.classList.add("show");
}
// button event listeners
restartBtn.addEventListener("click", restart);
restartBtn2.addEventListener("click", restart);
goCat.addEventListener("click", goToCat);
goCat2.addEventListener("click", goToCat);
goCat3.addEventListener("click", goToCat);
quit.addEventListener("click", quitGame);
quit2.addEventListener("click", quitGame);
quit3.addEventListener("click", quitGame);
menuBtn.addEventListener("click", pauseGame);
continueBtn.addEventListener("click", () => {
  pauseWindow.classList.remove("show");
  overlay.classList.remove("show");
});
