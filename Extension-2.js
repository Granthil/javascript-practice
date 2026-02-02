//Create a function objectBuilder that takes in a number and returns an object whose keys are 0 up to number and the values are that same number multipled by 5.





function objectBuilder(count) {
    let result = {};
    for (let i = 0; i <= count; i++){
        result[i] = i * 5;
    }
    return result;
}



console.log(objectBuilder(4)); //=> { 0: 0, 1: 5, 2: 10, 3: 15, 4: 20, 5: 25, 6: 30, 7: 35, 8: 40 }
  
console.log(objectBuilder(0)); //=> { 0: 0 }