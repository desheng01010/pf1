function mean(arr) {
    let sum = 0;
    if(arr.length ===0){
        return NaN;
    }
    for (var i=0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum/arr.length;
}

let arr = [1,2,2];
console.log(mean(arr));