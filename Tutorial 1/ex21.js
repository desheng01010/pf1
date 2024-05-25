const prompt = require(`prompt-sync`)();

let x = Number.parseFloat(prompt("Dollars:"));
let y = Number.parseFloat(prompt("Cent:"));
let z = Number.parseFloat(prompt("Number of Muffins:"));

//Reject if z<=0
let Total_amount = (x+(y/100))*z
if (z>0){
    console.log(`Total Cost of ${z} muffins is SGD ${Total_amount.toFixed(2)}`)
} else {
    console.log("Please kindly keyin valid integer number")
}