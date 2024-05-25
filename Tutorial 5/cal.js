function calculateSum() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    // Check if input is valid
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return; // Exit function if input is invalid
    }

    var sum = num1 + num2;
    alert("The sum is: " + sum);
}
