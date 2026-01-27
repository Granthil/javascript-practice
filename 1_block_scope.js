// Check which variables are accessible outside the block.

{
 var a = 10;
 let b = 20;
 const c = 30;

}

console.log(a);


//var → function scope
// let, const → block scope