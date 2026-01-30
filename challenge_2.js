//Create a function buildSentence that takes three words (strings) and adds them together and console.
// logs the whole sentence (string) complete with capitalization and punctuation.

function buildSentence(word1, word2, word3) {
    let sentence  = word1 + " " + word2 + " " + word3;
    sentence = sentence[0].toUpperCase() + sentence.slice(1) + ".";
    console.log(sentence);
}

buildSentence("coding", "is", "awesome");  // Coding is awesome.
buildSentence("we're", "number", "1");    // We're number 1.    