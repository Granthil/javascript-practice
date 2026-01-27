// Call Stack (Function Calling)

function one() {
    console.log("One");
    two();
}

function two() {
    console.log("Two");
}

one();

// When a function is called, it gets pushed onto the stack.