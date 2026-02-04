// Construct a function multiMap that will accept two arrays: an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.





function multiMap(arrVals, arrCallbacks) {
    let result = {};

    for (let i = 0; i < arrVals.length; i++) {
        let key = arrVals[i];
        result[key] = [];   
        for (let j = 0; j <  arrCallbacks.length; j++) {
            let callback = arrCallbacks[j];
            result[key].push(callback(key));
        }
    }
    return result;


}

console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }