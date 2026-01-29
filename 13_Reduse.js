// Rreduce converts array into single value


const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((a, b) => a + b);

console.log(sum);

//Combine to single value

// Max value from array 

function getMax(numbers){
    let max = 0;
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }
    return max;
}

console.log(getMax(numbers));

// Get maximum value
