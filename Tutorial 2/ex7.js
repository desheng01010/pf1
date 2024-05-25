const prompt = require('prompt-sync')();

// Infinite loop
for (;;) {
    const userInput = prompt("Enter a word (or 'exit' to quit): ");

    // Check if the user entered 'exit'
    if (userInput.toLowerCase() === 'exit') {
        console.log("Exiting the loop...");
        break; // Exit the loop
    }

    // Do something with the user input (not specified in the prompt)
    console.log("You entered:", userInput);
}

console.log("Loop exited successfully.");
