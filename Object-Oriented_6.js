// Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.

function personFromConstructor(name, age) {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function() {   
        console.log('hello');
    }   
    return new Person(name, age);

    

}

const mike = personFromConstructor('Mike', 30);


console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
mike.greet(); //-> Logs 'hello'