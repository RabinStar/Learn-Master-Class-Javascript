//Var Examples
console.log(a);  // undefined (hoisted)
var a = 10;
console.log(a);  // 10
var a = 20;  // Re-declaration allowed
console.log(a);  // 20

//let Examples
console.log(b);  // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b);  // 20
let b = 30;  // SyntaxError: Identifier 'b' has already been declared

//Const Examples
console.log(c);  // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c);  // 30
const c = 40;  // SyntaxError: Identifier 'c' has already been declared
c = 50;  // TypeError: Assignment to constant variable.
