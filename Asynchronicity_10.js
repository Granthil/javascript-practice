/* Write a function called debounce that accepts a function and returns a new function that only allows invocation of the given function after interval milliseconds have passed since the last time the returned function ran.

Additional calls to the returned function within the interval time should not be invoked or queued, but the timer should still get reset.

For examples of debouncing, check out https://css-tricks.com/debouncing-throttling-explained-examples/ */

function debounce(callback, interval, immediate = true) {
  let timeoutId;

  return function (...args) {
    const callNow = immediate && !timeoutId;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      timeoutId = null; 
      if (!immediate) {
        callback.apply(this, args);
      }
    }, interval);

    if (callNow) {
      return callback.apply(this, args); 
    }
  };
}

function giveHi() { return 'hi'; }
const giveHiSometimes = debounce(giveHi, 3000);
giveHiSometimes(); // -> 'hi'
setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'

