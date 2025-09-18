const pi = 3.14159;
console.log(pi); // 3.14159

//constants must Be Initialized

const city = "London";

const person = { name: "Alice", age: 25 }; // Object

const numbers = [1, 2, 3];

// Allowed: push, pop, modify elements
numbers.push(4);
numbers[0] = 99;

console.log(numbers); // [99, 2, 3, 4]

// ❌ Not allowed: reassigning array
// numbers = [10, 20]; // Error

if (true) {
  const language = "JavaScript";
  console.log(language); // JavaScript
}
// console.log(language); // ❌ ReferenceError
// Best Practices
// ✔️ DO: Use const by default for values that won't change
const maxUsers = 100;

// ✔️ DO: Use descriptive names
const userEmail = "email"; // clear
const x = "email";      // ❌ unclear

// ❌ DON’T: Use var (function scoped, problematic)
var oldExample = "Avoid me!";

// ❌ DON’T: Reassign constants
// const apiUrl = "https://api.example.com";
// apiUrl = "https://api.newexample.com"; // ❌ Error