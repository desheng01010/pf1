const prompt = require('prompt-sync')();

let principal = parseFloat(prompt("Enter the principal amount: "));
const rate = parseFloat(prompt("Enter the interest rate: "));
let years = 0;
let total = principal;

while (total < principal * 2) {
    years++;
    total += principal * (rate / 100);
}

console.log(`It takes ${years} years for the total amount to double.`);