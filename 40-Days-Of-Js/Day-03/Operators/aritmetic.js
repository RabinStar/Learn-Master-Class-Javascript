// Arithmetic Operators: +,-,*,/,**, %,increament/ decreament

// Addition (+)
console.log(10 + 5);   // 15
console.log("Hello " + "World!"); // "Hello World!"
console.log(5 + "10"); // "510" (String Concatenation)
console.log(true + true); // 2 (true is 1)

// Subtraction (-)
console.log(10 - 5);   // 5
console.log(5 - "3");  // 2 (String converted to number)
console.log("10" - 2); // 8 (String converted to number)
console.log(true - false); // 1

// Multiplication (*)
console.log(10 * 5);   // 50
console.log("5" * "2"); // 10 (Strings converted to numbers)
console.log(true * 5);  // 5 (true is 1)
console.log(false * 5); // 0 (false is 0)

// Division (/)
console.log(10 / 2);   // 5
console.log(5 / "2");  // 2.5
console.log("10" / "5"); // 2
console.log(10 / 0);   // Infinity

// Modulus (Remainder) (%)
console.log(10 % 3);   // 1
console.log(15 % 4);   // 3
console.log(8 % 2);    // 0 (Even Number)

// Exponentiation (**)
console.log(2 ** 3);   // 8 (2^3)
console.log(5 ** 2);   // 25 (5^2)
console.log(10 ** 0);  // 1 (Anything to power 0 is 1)

// Increment (++)
let x = 5;
console.log(++x);  // 6 (Pre-Increment)
console.log(x++);  // 6 (Post-Increment, prints first then increases)
console.log(x);    // 7

// Decrement (--)
let y = 5;
console.log(--y);  // 4 (Pre-Decrement)
console.log(y--);  // 4 (Post-Decrement, prints first then decreases)
console.log(y);    // 3
