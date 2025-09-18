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
