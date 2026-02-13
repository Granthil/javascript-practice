// Write a recursive function sum that calculates the sum of an array of integers.

function sum(array) {
    if (array.length === 0) {
        return 0;
    }

    return array[0] + sum(array.slice(1));  


}

 console.log(sum([1,1,1])); // -> returns 3
 console.log(sum([1,2,3,4,5,6])); // -> returns 21