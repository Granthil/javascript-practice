// Write a recursive function palindrome that accepts a string as an input and returns true if that string is a palindrome (the string is the same forward and backwards). The input string may have punctuation and symbols, but that should not affect whether the string is a palindrome.



function palindrome(string) {   
    const cleanedString = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (cleanedString.length <= 1) {
        return true;
    }
    if (cleanedString[0] === cleanedString[cleanedString.length - 1]) {
        return palindrome(cleanedString.slice(1, -1));
    }
    return false;   


}

console.log(palindrome("Anne, I vote more cars race Rome-to-Vienna")); //-> true
console.log(palindrome("llama mall")); //-> true
console.log(palindrome("jmoney")); //-> false