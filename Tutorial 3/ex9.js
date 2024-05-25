function isOddOrEven(number) {
    // Check if the number is odd or even
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Testing the function with different numbers
console.log("Number 5 is:", isOddOrEven(5));
console.log("Number 10 is:", isOddOrEven(10));
console.log("Number 33 is:", isOddOrEven(33));
