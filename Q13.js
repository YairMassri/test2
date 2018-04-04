// Write a for loop that prints to the console all the numbers from 1 to 10 in
// ascending order.

var num = 10;
var i = 1;
var text = "";

function loop() {
    for (i = 1; i <= num; i++) {
        text += i + " ";
    }
    return text;
}
console.log(loop());
