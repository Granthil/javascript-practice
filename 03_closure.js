// Inner function should remember outer variable.

function outer(){
    let count = 0;
    function Inner(){
        count++;
        console.log(count);
    }
    return Inner;
}

const counter = outer();
counter();
counter();

// Closure = function + its lexical scope