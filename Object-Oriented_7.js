// Without editing the code you've already written, add an introduce method to the PersonConstructor function that logs "Hi, my name is [name]".

function personFromConstructor(name, age) {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }   

    Person.prototype.greet = function() {   
        console.log('hello');
    }
    Person.prototype.introduce = function() {
        console.log(`Hi, my name is ${this.name}`);

    }
    return new Person(name);
}       
const mike = personFromConstructor('Mike');



mike.introduce(); // -> Logs 'Hi, my name is Mike'