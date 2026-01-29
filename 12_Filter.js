// filter returns elements that match a condition

const arr = [10, 15, 20, 25];

function isGreaterThan15(x){
    return x > 15;
}       

const output = arr.filter(isGreaterThan15);
console.log(output); // [20, 25]    



// Select elements greater than 15