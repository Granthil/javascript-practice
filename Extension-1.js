// Create a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. The order of the elements in the array does not matter, but repeated elements should be grouped.

function arrayBuilder(count) {

        let result = [];
        for (let key in count) {
            for (let i = 0; i < count[key]; i++) {
                result.push(key);
            
            }
        }
        return result;
}



console.log(arrayBuilder({'cats': 2, 'dogs': 1})); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []