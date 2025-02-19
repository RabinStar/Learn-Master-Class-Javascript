// Ternary Operator (?) in JavaScript

// Syntax: condition ? expression_if_true : expression_if_false;

let age = 20;
let canVote = age >= 18 ? "Yes, you can vote!" : "No, you cannot vote.";
console.log(canVote); // Output: "Yes, you can vote!"

// Nested Ternary Operator
let num = 0;
let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(result); // Output: "Zero"

// Using with Functions
function checkNumber(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}
console.log(checkNumber(7)); // Output: "Odd"

// Assigning Value Using Ternary
let isLoggedIn = false;
let userMessage = isLoggedIn ? "Welcome Back!" : "Please Log In.";
console.log(userMessage); // Output: "Please Log In."

// Using Ternary Inside Template Literals
let username = "John";
console.log(`Hello, ${username ? username : "Guest"}!`); // Output: "Hello, John!"

// Short-circuiting with &&
let isAdmin = true;
isAdmin && console.log("Admin Access Granted!"); // Output: "Admin Access Granted!"
