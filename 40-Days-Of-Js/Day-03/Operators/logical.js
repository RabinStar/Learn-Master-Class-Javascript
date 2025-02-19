// Logical Operators in JavaScript

let a = true;
let b = false;
let x = 10;
let y = 5;

// Logical AND (&&) - Returns true if both conditions are true
console.log(a && b); // false (because b is false)
console.log(x > 5 && y < 10); // true (both conditions are true)
console.log(x > 5 && y > 10); // false (one condition is false)

// Logical OR (||) - Returns true if at least one condition is true
console.log(a || b); // true (because a is true)
console.log(x > 5 || y > 10); // true (one condition is true)
console.log(x < 5 || y > 10); // false (both conditions are false)

// Logical NOT (!) - Inverts the boolean value
console.log(!a); // false (because a is true)
console.log(!b); // true (because b is false)
console.log(!(x > 5)); // false (because x > 5 is true, and !true becomes false)

// Combining Logical Operators
console.log((x > 5 && y < 10) || b); // true (because first condition is true)
console.log(!(x < 5 && y > 10)); // true (because inside condition is false, and !false becomes true)

// Short-Circuit Behavior
console.log(false && console.log("This won't execute")); // false (AND stops if the first value is false)
console.log(true || console.log("This won't execute")); // true (OR stops if the first value is true)

// Using Logical Operators with Non-Boolean Values
console.log(0 && "Hello"); // 0 (Falsy value returns first falsy operand)
console.log("Hello" && 0); // 0 (Falsy value returns first falsy operand)
console.log("Hello" && "World"); // "World" (Last truthy value is returned)
console.log(0 || "Hello"); // "Hello" (Returns first truthy value)
console.log("" || 0 || null || "JavaScript"); // "JavaScript" (First truthy value is returned)
