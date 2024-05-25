let matrix =[
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log("Elements on the main diagonal:");
for (var i = 0; i < matrix.length; i++) {
    console.log(matrix[i][i]);
}

console.log("Elements on the secondary diagonal:");
for (var i = 0; i < matrix.length; i++) {
    console.log(matrix[i][matrix.length - 1 - i]);
}