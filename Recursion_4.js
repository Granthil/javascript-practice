// Write a recursive function isPrime that determines if a number is prime and returns true if it is.


function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {

            return false;
        }
    }
    return true;

}

console.log(isPrime(1)); //-> false
console.log(isPrime(2)); //-> true
console.log(isPrime(3)); //-> true
console.log(isPrime(4)); //-> false