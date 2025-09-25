


// Strings
let firstName = "Fabio";
let lastName = "Freitas";
console.log("Full Name:", firstName + " " + lastName);

// Numbers
let x = 10;
let y = 3.5;
console.log("x + y =", x + y);

// Boolean
let isLoggedIn = true;
console.log("Logged In?", isLoggedIn);

// Null vs Undefined
let emptyValue = null;
let notAssigned;
console.log("Empty:", emptyValue, "Not assigned:", notAssigned);

// BigInt
let bigNumber = 123456789012345678901234567890n;
console.log("BigInt:", bigNumber);

// typeof operator
console.log("Type of firstName:", typeof firstName);
console.log("Type of x:", typeof x);
console.log("Type of isLoggedIn:", typeof isLoggedIn);

// Symbol
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("Symbols equal?", sym1 === sym2); // false

// Map
let user = new Map();
user.set("name", "Alice");
user.set("age", 30);
console.log("User Map:", user);
console.log("User Name from Map:", user.get("name"));

// Set
let uniqueNumbers = new Set([1, 2, 2, 3, 4]);
console.log("Unique Numbers Set:", uniqueNumbers);

// Array
let numbers = [1, 2, 3, 4, 5];
console.log("Numbers Array:", numbers);
console.log("First Number:", numbers[0]);

// Object
let person = {
    name: "Bob",
    age: 25,
    isStudent: false
};
console.log("Person Object:", person);
console.log("Person's Name:", person.name);

// Function
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Charlie"));

// Date
let currentDate = new Date();
console.log("Current Date:", currentDate);

// Regular Expression
let regex = /ab+c/;
console.log("Regex Test 'abbbc':", regex.test("abbbc"));
console.log("Regex Test 'ac':", regex.test("ac"));

// JSON
let jsonString = '{"name": "David", "age": 40}';
let jsonObject = JSON.parse(jsonString);
console.log("JSON Object:", jsonObject);
console.log("JSON String:", JSON.stringify(jsonObject));

// Typed Arrays
let intArray = new Int16Array([10, 20, 30]);
console.log("Typed Array:", intArray);
console.log("First Element in Typed Array:", intArray[0]);