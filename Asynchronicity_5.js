// Create a function limitedRepeat that console logs hi for now every second, but only for 5 seconds. Research how to use clearInterval if you are not sure how to do this.

function limitedRepeat() {
    const intervalId = setInterval(() => {
        console.log("hi for now");
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalId);
    }, 5000);   


}

limitedRepeat(); // should log (every second, for 5 seconds): hi for now