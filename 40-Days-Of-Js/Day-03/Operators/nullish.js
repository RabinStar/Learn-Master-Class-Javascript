// Nullish Coalescing Operator (??) in JavaScript

// The nullish coalescing operator (??) returns the right-hand value if the left-hand value is null or undefined

let a = null;
let b = undefined;
let c = "Hello";
let d = 0;
let e = false;

// Basic Examples
console.log(a ?? "Default Value"); // "Default Value" (because a is null)
console.log(b ?? "Fallback"); // "Fallback" (because b is undefined)
console.log(c ?? "Default"); // "Hello" (because c is not null or undefined)

// Difference between ?? and || (Logical OR)
console.log(d || "Default"); // "Default" (because 0 is falsy)
console.log(d ?? "Default"); // 0 (because 0 is not null or undefined)

console.log(e || "Default"); // "Default" (because false is falsy)
console.log(e ?? "Default"); // false (because false is not null or undefined)

// Using with variables
let userInput = null;
let result = userInput ?? "Guest";
console.log(result); // "Guest" (because userInput is null)

// Combining ?? with other operators
let value = null;
let finalValue = value ?? (d && e) ?? "Final Fallback";
console.log(finalValue); // "Final Fallback" (because d && e is false, and value is null)
