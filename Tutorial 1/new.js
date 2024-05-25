const prompt = require('prompt-sync')();

let age = parseInt(prompt("Enter your age:"));
let rest_hb = parseInt(prompt("Enter your resting heart rate:"));

let max_hb = 220 - age; 
let rev_hb = max_hb - rest_hb; 
let lowrange_hb = rev_hb * 0.3 + rest_hb; 
let highrange_hb = rev_hb * 0.7 + rest_hb; 

console.log(`The range of your heart rate for low intensity training to high intensity training is from ${lowrange_hb} to ${highrange_hb} beats per minute`);
