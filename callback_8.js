// Construct a function union that takes in an array of arrays, compares the inner arrays, and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first array. BONUS: Use reduce!




function union(arrays) {

    return arrays.reduce((accumulator, currentArray) => {
        currentArray.forEach(element => {
            if (!accumulator.includes(element)) {
                accumulator.push(element);
            }
        }); 
        return accumulator;
    }, []);
}

console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
// should log: [5, 10, 15, 88, 1, 7, 100]