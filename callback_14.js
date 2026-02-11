// Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.

function countBy(array, callback) {
    let count = {};
    for (let i = 0; i < array.length; i++) {
        let key = callback(array[i]);
        if (count[key]) {
            count[key]++;
        } else {
            count[key] = 1;
        }
    }   
    return count;
        

}

console.log(countBy([1, 2, 3, 4, 5], function(num) {
if (num % 2 === 0) return 'even';
else return 'odd';
})); // should log: { odd: 3, even: 2 }