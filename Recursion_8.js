// There are n stairs. A person standing at the bottom wants to reach the top. The person can climb either 1 or 2 stairs at a time. Write a function countWaysToReachNthStair to count the number of ways the person can reach the top (order does matter). See test cases for examples.

function countWaysToReachNthStair(n) {
    if (n === 0) {

        return 1; 
    } else if (n < 0) {
        return 0; 
    } else {
        return countWaysToReachNthStair(n - 1) + countWaysToReachNthStair(n - 2);
    }   



}

console.log(countWaysToReachNthStair(1)) //-> 1 (only one way to climb 1 stair)
console.log(countWaysToReachNthStair(2)) //-> 2 ((1, 1), (2))
console.log(countWaysToReachNthStair(4)) //-> 5 ((1, 1, 1, 1), (1, 1, 2), (2, 1, 1), (2, 2))