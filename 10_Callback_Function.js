// call back function 


function x(y){
    console.log("X");
    y();
}

x(function y(){
    console.log("Y")
});