// Create a function helloGoodbye that console logs hello right away, and good bye after 2 second

function helloGoodbye() {
    console.log("hello");
    setTimeout(() => {
        console.log("good bye");
    },3000);
        
}
helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye