// Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.

function flattenRecursively(arr) {
    let flattened = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened = flattened.concat(flattenRecursively(arr[i]));
        }   

        else {
            flattened.push(arr[i]);
        }
    }
    return flattened;   
    

}

console.log(flattenRecursively([1, [2, 3, [4]]])); //-> [1, 2, 3, 4]
console.log(flattenRecursively([1, {}, [3, [[4]]]])); //-> [1, {}, 3, 4]