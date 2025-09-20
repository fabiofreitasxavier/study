//JavaScript Variables = Data Containers

    //Variables are Containers for Data
    //JavaScript variables can be declared in 4 ways:
    //Using let to declare block-scoped variables
        let age = 25;
        age = 26; // reassigning is allowed
        console.log(age); // 26
//Creating a variable in JavaScript is called declaring a variable.
//You declare a JavaScript variable with the let keyword or the const keyword.

//string 
const name = "Alice";        // double quotes
const greeting = 'Hello';    // single quotes
const template = `Hi ${name}`; // template literal
console.log(greeting); // Hello
console.log(template); // Hi Alice

//number
const age = 30;
const price = 19.99;
const hex = 0xff; // hexadecimal
console.log(age); // 30
console.log(price); // 19.99
console.log(hex); // 255

//boolean
const isActive = true;
const isAdmin = false;
console.log(isActive); // true
console.log(isAdmin); // false

//null and undefined
let data = null; // explicitly no value
let info;        // undefined by default
console.log(data); // null
console.log(info); // undefined

//object
const user = { name: "Bob", age: 25 };
console.log(user.name); // Bob
console.log(user.age);  // 25

//array
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // 1
console.log(numbers.length); // 5

//null 
let emptyValue = null;
console.log(emptyValue); // null

//undefined
let notAssigned;
console.log(notAssigned); // undefined

//function 

function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("Alice"));
t
//map
const map = new Map();
map.set("key1", "value1");
map.set("key2", "value2");
console.log(map.get("key1")); // value1

//set
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // duplicate, won't be added
console.log(set.has(2)); // true
console.log(set.size); // 2
//bigint
const bigIntNum = 1234567890123456789012345678901234567890n;
console.log(bigIntNum); // 1234567890123456789012345678901234567890n

//symbol
const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log(sym1 === sym2); // false, symbols are unique

//Using const to declare block-scoped constants
//Constants are block-scoped, much like variables declared using the let keyword.
//The value of a constant can't be changed through reassignment, and it can't be redeclared.
//A constant must be initialized to a value when it is declared.
//You cannot declare a constant with the same name as a function or variable in the same scope.

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