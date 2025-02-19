// typeof Operator in JavaScript

// Example with Primitive Types
console.log(typeof "Hello");    // Output: "string"
console.log(typeof 42);         // Output: "number"
console.log(typeof true);       // Output: "boolean"
console.log(typeof undefined);  // Output: "undefined"
console.log(typeof null);       // Output: "object" (this is a known JavaScript quirk)
console.log(typeof Symbol("id")); // Output: "symbol"
console.log(typeof 123n);       // Output: "bigint"

// Example with Non-Primitive Types
console.log(typeof {});         // Output: "object"
console.log(typeof []);         // Output: "object"
console.log(typeof function(){}); // Output: "function"
console.log(typeof new Date()); // Output: "object"

// Example with special cases
let x;
console.log(typeof x);          // Output: "undefined"

let y = null;
console.log(typeof y);          // Output: "object" (historical JavaScript bug)
