//Create an adminFactory function that creates an object with all the same data fields (and default values) as objects of the userFactory class, but without copying each data field individually

function adminFactory(name, score) {
  const user = userFactory(name, score);
  user.role = "admin";
  return user;
}
   
function userFactory(name, score) {
  return {  
    name: name,
    score: score,
    role: "user"
  };
}   
const admin = adminFactory("Alice", 100);   
console.log(admin); // Output: { name: 'Alice', score: 100, role: 'admin' } 


