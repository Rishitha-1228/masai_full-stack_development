//1question
let arr1 = [10, 20, 30];
let arr2 = [40, 50];
let combined = [...arr1, ...arr2];
console.log(combined); // [10, 20, 30, 40, 50]

//2 question
let person = { name: "Venu", age: 25 };
let extra = { city: "Bengaluru" };
let profile = { ...person, ...extra };
console.log(profile);
// { name: "Venu", age: 25, city: "Bengaluru" }

//question3
sumAll(1, 2, 3, 4); // should return 10
function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10


//4question
let numbers = [10, 20, 30, 40, 50];
let [first, ...rest] = numbers;

console.log(first); // 10
console.log(rest);  // [20, 30, 40, 50]

//5 question
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let {
  address: {
    city,
    geo: { lat, lng }
  }
} = user;

console.log(city); // Bengaluru
console.log(lat);  // 11.22
console.log(lng);  // 77.33

//6question 
function multiply(a, b) {
  return a * b;
}

const multiply = (a, b) => a * b;
//7question
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
let role = emp?.details?.profile?.role;

console.log(role); // Developer

