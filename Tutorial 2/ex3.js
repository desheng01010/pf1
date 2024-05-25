const prompt = require('prompt-sync')();

let y = 0;
do {
    y =prompt("Enter a Number :");
    if (y >= 1 && y <= 10){
        break;
    }
}while(true){
    console.log("The number you entered is ${y}")
}

