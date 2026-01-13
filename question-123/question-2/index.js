import { checkPrime } from "./math.js";

// Test values
const numbers = [2, 3, 4, 5, 10, 17, 20];

numbers.forEach((num) => {
  console.log(`Is ${num} a prime number?`, checkPrime(num));
});
