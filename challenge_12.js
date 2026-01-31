// Create a function disemvowel that takes in a string and returns a string with all vowels removed.

function disemvowel(string) {
    let result = '';
    let vowels = 'aeiouAEIOU';
  
    for(let i = 0; i < string.length; i++) 
    {
        if(vowels.indexOf(string[i]) === -1) {
            result += string[i];
        }
    }
    return result;
}


console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'