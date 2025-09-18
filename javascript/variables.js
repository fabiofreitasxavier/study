var x = 123;
var y = 200;
var z = x + y;
console.log(z); // Read (access) value
// Combine with other strings
console.log(`My number is ${z}.`);

let score = 0;
console.log("Initial score:", score);

// Update (reassign)
score = 10;
console.log("Updated score:", score);

// Multiple updates
score += 5; // add 5
console.log("After adding:", score);

// ❌ Variables declared with let/const cannot be deleted
let country = "Brazil";
// delete country; // This would throw an error

// ✅ But you can delete properties from objects
let user = { name: "Bob", age: 25 };
console.log("Before delete:", user);

delete user.age;
console.log("After delete:", user);


//Best Pratices
// ✔️ DO: Use const by default
const appName = "MyApp";

// ✔️ DO: Use let when value will change
let counter = 0;
counter++;

// ✔️ DO: Use descriptive names
let userAge = 25;    // clear
let x = 25;          // ❌ unclear

// ❌ DON’T: Use var (function scoped, problematic)
var badExample = "Avoid me!";

// ❌ DON’T: Reuse variables for different meanings
let status = "active";
status = 200; // ❌ now type/meaning changed
