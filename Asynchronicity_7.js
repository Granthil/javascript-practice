/* Write a function delayCounter that accepts a number (called 'target') as the first argument and a number of milliseconds (called 'wait') as the second argument, and returns a function.

When the returned function is invoked, it should log to the console all of the numbers between 1 and the target number, spaced apart by 'wait' milliseconds.*/

function delayCounter(target, wait) {
  return function() {
    let count = 1;
    const intervalId = setInterval(() => {
      console.log(count);
      count++;
      if (count > target) {
        clearInterval(intervalId);
      }
    }, wait);
  };
}

const countLogger = delayCounter(3, 1000)
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3
