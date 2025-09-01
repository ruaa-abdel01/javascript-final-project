let correctNumber = 7;
let guess = prompt("Guess a number between 1 and 10");

while (parseInt(guess) !== correctNumber) {
    guess = prompt("Wrong guess! Try again. Guess a number between 1 and 10");
}

alert("Congratulations! You've guessed the correct number: " + correctNumber);
console.log("Game Over! The correct number was: " + correctNumber);
