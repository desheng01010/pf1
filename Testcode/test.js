function sumPositiveNumbers(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] > 0) {
            sum += n[i];
        }
    }
    return sum;
}

const numbers = [-1, 2, -3, 4, -5, 6];
console.log(sumPositiveNumbers(numbers));