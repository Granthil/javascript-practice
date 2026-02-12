// Create a class DeveloperClass that creates objects by extending the PersonClass class. In addition to having a name property and greet method, DeveloperClass should have an introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.

class PersonClass {
    constructor(name) { 
        this.name = name;
    }   

    greet() {   
        console.log('hello');
    }
}

class DeveloperClass extends PersonClass {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    introduce() {
        console.log(`Hello World, my name is ${this.name}`);
    }   
}   
const dan = new DeveloperClass('Dan');
dan.introduce(); // -> Logs 'Hello World, my name is Dan'   

