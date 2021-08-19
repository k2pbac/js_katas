let prompt = require("prompt-sync")();

let answer;
let wrongAnswers = [];

let randomNumber = Math.floor(Math.random() * 100);
let count = 0;

while (answer !== randomNumber) {
  answer = prompt("Guess a number between 1 and 100 inclusive: ");

  if (answer.match(/[1-9]|[1-9][0-9]/) && parseInt(answer) <= 100) {
    answer = parseInt(answer);
    count++;
    if (wrongAnswers.includes(answer)) {
      console.log("Already Guessed!");
    } else if (answer !== randomNumber && answer - 30 > randomNumber) {
      console.log("Way too high!");
    } else if (answer !== randomNumber && answer - 10 > randomNumber) {
      console.log("Still too high, but almost!");
    } else if (answer !== randomNumber && answer > randomNumber) {
      console.log("Very close now! A little lower.");
    } else if (answer !== randomNumber && answer + 30 < randomNumber) {
      console.log("Way too low!");
    } else if (answer !== randomNumber && answer + 10 < randomNumber) {
      console.log("Still too low, but almost!");
    } else if (answer !== randomNumber && answer < randomNumber) {
      console.log("Very close now! A little higher.");
    } else if (answer === randomNumber && count > 1) {
      console.log(
        "You got it, great work! It only took " + count + " attempts"
      );
    } else if (answer === randomNumber && count === 1) {
      console.log("You got it, great work! It only took " + count + " attempt");
    }
    wrongAnswers.push(answer);
  } else {
    console.log("Please enter a valid number between 1 and 100!");
  }
}
