// Map array double values,triple values , Binnary values

const arr = [1, 2, 3, 4, 5];

// double values

function double(x){
    return x * 2;
}

const output = arr.map(double);
console.log(output); // [2, 4, 6, 8, 10]

// triple values        

function triple(x){
    return x * 3;
}
const output2 = arr.map(triple);
console.log(output2); // [3, 6, 9, 12, 15]

// Binary values        

function binary(x){
    return x.toString(2);
}               

const output3 = arr.map(binary);
console.log(output3); // [1, 10, 11, 100, 101]