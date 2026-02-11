// Hoisting

console.log(a);
var a = 10;

// output = undefined


// var works before declaration (prints undefined), but let, const gives an error because it can’t be used before it’s declared.