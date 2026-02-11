/*Create a function myIndexOf that takes an array and an element and console.logs the index of the element in the array, or -1 if it doesn't exist.
Assume the `ele` will be a primitive data type (no arrays or objects).
DO NOT USE THE BUILT-IN `indexOf` METHOD IN YOUR SOLUTION! */


function myIndexOf(array, ele){
    for(let i = 0; i < array.length; i++){
        if(array[i] === ele){
            console.log(i);
            return i;
        }

}
}   console.log(-1);    







myIndexOf([1, 2, 3, 4, 5], 5) //=> 4
myIndexOf(["a", "b", "c"], "a") //=> 0
myIndexOf(["a", "b", "c"], "d") //=> -1
