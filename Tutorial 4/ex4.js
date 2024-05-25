let array2D = [
    [2, 6, 5],
    [7, 8, 6],
    [1, 11, 0]
];

var sum = 0;
for (var i = 0; i < array2D.length; i++) {
    for (var j = 0; j < array2D[i].length; j++) {
        sum += array2D[i][j];
    }
}

console.log("Sum of all elements in the 2D array:", sum); //46
