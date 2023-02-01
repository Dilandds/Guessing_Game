"use strict";

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.between').textContent);

// document.querySelector('.between').textContent = 'hello';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log("secrt num" + secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    // console.log('⚠️ No input is given!');
    document.querySelector(".message").textContent = "⚠️ No input is given!";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent =
        guess > secretNumber ? "⏬ Number is lower!" : "⏫ Number is Higher!";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You Lost!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess === secretNumber) {
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".message").textContent = "💥 Number is correct!";
    document.querySelector(".highscore").textContent = highscore;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = "👑";
    document.querySelector(".number").style.boarder = "12px solid red";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "start guessing...";
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
