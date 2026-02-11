// Create a function secretCipher that takes in an string(sentence) and an object(cipher). Return a string where every character is replaced with its cooresponding value in the cipher. If the character doesn't exist in the cipher, use the original character.

function secretCipher(sentence, cipher){
    let result = "";
    for (let i = 0; i < sentence.length; i++){
        let char = sentence[i];
        if (cipher.hasOwnProperty(char)){
            result += cipher[char];
        } else {
            result += char;
        }
    }   
    return result;
}



console.log(secretCipher("lqq me on flcebzzk" , { l : "a", q : "d", z: "o"})); //=> "add me on facebook"
console.log(secretCipher("where are you???" , { v : "l", '?' : "!"})) //=> "where are you!!!"
console.log(secretCipher("twmce" , { m : "n", t : "d", w : "a"})); //=> "dance"