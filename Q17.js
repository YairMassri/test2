// Create a for loop that prints all the even numbers from 1 to 20 to the console.
// Use an if statement and the modulo operator in your solution.


var i = 1;
var text = "";

for (i = 1; i <= 20; i++) {
    if (i % 2==0) {
        text += i + " ";
    }
}

console.log(text);