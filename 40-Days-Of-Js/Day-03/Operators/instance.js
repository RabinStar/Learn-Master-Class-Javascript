// instanceof Operator in JavaScript

// Example with built-in objects
let arr = [1, 2, 3];
console.log(arr instanceof Array); // Output: true
console.log(arr instanceof Object); // Output: true
console.log(arr instanceof String); // Output: false

// Example with custom class
class Person {}
let person1 = new Person();
console.log(person1 instanceof Person); // Output: true
console.log(person1 instanceof Object); // Output: true

// Example with function constructor
function Car() {}
let myCar = new Car();
console.log(myCar instanceof Car); // Output: true
console.log(myCar instanceof Object); // Output: true

// Checking null or undefined
console.log(null instanceof Object); // Output: false
console.log(undefined instanceof Object); // Output: false
