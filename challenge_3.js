//Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that word.
//Hint: Remember that each character/letter in a string has an index position that you can access with brackets: []

function lastLetter(word) {
  console.log(word[word.length  -1]);
}

lastLetter("hello")      //=> "o"
lastLetter("goodbye!")   //=> "!"
lastLetter("ZeltoiD")   //=> "D"