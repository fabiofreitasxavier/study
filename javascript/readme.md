
### JavaScript
- [Core Concepts](#javascript-core-concepts)
- [Data Types](#javascript-data-types)
- [Operators](#javascript-operators)
- [Control Structures](#javascript-control-structures)
- [Functions](#javascript-functions)
- [Objects & Classes](#javascript-objects--classes)
- [DOM Manipulation](#javascript-dom-manipulation)
- [Events](#javascript-events)
- [Asynchronous JavaScript](#javascript-asynchronous)
- [Modules](#javascript-modules)
- [APIs](#javascript-apis)


## JavaScript Core Concepts
- **Syntax**: Based on ECMAScript (ES2023).
- **Variables**: `var`, `let`, `const`. **Variations**: 3.
- **Scope**: Global, function, block, module. **Variations**: 4.
- **Hoisting**: Declarations moved to top.
- **Closures**: Functions retaining outer scope.
- **this**: Context binding (4 modes: default, implicit, explicit, new).
- **Example**:
  ```javascript
  let x = 10;
  function closure() { return x; }
  ```

## JavaScript Data Types
**Total: 8**
- Primitive: `undefined`, `null`, `boolean`, `number`, `bigint`, `string`, `symbol`.
- Object: `Object` (includes arrays, functions, etc.).
- **Example**:
  ```javascript
  let str = "Hello"; let obj = { key: "value" };
  ```

## JavaScript Operators
**Total: ~40**
- Arithmetic: `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--` (8).
- Comparison: `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=` (8).
- Logical: `&&`, `||`, `!`, `??` (4).
- Assignment: `=`, `+=`, `-=`, etc. (13).
- Bitwise: `&`, `|`, `^`, `~`, `<<`, `>>`, `>>>` (7).
- Others: `typeof`, `instanceof`, `in`, etc.
- **Example**:
  ```javascript
  let x = 5 + 3; // x = 8
  ```

## JavaScript Control Structures
- **Conditionals**: `if`, `else if`, `else`, `switch`. **Variations**: 4.
- **Loops**: `for`, `while`, `do...while`, `for...in`, `for...of`. **Variations**: 5.
- **Error Handling**: `try`, `catch`, `finally`, `throw`. **Variations**: 4.
- **Example**:
  ```javascript
  if (x > 0) { console.log("Positive"); }
  ```

## JavaScript Functions
- **Declarations**: Function, arrow, async, generator. **Variations**: 4.
- **Parameters**: Default, rest, spread. **Variations**: 3.
- **Expressions**: Named, anonymous, IIFE.
- **Example**:
  ```javascript
  const add = (a, b = 1) => a + b;
  ```

## JavaScript Objects & Classes
- **Objects**: Key-value pairs, methods. **Properties**: Infinite.
- **Classes**: `class`, `extends`, `constructor`, `static`, `get/set`. **Variations**: 5.
- **Prototypes**: Prototype chain for inheritance.
- **Example**:
  ```javascript
  class Person { constructor(name) { this.name = name; } }
  ```

## JavaScript DOM Manipulation
- **Access**: `getElementById`, `querySelector`, etc. **Methods**: ~10.
- **Manipulation**: `innerHTML`, `setAttribute`, `appendChild`, etc. **Methods**: ~20.
- **Nodes**: Element, text, comment, etc. **Types**: ~12.
- **Example**:
  ```javascript
  document.querySelector("#id").textContent = "Hello";
  ```

## JavaScript Events
- **Types**: Mouse, keyboard, form, window, etc. **Total**: ~100.
- **Handling**: `addEventListener`, `removeEventListener`.
- **Properties**: `event.target`, `event.type`, etc. **Total**: ~20.
- **Example**:
  ```javascript
  button.addEventListener("click", () => alert("Clicked"));
  ```

## JavaScript Asynchronous
- **Callbacks**: Functions as arguments.
- **Promises**: `Promise`, `then`, `catch`, `finally`. **States**: 3 (pending, fulfilled, rejected).
- **Async/Await**: Simplified promise handling.
- **Timers**: `setTimeout`, `setInterval`. **Variations**: 2.
- **Example**:
  ```javascript
  async function fetchData() { let res = await fetch(url); return res.json(); }
  ```

## JavaScript Modules
- **Syntax**: `import`, `export` (default, named).
- **Types**: ES Modules, CommonJS. **Variations**: 2.
- **Example**:
  ```javascript
  export const greet = () => "Hello";
  import { greet } from "./module.js";
  ```

## JavaScript APIs
**Total: ~20 major APIs**
- **Fetch**: HTTP requests. **Methods**: 2 (fetch, Headers).
- **Web Storage**: `localStorage`, `sessionStorage`. **Methods**: 5.
- **Canvas**: 2D graphics. **Context**: 2 (2d, webgl).
- **Web Workers**: Background tasks. **Types**: 3 (dedicated, shared, service).
- **Geolocation**: Location data. **Methods**: 2 (getCurrentPosition, watchPosition).
- Others: WebSocket, History, IntersectionObserver, etc.
- **Example**:
  ```javascript
  fetch("https://api.example.com").then(res => res.json());
  ```

## Resources
- [CSS Properties Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Contributing](https://github.com/fabiofreitasxavier/study/blob/main/CONTRIBUTING.md)

