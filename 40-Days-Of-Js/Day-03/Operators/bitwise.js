// Bitwise Operators in JavaScript

let a = 5;  //  0101 (binary)
let b = 3;  //  0011 (binary)

// Bitwise AND (&)
console.log(a & b);  // Output: 1 (0001)

// Bitwise OR (|)
console.log(a | b);  // Output: 7 (0111)

// Bitwise XOR (^)
console.log(a ^ b);  // Output: 6 (0110)

// Bitwise NOT (~)
console.log(~a);  // Output: -6 (inverts all bits)

// Left Shift (<<)
console.log(a << 1);  // Output: 10 (1010)

// Right Shift (>>)
console.log(a >> 1);  // Output: 2 (0010)

// Zero-Fill Right Shift (>>>)
console.log(a >>> 1);  // Output: 2 (0010)
