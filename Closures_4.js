// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.


function once(func) {
    let called = false;
    let result;
    return function(...args) {
        if (!called) {
            result = func(...args);
            called = true;
        }

        return result;
    }
    

}
  const addByTwo = num => num + 2;  

const onceFunc = once(addByTwo);

console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6