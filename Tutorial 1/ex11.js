const prompt = require('prompt-sync')();

let radius= parseFloat(prompt("Enter Radius:"));
const pi = 3.1417;
const area = pi * radius *radius;

console.log(`The area of the circle is ${area.toFixed(2)}`);
