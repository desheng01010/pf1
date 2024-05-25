function celsiusToFahrenheit(celsius) {

    // Convert Celsius to Fahrenheit 
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

console.log("Fahrenheit temperature for 0°C:", celsiusToFahrenheit(0));//32
console.log("Fahrenheit temperature for 20°C:", celsiusToFahrenheit(20));//68
console.log("Fahrenheit temperature for -10°C:", celsiusToFahrenheit(-10));//14