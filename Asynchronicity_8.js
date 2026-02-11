// Write a function, promised, that takes in a value. This function will return a promise that will resolve after 2 seconds.

// Hint: take a look at the Promise object docs on MDN.

function promised (val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(val);
        }, 2000);
    });

}

const createPromise = promised('wait for it...');
createPromise.then((val) => console.log(val)); 
// will log "wait for it..." to the console after 2 seconds
