const prompt = require('prompt-sync')();

let Birthyear = prompt("Enter Your Birth Year (YYYY):")

let currentyear =prompt("Enter the current Year (YYYY):")

let age = currentyear - Birthyear

console.log(`Your age is: ${age}`)