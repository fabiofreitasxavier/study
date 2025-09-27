# 🗂️ JavaScript Data Types

## 🔎 What are Data Types?
Data types define the **kind of values** that can be stored and manipulated in JavaScript.  
They fall into two main groups: **Primitive** and **Non-Primitive (Reference)** types.

---

string 
const name = "Alice";        // double quotes
const greeting = 'Hello';    // single quotes
const template = `Hi ${name}`; // template literal
console.log(greeting); // Hello
console.log(template); // Hi Alice

number
const userAge = 30; // integer
const price = 19.99;
const hex = 0xff; // hexadecimal
console.log(userAge); // 30
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
