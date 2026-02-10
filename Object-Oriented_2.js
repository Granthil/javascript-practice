// Inside personStore object, create a property greet where the value is a function that logs "hello".

const personStore = {
    greet: function() { 
        console.log('hello');
    }


};

personStore.greet(); // -> Logs 'hello'