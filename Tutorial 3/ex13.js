function calculateCircleArea(radius) {
    const Pi = 3.142
    var area = Pi * radius * radius;
        return area;
}

// Testing the function with different radii
console.log("Area of circle with radius 5:", calculateCircleArea(5));
console.log("Area of circle with radius 7:", calculateCircleArea(7));
console.log("Area of circle with radius 10:", calculateCircleArea(10));