function findLargest(num1, num2) {

    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log("The largest number between 5 and 8 is:", findLargest(5, 8));
console.log("The largest number between 10 and 3 is:", findLargest(10, 3));
console.log("The largest number between -2 and 0 is:", findLargest(-2, 0));
