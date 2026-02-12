// Then make sure the value of the 'type' field for adminFactory objects is 'Admin' instead of 'User'.

function adminFactory(name, score) {
    return {    
        type: 'Admin',
        name: name,
        score: score
    };  
}

const admin1 = adminFactory('Alice', 100);
console.log(admin1); // Output: { type: 'Admin', name: 'Alice', score: 100 }
const admin2 = adminFactory('Bob', 90); 
console.log(admin2); // Output: { type: 'Admin', name: 'Bob', score: 90 }       
const admin3 = adminFactory('Charlie', 80);
console.log(admin3); // Output: { type: 'Admin', name: 'Charlie', score: 80 }

                    