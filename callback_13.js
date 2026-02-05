// Create a function prioritize that accepts an array and a callback. The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

function prioritize(array, callback) {
    let trueArray = [];
    let falseArray = [];    
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            trueArray.push(array[i]);
        } else {
            falseArray.push(array[i]);
        }
    }
    return trueArray.concat(falseArray);


}

    
const startsWithS = function(str) { return str[0] === 's' || str[0] === 'S'; };
console.log(prioritize(['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'], startsWithS)); // should log:
['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']