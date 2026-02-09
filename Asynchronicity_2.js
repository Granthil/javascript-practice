// Create a function delayedGreet that console logs welcome after 3 seconds.

function delayedGreet() {
    setTimeout(() => {
        console.log("welcome");
    }, 3000);

    
}
delayedGreet(); // should log (after 3 seconds): welcome