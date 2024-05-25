/*let score=155
if(score>=90 && score<=100){
    console.log(`Your Grade is A`);
} else if (score>=80 && score<=89){
    console.log(`Your Grade is B`);
} else if (score>=70 && score<=79){
    console.log(`Your Grade is C`);
} else if (score>=60 && score<=69){
    console.log(`Your Grade is D`);
} else if(score<=60 && score == 0){
    console.log(`You Failed`)
} else{
    console.log(`Invalid Score!`)
}
console.log(`done`)*/


//for switch method
const prompt = require('prompt-sync')();
let score= parseInt(prompt("Enter Score"));

console.log(score)

switch(true){
    case score>=90 && score<=100:
    grade = "A";
    break;

    case score>=80 && score<=89:
        grade = "B";
        break;

    case score>=70 && score<=79:
        garde = "C"
        break;

    case score>=60 && score<=69:
        grade = "D"

    case score<=60 && score == 0:
        grade = "F"

    default:
        grade = "INVALID SCORE!"
}
console.log(`Score ${score} is equivalent to Grade ${grade}`)