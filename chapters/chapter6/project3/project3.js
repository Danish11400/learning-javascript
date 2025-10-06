"use strict;";
let topLeftScore = document.querySelector(".score-top-left");
let bottomLeftScore = document.querySelector(".score-bottom-left");
let topRightScore = document.querySelector(".score-top-right");
let bottomRightScore = document.querySelector(".score-bottom-right");

topLeftScore.textContent = 0;
bottomLeftScore.textContent = 0;
topRightScore.textContent = 0;
bottomRightScore.textContent = 0;

let diceRolling = document.querySelector("#roll");
let diceScore = 0;
let currentScore = 0;

let player1Style = document.querySelector(".player-left");
player1Style.style.backgroundColor = "rgba(255, 255, 255, 0.63)";

let player2Style = document.querySelector(".player-right");
let activePlayer = 1;

function switchPlayer() {
  currentScore = 0;
  if (activePlayer === 1) {
    bottomLeftScore.textContent = 0;
    player1Style.style.backgroundColor = "rgba(255, 255, 255, 0.47)";
    player2Style.style.backgroundColor = "rgba(255, 255, 255, 0.68)";
    activePlayer = 2;
    //---> if dice===1 then if activeplayer 1 is playing then make currentscore make 0 and then  highlight player2 and then cahnge activeplayer =2 ,activeplayer is 2 now and bottom right score is 0 now
  } else {
    bottomRightScore.textContent = 0;
    player2Style.style.backgroundColor = "rgba(255, 255, 255, 0.47)";
    player1Style.style.backgroundColor = "rgba(255, 255, 255, 0.68)";
    activePlayer = 1; //---> if dice===1 then if activeplayer 2 is playing then make currentscore make 0 and then  highlight player1 and then cahnge activeplayer =1 ,activeplayer is 1  now and bottom right score is 0 now
  }
}

let totalScorePlayer1 = 0;
let totalScorePlayer2 = 0;

diceRolling.addEventListener("click", function () {
  diceScore = Math.trunc(Math.random() * 6) + 1;
  console.log(diceScore);

  document.querySelectorAll(".dice-images").forEach(function (hi) {
    hi.classList.add("hidden"); // hide it
  });

  // Show only the dice we rolled
  switch (diceScore) {
    case 1:
      document.querySelector(".one").classList.remove("hidden");
      break;
    case 2:
      document.querySelector(".two").classList.remove("hidden");
      break;
    case 3:
      document.querySelector(".three").classList.remove("hidden");
      break;
    case 4:
      document.querySelector(".four").classList.remove("hidden");
      break;
    case 5:
      document.querySelector(".five").classList.remove("hidden");
      break;
    case 6:
      document.querySelector(".six").classList.remove("hidden");
      break;
  }

  if (diceScore !== 1) {
    // ✅ opens diceScore check
    // Player keeps playing
    currentScore += diceScore;

    if (activePlayer === 1) {
      // ✅ opens Player 1 check
      bottomLeftScore.textContent = currentScore;

      if (totalScorePlayer1 + currentScore >= 100) {
        // ✅ opens Player 1 win check
        topLeftScore.textContent = "Player 1 wins🎆";

        setTimeout(resetGame, 2000);
        return;
      } // ✅ closes Player 1 win check
    } else {
      // ✅ opens Player 2 else for activePlayer
      bottomRightScore.textContent = currentScore;

      if (totalScorePlayer2 + currentScore >= 100) {
        // ✅ opens Player 2 win check
        topRightScore.textContent = "Player 2 wins🎆";

        setTimeout(resetGame, 2000);
        return;
      } // ✅ closes Player 2 win check
    } // ✅ closes activePlayer if-else
  } else {
    // ✅ opens diceScore === 1 case
    // 🎯 When dice = 1 ➤ reset current score and switch player
    switchPlayer();
  } // ✅ closes diceScore if-else
});
let holdMyScore = document.querySelector("#score-holder");
holdMyScore.addEventListener("click", function () {
  if (activePlayer === 1) {
    totalScorePlayer1 += currentScore;
    topLeftScore.textContent = totalScorePlayer1;
    if (totalScorePlayer1 >= 100) {
      topLeftScore.textContent = "Player 1 wins";
      setTimeout(resetGame, 2000);
      return;
    }

    player2Style.style.backgroundColor = "rgba(255, 255, 255, 0.68)";
    player1Style.style.backgroundColor = "rgba(255, 255, 255, 0.47)";
    activePlayer = 2;
    bottomLeftScore.textContent = 0;
    currentScore = 0;
  } else if (activePlayer === 2) {
    totalScorePlayer2 += currentScore;
    topRightScore.textContent = totalScorePlayer2;
    if (totalScorePlayer2 >= 100) {
      topRightScore.textContent = "player2 wins";
      setTimeout(resetGame, 2000); // settimeout means in which sec game do the function that we call aloong withit resetgame function
      return;
    }
    player2Style.style.backgroundColor = "rgba(255, 255, 255, 0.47)";
    player1Style.style.backgroundColor = "rgba(255, 255, 255, 0.63)";
    activePlayer = 1;
    bottomRightScore.textContent = 0;
    currentScore = 0;
  } else {
    currentScore = 0;
  }
});
let restart = document.querySelector("#reset");
restart.addEventListener("click", function () {
  // 1️⃣ Reset all scores
  topLeftScore.textContent = 0;
  bottomLeftScore.textContent = 0;
  topRightScore.textContent = 0;
  bottomRightScore.textContent = 0;

  // 2️⃣ Reset game variables
  currentScore = 0;
  totalScorePlayer1 = 0;
  totalScorePlayer2 = 0;
  activePlayer = 1;

  // 3️⃣ Hide all dice
  document.querySelectorAll(".dice-images").forEach(function (hi) {
    hi.classList.add("hidden");
  });

  // 4️⃣ Reset player backgrounds
  player1Style.style.backgroundColor = "rgba(255, 255, 255, 0.63)";
  player2Style.style.backgroundColor = "rgba(255, 255, 255, 0.47)";
});

/// rest game when someone wins function
function resetGame() {
  // Reset all scores
  topLeftScore.textContent = 0;
  bottomLeftScore.textContent = 0;
  topRightScore.textContent = 0;
  bottomRightScore.textContent = 0;

  // Reset variables
  currentScore = 0;
  totalScorePlayer1 = 0;
  totalScorePlayer2 = 0;
  activePlayer = 1;

  // Hide all dice
  document.querySelectorAll(".dice-images").forEach((dice) => {
    dice.classList.add("hidden");
  });

  // Reset player backgrounds
  player1Style.style.backgroundColor = "rgba(255, 255, 255, 0.63)";
  player2Style.style.backgroundColor = "rgba(255, 255, 255, 0.47)";
}
let clickmeforRules = document.querySelector(".rule");
clickmeforRules.addEventListener("click", function () {
  document.querySelector(".rule-book").classList.remove("hide-pop-up");
});
let clickmeforExitRules = document.querySelector(".exit-btn");
clickmeforExitRules.addEventListener("click", function () {
  document.querySelector(".rule-book").classList.add("hide-pop-up");
});
