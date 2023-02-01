'use strict';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.between').textContent);

// document.querySelector('.between').textContent = 'hello';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log('secrt num' + secretNumber);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // console.log('⚠️ No input is given!');
    document.querySelector('.message').textContent = '⚠️ No input is given!';
  } else if (guess > secretNumber) {
    score--;
    document.querySelector('.message').textContent = '⏬ Number is lower!';
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    score--;

    document.querySelector('.message').textContent = '⏫ Number is Higher!';
    document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '💯 Number is correct!';
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'start guessing...';
  score = 20;
  document.querySelector('.score').textContent = score;
});
