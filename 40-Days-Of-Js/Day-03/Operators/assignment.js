// Bitwise AND Assignment (&=)
let b = 5;  // 5 in binary: 101
b &= 3;  // 3 in binary: 011
console.log(b); // 1 (Binary AND)

// Bitwise OR Assignment (|=)
b |= 2;  // 2 in binary: 010
console.log(b); // 3 (Binary OR)

// Bitwise XOR Assignment (^=)
b ^= 1;  // 1 in binary: 001
console.log(b); // 2 (Binary XOR)

// Left Shift Assignment (<<=)
let c = 4;  // 4 in binary: 100
c <<= 2;  // Shift left by 2: 10000 (16)
console.log(c); // 16

// Right Shift Assignment (>>=)
c >>= 2;  // Shift right by 2: 100 (4)
console.log(c); // 4

// Unsigned Right Shift Assignment (>>>=)
c >>>= 1;  // Shift right by 1 (unsigned)
console.log(c); // 2