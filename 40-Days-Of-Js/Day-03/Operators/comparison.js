// Comparison Operators in JavaScript

let x = 10;
let y = 5;
let z = "10";

// Equal (==) [Only compares values]
console.log(x == z); // true (because "10" is converted to number 10)

// Strict Equal (===) [Compares values & types]
console.log(x === z); // false (because "10" is a string, and 10 is a number)

// Not Equal (!=) [Only compares values]
console.log(x != y); // true (10 is not equal to 5)
console.log(x != z); // false (because "10" is converted to 10)

// Strict Not Equal (!==) [Compares values & types]
console.log(x !== z); // true (because types are different)

// Greater Than (>)
console.log(x > y); // true (10 is greater than 5)

// Greater Than or Equal (>=)
console.log(x >= 10); // true (10 is equal to 10)

// Less Than (<)
console.log(y < x); // true (5 is less than 10)

// Less Than or Equal (<=)
console.log(y <= 5); // true (5 is equal to 5)

// Comparing Strings (Lexicographic Order)
console.log("apple" > "banana"); // false (because "a" comes before "b")
console.log("car" < "cat"); // true (because "r" comes before "t")
console.log("2" > "15"); // true (because "2" comes after "1" in string comparison)

// Null and Undefined Comparisons
console.log(null == undefined); // true (they are loosely equal)
console.log(null === undefined); // false (they have different types)
console.log(null > 0); // false (null is converted to 0)
console.log(null < 0); // false
console.log(null == 0); // false (null is only equal to undefined)
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined == 0); // false
