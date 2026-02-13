// Given a collection of distinct integers, write a function getPermutations to return all possible permutations.

function getPermutations(arr) {
    if (arr.length === 0) {

        return [[]];
    }

    const firstElement = arr[0];
    const rest = arr.slice(1);  
    const permutationsWithoutFirst = getPermutations(rest);
    const allPermutations = [];
    for (const permutation of permutationsWithoutFirst) {
        for (let i = 0; i <= permutation.length; i++) {
            const newPermutation = [...permutation.slice(0, i), firstElement, ...permutation.slice(i)]; 
            allPermutations.push(newPermutation);   

        }
    }   
    return allPermutations;
            

}

console.log(getPermutations([1, 2])) //-> [[1, 2], [2, 1]]
console.log(getPermutations([1, 2, 3])) //-> [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]