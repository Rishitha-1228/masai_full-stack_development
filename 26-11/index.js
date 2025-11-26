// Step 1: Declare a global variable
let age = 20; // global variable

// Step 2: Function to display age
function displayAge() {
  console.log("Age inside displayAge():", age);
}

// Step 3: Function to change age
function changeAge() {
  age = 25; // updating global variable
  console.log("Age inside changeAge():", age);
}

// Step 4: Call the functions
console.log("Initial global age:", age); // before calling functions
displayAge();  // shows the global variable
changeAge();   // modifies the global variable
console.log("Global age after changeAge():", age); // after modification
