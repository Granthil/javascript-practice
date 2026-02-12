// Make sure that adminFactory objects have access to adminFunctionStore methods, without copying them over.


function adminFactory(name, score) {

    const admin = { 

        name: name,
        score: score,   
        // adminFunctionStore: adminFunctionStore
    };  
    return admin;
}   

const adminFunctionStore = {    
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}.`);
    },
    incrementScore: function() {
        this.score += 1;
    }
};

const admin1 = adminFactory('Alice', 10);   
Object.setPrototypeOf(admin1, adminFunctionStore);  

admin1.sayHello(); // Output: Hello, my name is Alice.  

admin1.incrementScore();

console.log(admin1.score); // Output: 11
const admin2 = adminFactory('Bob', 20);

Object.setPrototypeOf(admin2, adminFunctionStore);
admin2.sayHello(); // Output: Hello, my name is Bob.
admin2.incrementScore();
console.log(admin2.score); // Output: 21
    
