// Function Scope

function test() {
    var x = 5;
    let y = 10;
    console.log(x, y);
}

test();

// Variables declared inside a function are not accessible outside the function, regardless of whether var, let, or const is used.