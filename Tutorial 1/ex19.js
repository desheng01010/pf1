const prompt = require('prompt-sync')();

let joAge= parseInt(prompt("Enter Jo's Age: "));
let joHeight= parseInt(prompt("Enter Jo's Height: "));
let joscore = (joAge*5) + joHeight

console.log(`Jo's Age and Height are: ${joAge} years old and ${joHeight}cm. His score is ${joscore.toFixed(2)}`)

let friendAge= parseInt(prompt("Enter Friend's Age: "));
let friendHeight= parseInt(prompt("Enter Friend's Height: "));
let friendscore = (friendAge*5) + friendHeight

console.log(`Jo's Friend Age and Height are: ${friendAge} years old and ${friendHeight}cm. His score is ${friendscore.toFixed(2)}`)

if(joscore>friendscore){
    console.log(`JO WINS!`)
} else if (joscore<friendscore){
    console.log(`FRIEND WINS!`)
} else{
    console.log(`DRAW!`)
}