/**
 * LAB 01: JavaScript Foundations (Variables, Types, & Operators)
 * Pilot: Ankit (Thnoxs)
 * Status: Module 01 Complete
 */

// --- SECTION 1: VARIABLE MECHANICS ---

// 1.1 Const: Fixed reference (Always use this as default)
const userAge = 17;
try {
  // userAge = 18; // ❌ This will throw TypeError: Assignment to constant variable.
  console.log("CONST CHECK:", userAge);
} catch (err) {
  console.log("CONST ERROR:", "Cannot reassign a constant!");
}

// 1.2 Let: Re-assignable (Use only when value needs to change)
let userName = "Something";
userName = "Thnoxs"; // ✅ Allowed
console.log("LET CHECK:", userName);

// 1.3 Var: Function-scoped (Legacy/Old - Skipping as per Mentor's advice)
var something = "Ankit";
// Note: Skipping deep dive into 'var' to avoid bad habits.

// --- SECTION 2: DATA TYPES (THE 7 PRIMITIVES) ---

let testValue;

testValue = "Something"; // String
console.log("TYPE 1:", typeof testValue);

testValue = 16; // Number
console.log("TYPE 2:", typeof testValue);

testValue = true; // Boolean
console.log("TYPE 3:", typeof testValue);

testValue = null; // Null (Special case: returns 'object' due to legacy JS bug)
console.log("TYPE 4 (Null):", typeof testValue);

testValue = undefined; // Undefined
console.log("TYPE 5:", typeof testValue);

// BigInt & Symbol (Advanced Primitives)
testValue = 9007199254740991n;
console.log("TYPE 6:", typeof testValue);

// --- SECTION 3: OPERATORS & LOGIC ---

// 3.1 Equality: Loose (==) vs Strict (===)
console.log("LOOSE (18 == '18'):", 18 == "18"); // true (Type Coercion happens)
console.log("STRICT (18 === '18'):", 18 === "18"); // false (No Type Coercion - BEST PRACTICE)

// 3.2 Arithmetic & Assignment
let calculation = 17 * 10;
console.log("MATH OP:", calculation);

// 3.3 Logical Comparisons
let isEligible = 18 >= 19; // false
console.log("LOGIC CHECK:", isEligible);

/**
 * FINAL INFERENCE:
 * 1. Always use 'const' unless re-assignment is mandatory.
 * 2. Use '===' to avoid unpredictable type-casting bugs.
 * 3. Primitive types are immutable and stored by value.
 */
