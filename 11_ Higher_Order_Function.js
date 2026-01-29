// Higher Order Function

function Order(name) {
    return "Hello " + name;
}

function user(callback) {
    console.log(callback("Raj"));
}

user(Order);