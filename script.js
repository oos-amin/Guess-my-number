"use strict";

// Variables
const check = document.querySelector(".check");
const message = document.querySelector(".message");
const numberBox = document.querySelector(".secret-number");
const scoreResult = document.querySelector(".score");
const again = document.querySelector(".again");
const body = document.querySelector("body");
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Functions
const displayMessage = function (data) {
  message.textContent = data;
};

// Check Button Handler
check.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no number
  if (!guess) {
    displayMessage("⛔ No number");

    // When the guess is Correct
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct number");
    numberBox.textContent = secretNumber;
    numberBox.style.width = "30rem";
    check.classList.add("hidden");
    body.style.backgroundColor = "#00983fff";

    // Only shows the greater number for highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📈 Too Low");
      score--;
      scoreResult.textContent = score;
    } else {
      displayMessage("💀 You lost");
      check.classList.add("hidden");
      numberBox.textContent = secretNumber;
      numberBox.style.width = "30rem";
      body.style.backgroundColor = "#a82727ff";
      score = 0;
      scoreResult.textContent = score;
    }
  }
});

// Again Button Handler
again.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  check.classList.remove("hidden");
  scoreResult.textContent = score;
  numberBox.textContent = "?";
  numberBox.style.width = "15rem";
  body.style.backgroundColor = "#222";
  document.querySelector(".guess").value = "";
  displayMessage("Start guessing...");
});

console.log(secretNumber);
