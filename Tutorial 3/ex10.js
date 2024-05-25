function calculator(operand1, operand2, operator) {
    // Use a switch statement to perform the operation based on the operator
    switch (operator) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        case '/':
            // Check if operand2 is not zero to avoid division by zero
            if (operand2 !== 0) {
                return operand1 / operand2;
            } else {
                return "Error: Division by zero";
            }
        default:
            return "Error: Invalid operator";
    }
}

// Testing the function with different operands and operators
console.log("5 + 3 =", calculator(5, 3, '+'));
console.log("10 - 4 =", calculator(10, 4, '-'));
console.log("6 * 2 =", calculator(6, 2, '*'));
console.log("15 / 3 =", calculator(15, 3, '/'));
console.log("Division by zero:", calculator(10, 0, '/'));
console.log("Invalid operator:", calculator(5, 3, '%'));
