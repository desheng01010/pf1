function checkAge(age) {
    if (age < 13) {
        return "Child";
    } else if (age >= 13 && age <= 18) {
        return "Teen";
    } else {
        return "Adult";
    }
}

// Testing the function with different ages
console.log("Age category for 8 years old:", checkAge(8));
console.log("Age category for 15 years old:", checkAge(15));
console.log("Age category for 30 years old:", checkAge(30));
