// Write a recursive function pathFinder that takes an object and array as inputs and returns the value with the given path.

function pathFinder(obj, arr) {
    if (arr.length === 0) {
        return obj;
    }
    const [first, ...rest] = arr;
    if (obj[first] === undefined) {
        return undefined;
    }
    return pathFinder(obj[first], rest);
                            

}

const obj = { first: { second: { third: "finish" } }, second: { third: "wrong" } };
const arr = ["first", "second", "third"];
console.log(pathFinder(obj, arr));   //-> "finish"
