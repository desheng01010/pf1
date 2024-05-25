function calculateInterest(principal, rate, time) {
    // Calculate the interest using the formula
    var interest = (principal * rate * time) / 100;
    return interest;
}

var principal = 5000; // Example principal amount
var rate = 6.5; // Example rate of interest (in percentage)
var time = 5; // Example time period (in years)

var interest = calculateInterest(principal, rate, time);
console.log("Simple interest for principal SGD 5000, rate 6.5%, and time 5 years:", interest);
