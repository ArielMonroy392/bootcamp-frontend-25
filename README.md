# JavaScript and Functional Programming

JavaScript is a **multi-paradigm language**, meaning it supports **object-oriented**, **imperative**, and **functional** programming.

---

## 💡 What is Functional Programming (FP)?

**Functional programming** is a paradigm that treats computation as the evaluation of mathematical functions and avoids changing state or mutable data.

### 🔑 Key Principles:

- **Pure functions**
- **Immutability**
- **Function composition**
- **Higher-order functions**
- **Avoiding side effects**

---

## ⚠️ What is a Side Effect?

A **side effect** is any interaction a function has with the outside world or modification of something beyond its scope.

### Common Examples:

- Modifying external variables
- Writing to the console (`console.log`)
- Modifying the DOM
- Making HTTP requests
- Reading/writing files or data
- Mutating existing objects or arrays

---

## ✅ Pure Functions

A **pure function** follows two rules:

1. It always returns the same output for the same input.
2. It causes **no side effects**.

---

## 🧠 Higher-Order Functions

A **higher-order function** is a function that does at least one of the following:

- Takes another function as an argument.
- Returns a function.

---

## 🔁 Recursion

Unlike object-oriented programming, **functional programming** avoids constructs like `while`, `for` loops, or `if-else` statements. Instead, it uses **recursion**, where a function calls itself repeatedly until it reaches a **base case**.

---

## 🔄 Function Composition

**Function composition** is the process of combining two or more functions, executing each in sequence to produce a specific result.

> f(x) g(x) ==> f(g(x))

In this example, we combine the function `f` of `x` with the function `g` of `x`.

---

## 🧪 Simple Example in JavaScript

Suppose you have the following functions:

```javascript
const double = (x) => x * 2;

const addThree = (x) => x + 3;

const composition = double(addThree(2)); // 10
```
