'use strict'

//Variables 
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Check Button 
document.querySelector(".check").addEventListener('click', function () {
    const guess = Number(document.querySelector(".guess").value);

    // if there is no number
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No number";
    } else {

        // if the guess is Correct
        if (guess === secretNumber) {
            document.querySelector(".message").textContent = "🎉 Correct number";
            document.querySelector(".secret-number").textContent = secretNumber;
            document.querySelector(".secret-number").style.width = "30rem";
            document.querySelector("body").style.backgroundColor = "green";

            if (score > highScore) {
                highScore = score;
                document.querySelector(".highscore").textContent = highScore;
            }
        }

        // if the guess is too HIGH
        if (guess > secretNumber) {
            if (score > 0) {
                document.querySelector(".message").textContent = "📈 Too high";
                score--;
                document.querySelector(".score").textContent = score;
            }
        }

        // if the guess is too LOW
        if (guess < secretNumber) {
            if (score > 0) {
                document.querySelector(".message").textContent = "📉 Too low";
                score--;
                document.querySelector(".score").textContent = score;
            }
        }
    }


});

// Again Button
document.querySelector(".again").addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1
    score = 20;
    document.querySelector(".score").textContent = score;

    document.querySelector(".secret-number").textContent = "?"; document.querySelector(".secret-number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".guess").value = "";
    document.querySelector(".message").textContent = "Start guessing..."

})