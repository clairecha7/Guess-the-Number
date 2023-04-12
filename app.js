const randomNumber = Math.floor(Math.random() * 100 + 1);
let counter = 5;

const guessInput = document.querySelector("#guess-number");
const guessButton = document.querySelector("#guess-button");
const tryButton = document.querySelector("#try-again");
const result = document.querySelector("#result");
const attempt = document.querySelector("#attempt");
const title = document.querySelector("h1");
let minNumber = 1;
let maxNumber = 100;

tryButton.addEventListener("click", function () {
  location.reload();
});

guessButton.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  if (guess === randomNumber) {
    result.textContent = "Congratulations! Your guess is correct!";
    attempt.textContent = `You got the correct answer in your ${
      5 - counter
    }th attempt.`;
  } else if (counter > 0) {
    if (guess > randomNumber) {
      result.textContent = "Sorry your number is too high. Guess again";
      attempt.textContent = `You have ${counter - 1} attempts left.`;
      maxNumber = guess;
      title.textContent = `Guess a number between ${minNumber} and ${maxNumber}`;
    } else {
      result.textContent = "Sorry your number is too low. Guess again";
      attempt.textContent = `You have ${counter - 1} attempts left.`;
      minNumber = guess;
      title.textContent = `Guess a number between ${minNumber} and ${maxNumber}`;
    }
    counter--;
  } else {
    result.textContent = `The correct number was ${randomNumber}`;
    attempt.textContent = "You don't have any attempts left.";
    guessButton.disabled = true;
  }
});
