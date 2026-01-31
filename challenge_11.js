// Create a function longestWord that that retuns the longest word of a sentence.
//If there are ties, the function should return the later word

function longestWord(sentence) {
    let words = sentence.split(' ');
    let longest = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= longest.length) {
            longest = words[i];
        }
    }
    return longest;
}



console.log(longestWord('my JavaScript is exceptional')); // => 'exceptional'
console.log(longestWord('hate having hungry hippos')); // => 'hippos'
console.log(longestWord('JavaScript')); // => 'JavaScript'
console.log(longestWord('')); // => ''