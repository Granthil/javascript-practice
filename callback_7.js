// Construct a function intersection that takes in an array of arrays, compares the inner arrays, and returns a new array with elements found in all of them. BONUS: Use reduce!

function intersection(arrays) {
    return arrays.reduce((acc, curr) => {   
        return acc.filter(element => curr.includes(element));
    });

}

console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));

// should.log: [5, 15];