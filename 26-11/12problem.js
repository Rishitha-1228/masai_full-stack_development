// Q1: Closure-Based Counter Implementation

function createCounter() {
  // private variable - not accessible from outside
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },
    decrement: function () {
      count--;
      console.log("Current count:", count);
    },
    getCount: function () {
      console.log("Final count:", count);
    },
  };
}

// Example Usage
const counter1 = createCounter();
counter1.increment(); // Output: Current count: 1
counter1.increment(); // Output: Current count: 2
counter1.decrement(); // Output: Current count: 1
counter1.getCount();  // Output: Final count: 1

// Creating another counter
const counter2 = createCounter();
counter2.increment(); // Output: Current count: 1
counter2.getCount();  // Output: Final count: 1
