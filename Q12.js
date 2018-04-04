// Write a while loop that prints to the console all the numbers from 10 to 1
// in descending order. Use the code below in your solution.

var num = 10;

function loop(start, end) {
    var i = end;
    while (i >= start) {
        console.log(i);
        i--;
    }
}

loop(1, num);