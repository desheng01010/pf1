function printTable(number) {
    // Loop from 1 to 10 to generate and print the multiplication table
    for (var i = 1; i <= 10; i++) {
        console.log(number + " * " + i + " = " + (number * i));
    }
}

var inputNumber = 7; // Example number
console.log("Multiplication table for", inputNumber, ":");
printTable(inputNumber);
