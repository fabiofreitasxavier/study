# 04 - Operators

## 📘 What are Operators?
Symbols that perform operations on values and variables.

## 🔹 Types of Operators

### Arithmetic
`+`, `-`, `*`, `/`, `%` (modulo), `**` (exponentiation)

### Assignment
`=`, `+=`, `-=`, `*=`, `/=`, `%=` 

### Comparison
`==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=`

### Logical
`&&` (and), `||` (or), `!` (not)

### Ternary
`condition ? valueIfTrue : valueIfFalse`

### Others
- Spread `...` (copy/expand values)
- Rest `...` (collect values)
- Nullish coalescing `??`
- Optional chaining `?.`

## ✅ Examples
```js
let a = 5, b = 2;

console.log(a + b);  // 7
console.log(a ** b); // 25
console.log(a > b);  // true
console.log(a === "5"); // false

let result = (a > b) ? "A is bigger" : "B is bigger";
console.log(result);
