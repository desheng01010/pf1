var arr = [
    [1, 5, 3],
    [4, 2, 9],
    [7, 8, 6]
];


for (var i = 0; i < arr.length; i++) {
   
    var maxInRow = arr[i][0]; 

    for (var j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > maxInRow) {
            maxInRow = arr[i][j];
        }
    }

    console.log("Largest number in row", i + 1, ":", maxInRow);
}
