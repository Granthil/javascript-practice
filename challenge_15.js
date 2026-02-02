// Create a function leastCommonMultiple that takes two numbers (integers) as input and returns the lowest number which is a multiple of both inputs.


function leastCommonMultiple(num1, num2) {
    let multiple = Math.max(num1, num2);
    while (true) {
        if (multiple % num1 === 0 && multiple % num2 === 0) {
            return multiple;
        }
        multiple++;
    }
}




console.log(leastCommonMultiple(2, 3)); //=> 6
console.log(leastCommonMultiple(6, 10)); //=> 30
console.log(leastCommonMultiple(24, 26)); //=> 312
