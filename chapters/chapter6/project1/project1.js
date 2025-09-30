"use strict";

let displaymessage = function (message) {
  document.querySelector(".message").textContent = message;
};

let displaybody = function (bc) {
  document.querySelector("body").style.backgroundColor = bc;
};
let displaynumber = function (number) {
  document.querySelector(".number").textContent = number;
};
let displayscore = function (score) {
  document.querySelector(".score").textContent = score;
};
let score = 20;
let secretNumber = Math.trunc(Math.random() * 30) + 1;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displaymessage("⛔ Enter a valid number");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayscore(score);
      displaymessage(guess > secretNumber ? "📈Too High" : "📉Too Low");
    } else {
      displaymessage("🥲You lost the game!");
      displayscore(0);
      displaybody("rgb(69, 4, 4)");
    }
  } else if (guess === secretNumber) {
    displaymessage("🎆 CORRECT GUESS");
    displaybody("green");
    displaynumber(secretNumber);
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 30) + 1;
  displaybody("#222");
  displaymessage("🤔 Start guessing...");
  displayscore(score);
  displaynumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
});
