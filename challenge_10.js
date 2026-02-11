// Create a function unique that console.logs an array where all the duplicates of the input array have been removed; in other words, every element remaining is unique.


function unique(array) {
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!uniqueArray.includes(array[i])) {
            uniqueArray.push(array[i]);
        }
    } console.log(uniqueArray);
}

    

unique([1, 1, 2, 3, 3]) // => [1, 2, 3]
unique(["a", "a", "c", "aa", "b", "b"]) // => ["a", "c", "aa", "b"]