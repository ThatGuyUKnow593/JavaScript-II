// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

var x = 5;
var y = 20;

function multiply(){
    return x * y;
}

console.log(multiply());

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

    let counter = 0;
    console.log(counter);

    function counterAdd() {
         return counter += 1;
}
    counterAdd();
    console.log(counter);
    counterAdd();
    console.log(counter);
};

console.log(counter());


// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2




/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
