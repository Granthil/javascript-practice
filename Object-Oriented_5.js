// Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.

function PersonConstructor() {
    this.greet = function() {   
        console.log('hello');
    }   
        


}


const simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello'
