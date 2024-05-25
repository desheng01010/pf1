const prompt = require(`prompt-sync`)();

let PSI = Number.parseFloat(prompt("PSI:"));

if(PSI>=100){
    console.log(`Unhealthy`);
} else if (PSI>=50 && PSI<100){
    console.log(`Moderates`);
} else if (PSI>=0 && PSI<50){
    console.log(`Healthy`);
}  else{
    console.log(`Invalid Input!`);
}
