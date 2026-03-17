# Module 01: The Basics (JavaScript Foundations) 🧠

> **Current Progress:** Fundamentals of Variables & Memory Management
> **Date:** March 17, 2026

---

### ✅ Variable Declarations (`var`, `let`, `const`)
* **var:** Function-scoped. It gets hoisted and initialized with `undefined`. Leading to unpredictable bugs.
* **let:** Block-scoped. Hoisted but remains in the **Temporal Dead Zone (TDZ)** until the line of declaration is executed.
* **const:** Block-scoped and immutable reference. Must be initialized at the time of declaration.

### ✅ Hoisting 
JavaScript allocates memory for variables and functions before executing the code.
* `var` is hoisted as `undefined`.
* `let` and `const` are hoisted but inaccessible (TDZ), throwing a `ReferenceError` if accessed early.
* Function declarations are fully hoisted (can be called before they are defined).

### ✅ Scopes & Shadowing
* **Global Scope:** Variables defined outside any function or block.
* **Function Scope:** Variables created within a function (accessible only there).
* **Block Scope:** Variables (let/const) confined within `{}` (if, for, etc.).
* **Shadowing:** Occurs when a variable in an inner scope shares the same name as one in an outer scope, temporarily "hiding" the outer variable.

---

### 🔬 Lab & Practical Evidence
[Experimental Lab](./labs/variable-shadowing-tdz.js): In this I test the limits of variable shadowing and TDZ (temporal dead zone).

[The Challenge](./labs/the-challenge.js): I've built a custom scenario where the scope of var and let conflicts.