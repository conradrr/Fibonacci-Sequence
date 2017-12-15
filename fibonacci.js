var canvas = document.getElementById("canvas");
// Define a 2d canvas
var ctx = canvas.getContext("2d");

canvas.height = 500;//window.innerHeight;
canvas.width = 700;//canvas.innerWidth;

// First Number of Fibonacci Sequence
var previous = 0;
// Second Number of Fibonacci Sequence
var next = 1;
// Array to Store All Numbers
var sequence = [];
var counter = 0;

// 0 1 1 3 5 8 13 21 34...
// Begins the Sequence
function fibonacciSequence() {
  sequence[counter] = previous;
  previous = previous + next;
  counter++;
  assistant();
}
   
// Assists Previous Function
function assistant() {
  sequence[counter] = next;
  next = previous + next;
  if (counter < 20) {
    counter++;
    fibonacciSequence();
  } else {
    result();
  }
}

// Console the Results
function result() {
  for (i = 0; i < 20; i++) {
    console.log(sequence[i]);
  }
}

// Only do the First 15 Numbers in the Sequence
 if (counter < 15) {fibonacciSequence();}

var divider = 0;
var onlyOnce = tru
