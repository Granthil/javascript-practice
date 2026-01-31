//Create a function range that console.logs all numbers between 'start' and 'end' in sequential order.

function range(start, end) {
    if (start <= end) {
        for (let i = start; i <= end; i++) {
            console.log(i);
        }   
    }
}





 range(1,4) //=> 1, 2, 3, 4
 range(4,2) //=>
 