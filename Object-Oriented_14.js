// Created a method called sharePublicMessage that logs 'Welcome users!' and will be available to adminFactory objects, but not userFactory objects. Do not add this method directly in the adminFactory function

const userFunctionStore = {
    sayType: function() {
        console.log("I am a " + this.type);
    }
};  

function userFactory(name, score) { 
    let user = Object.create(userFunctionStore);    
    user.type = "User";
    user.name = name;   
    user.score = score;
    return user;
}

const adminFunctionStore = Object.create(userFunctionStore);
adminFunctionStore.sharePublicMessage = function() {
    console.log("Welcome users!");
};
function adminFactory(name, score) {
    let admin = Object.create(adminFunctionStore);    
    admin.type = "Admin";
    admin.name = name;
    admin.score = score;
    return admin;
}

const adminFromFactory = adminFactory("Eva", 5);

adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"