// In challenge 3, you've created a function called map. In this challenge, you're going to rebuild the map function by creating a function called mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.

function mapWith(array, callback) {
    let result = [];
    forEach(array, function(element) {
        result.push(callback(element));
    }); 
    return result;

}


function forEach(array, callback) {
    for (let i = 0; i < array.length; i++) {    
        callback(array[i]);
    }       
}
function multiplyByTwo(num) {
    return num * 2;
}           

console.log(mapWith([1,2,3,4,5], multiplyByTwo)); //=> [2,4,6,8,10]

console.log(multiplyByTwo(1)); //=> 2
console.log(multiplyByTwo(2)); //=> 4       

