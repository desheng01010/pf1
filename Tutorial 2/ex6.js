const prompt = require('prompt-sync')();

const targetNumber = 7; 
let guess; 

do {
    guess = parseInt(prompt("Guess the number (between 1 and 10):"));

    if (guess === targetNumber) {
        console.log("Congratulations! You guessed the correct number:", targetNumber);
    } else {
        console.log("Incorrect guess. Try again!");
    }
} while (guess !== targetNumber);
