//11 

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");
//
// 12

console.log("Message 1");

setTimeout(() => {
  console.log("Message 2 after 2 seconds");
}, 2000);

console.log("Message 3");

//
// 13

// 
let loading = setInterval(() => {
  console.log("Loading...");
}, 1000);

// 
setTimeout(() => {
  clearInterval(loading);
  console.log("Loaded successfully!");
}, 5000);
//14
// Understanding Event Loop Order in JavaScript

console.log("Begin");

setTimeout(() => {
  console.log("Timeout Task");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise Task");
});

console.log("End");
//
// 15// Countdown Timer using setInterval and setTimeout
// Works in Node.js environment

// Countdown Timer using setInterval and setTimeout
// Works in Node.js environment

const readline = require("readline");

// Create an interface to take user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Step 1: Ask user for countdown seconds
rl.question("Enter countdown time in seconds: ", (input) => {
  let timeLeft = parseInt(input);

  if (isNaN(timeLeft) || timeLeft <= 0) {
    console.log("Please enter a valid number greater than 0.");
    rl.close();
    return;
  }

  console.log(`Countdown starts from ${timeLeft} seconds...`);

  // Step 2: Start countdown using setInterval
  let timer = setInterval(() => {
    console.log(`Time left: ${timeLeft}s`);
    timeLeft--;

    if (timeLeft < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  // Step 3: Detect user keypress to stop countdown
  // Using setTimeout to delay key listening setup
  setTimeout(() => {
    console.log('Press "s" to stop the countdown early.');

    // Switch terminal to raw mode to capture key press instantly
    process.stdin.setRawMode(true);
    process.stdin.resume();
    process.stdin.on("data", (key) => {
      if (key.toString().trim().toLowerCase() === "s") {
        clearInterval(timer);
        console.log("Countdown Stopped by User!");
        rl.close();
        process.exit();
      }
    });
  }, 500); // Start listening shortly after countdown begins
});
