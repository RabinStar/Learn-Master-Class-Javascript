// <<<<<<<<>>>>>>>> Relational <<<<<<<<>>>>>>>>>

// Greater Than (>)
console.log(10 > 5);   // true
console.log(5 > 10);   // false
console.log(5 > 5);    // false
console.log("b" > "a"); // true

// Less Than (<)
console.log(10 < 5);   // false
console.log(5 < 10);   // true
console.log(5 < 5);    // false
console.log("a" < "b"); // true

// Greater Than or Equal To (>=)
console.log(10 >= 5);   // true
console.log(5 >= 10);   // false
console.log(5 >= 5);    // true
console.log("b" >= "a"); // true
console.log("a" >= "a"); // true

// Less Than or Equal To (<=)
console.log(10 <= 5);   // false
console.log(5 <= 10);   // true
console.log(5 <= 5);    // true
console.log("a" <= "b"); // true
console.log("b" <= "b"); // true

// Number vs String Comparison
console.log(10 > "5");  // true
console.log("10" < 20); // true
console.log("2" > "10"); // true

// Boolean Comparison
console.log(true > false);  // true
console.log(false < true);  // true
console.log(true >= 1);     // true
console.log(false <= 0);    // true

// Null & Undefined Comparison
console.log(null > 0);   // false
console.log(null < 1);   // true
console.log(null >= 0);  // true
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == null); // true
