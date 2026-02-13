// Write a recursive function findInOrderedSet that determines if a number is in an ordered array. Assume the array is sorted. BONUS: Write the function in such a way that fully iterating through the array to check isn't necessary.

function findInOrderedSet(arr, target) {
    if (arr.length === 0) {
        return false;
    }
    const midIndex = Math.floor(arr.length / 2);
    if (arr[midIndex] === target) { 
        return true;
    } else if (arr[midIndex] > target) {
        return findInOrderedSet(arr.slice(0, midIndex), target);
    } else {
        return findInOrderedSet(arr.slice(midIndex + 1), target);
    }   

    

}

const nums = [1, 4, 6, 7, 9, 17, 45];
console.log(findInOrderedSet(nums, 4));  //-> true
console.log(findInOrderedSet(nums, 2));  //-> false