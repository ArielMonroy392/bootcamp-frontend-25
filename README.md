# JavaScript and Functional Programming

JavaScript is a **multi-paradigm language**, meaning it supports **object-oriented**, **imperative**, and **functional** programming.

---

## 💡 What is Functional Programming (FP)?

**Functional programming** is a programming paradigm centered around building software using pure functions, where the same input always produces the same output, and functions avoid modifying external state. It emphasizes **immutability**, meaning data is never changed directly but instead copied and transformed. By avoiding **side effects** and using concepts like **function composition** and **higher-order functions**, functional programming promotes code that is more predictable, easier to test, and simpler to reason about — especially in complex or concurrent systems.

### 🔑 Key Principles:

- **Pure functions**
- **Immutability**
- **Function composition**
- **Higher-order functions**
- **Avoiding side effects**
- **Recursion**

---

## Pure functions

In functional programming, pure functions are essential. They help make your code predictable and easy to test. Instead of relying on the outside world, a pure function only uses its inputs and does nothing else.

A pure function is a function that:

- Always returns the same output for the same input
- Does not produce side effects

Deterministic and self-contained

**Example of a pure function:**

```javascript
function multiply(a, b) {
  return a * b;
}
```

This function:

- Doesn’t modify anything outside itself
- Doesn’t depend on any external state
- Will always return the same result for the same inputs

**Impure function example:**

```javascript
let taxRate = 0.1;
function calculateTotal(price) {
  return price + price * taxRate;
}
```

This function depends on a global variable (**_taxRate_**) if it changes, the output changes too. It's not pure.

**Why use Pure Functions?**
Pure functions are predictable — they always behave the same way, which makes them easier to understand, test, and debug. Since they don’t rely on external state, they can be run anywhere, even in parallel, without causing conflicts.

## Avoiding side effects

One of the key ideas in functional programming is to avoid side effects whenever possible. A side effect is anything a function does that affects the outside world or is affected by it and that makes your code less predictable.

Side effect happens when a function:

- Modifies a variable outside its scope
- Writes to a file, logs to the console, updates the DOM, etc.

**Side effect example:**

```javascript
let counter = 0;
function incrementCounter() {
  counter++;
}
```

This function modifies a global variable, which can create bugs in larger applications if not handled carefully.

**No side effect example:**

```javascript
function increment(n) {
  return n + 1;
}
```

This function only depends on its input and doesn’t touch anything else — making it safer and more predictable.

**Why avoid side effects?**

Avoiding side effects keeps your code clean and easier to reason about. When functions don’t affect the outside world, you can trust them to behave consistently. This reduces hidden dependencies, race conditions, and unexpected bugs, especially in environments with concurrency or async operations like web apps or servers.

## Immutability

Functional programming encourages immutability, meaning values are never changed instead, new versions are created. This approach prevents bugs caused by unexpected changes in shared data.

Immutability means you don’t change existing data, but instead create new versions of it.

**Mutating data:**

```javascript
const user = { name: "Juan", age: 35 };
user.age = 26; // Mutates the object
```

**Using immutability:**

```javascript
const user = { name: "Ariel", age: 25 };
const updatedUser = { ...user, age: 26 };
```

Instead of changing the original, we create a new copy with the update.

**Same with arrays:**

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // [1, 2, 3, 4]
```

**Why use Immutabilty?**

Using immutability leads to safer and more predictable code. When data isn’t changed directly, you avoid bugs caused by unexpected mutations — especially when multiple parts of your app share and access the same data.

## Function Composition

Function composition is a fundamental concept in functional programming. It refers to combining two or more functions to produce a new function, where the output of one function becomes the input of the next.

In simpler terms:

- Compose functions like a pipeline, where the result flows through each function step by step.

The idea is to build complex behavior by reusing small, focused functions.

```javascript
const result = f(g(x));
```

- Examples:

```javascript
const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrapInBrackets = (str) => `<${str}>`;

const result = wrapInBrackets(toLowerCase(trim("  Hello World  ")));
console.log(result); // <hello world>

// Compose utility: Right-to-left function composition
const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((acc, fn) => fn(acc), x);

// Create a composed function
const transform = compose(wrapInBrackets, toLowerCase, trim);

console.log(transform("  Hello World  ")); // <hello world>
```

## High-Order Functions

In JavaScript, a High-Order Function (HOF) is a function that either:

- Takes one or more functions as arguments, or
- Returns a function as its result

This is possible because functions in JavaScript are first-class citizens, meaning they can be stored in variables, passed as arguments, and returned like any other value.

-Examples:

```javascript
const casualGreet = (name) => `Hey ${name}!`;
const formalGreet = (name) => `Good evening, ${name}.`;
//High-order-function
function greetUser(greetFunction, name) {
  return greetFunction(name);
}
// Use different greeting styles
console.log(greetUser(casualGreet, "Alice")); // Hey Alice!
console.log(greetUser(formalGreet, "Bob")); // Good evening, Bob.

//JavaScript’s built-in array methods like map, filter, and reduce are also high-order functions:
const numbers = [1, 2, 3, 4];

const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8]
```

## Recursion

Recursion is a programming technique where a function calls itself in order to solve a problem.

Every recursive function needs:

- A base case – the condition under which the recursion stops.
- A recursive case – the function calls itself with a different (usually smaller or simpler) input.

### Simple Analogy

- Think of recursion like Russian nesting dolls: each doll contains a smaller one inside, until you reach the smallest one (the base case).

Examples:

```javascript
function factorial(n) {
  if (n === 0) return 1; // base case
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120

// factorial(5)
// = 5 * factorial(4)
// = 5 * 4 * factorial(3)
// = 5 * 4 * 3 * factorial(2)
// = 5 * 4 * 3 * 2 * factorial(1)
// = 5 * 4 * 3 * 2 * 1 * factorial(0)
// = 5 * 4 * 3 * 2 * 1 * 1
// = 120
```

### Why Use Recursion?

- Useful for problems that can be broken down into similar subproblems
- Especially helpful in tree, graph, and nested structure
- Can lead to elegant and concise solutions
