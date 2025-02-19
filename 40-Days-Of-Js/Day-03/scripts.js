// Operand and Operators
// Operand:
let m,y,z // Thoe are Operands
console.log(x,y,z)


//Operators:
/*
    Arithmetic,
    Assignment,
    Comparison,
    Relational,
    Logical,
    Bitwise,
    Conditional and
    Grouping
*/

// Arithmetic Operators: +,-,*,/,**, %,increament/ decreament
let a=5,b=6
console.log(a+b) // addtional operator (11)
console.log(a-b) // Minus operator (-1)
console.log(a*b) // Mul operator (30)
console.log(a/b) // Divide operator (0.8333)
console.log(a%b) // reminder operator (0)
console.log(a**b) // Exponent operator (15625)
console.log(++b) // pre-increment operator (7)
console.log(a++) // post-increment operator (5)


// Assignment Operators:
let x = 3
x += 3 // x = x+3 (6)
x -= 3 // x = x-3 (0)
x *= 3 // x = x*3 (9)
x /= 3 // x = x/3 (1)


// <<<<<<<<<<<<<<<<<>>>>>>>> Comparison Operators: <<<<<<<>>>>>>>>>>>>>>>>
/* 
    Loose Equality
    JavaScript-এ == অপারেটরের সম্পূর্ণ ধারণা
    == (Loose Equality) কী?
    JavaScript-এ == হল Loose Equality (আনুমানিক সমতা) চেক করার অপারেটর। এটি দুই মানের তুলনা করে এবং প্রয়োজনে টাইপ কনভার্সন (type coercion) করে।

    📌 অর্থাৎ, দুইটি ভ্যালুর টাইপ আলাদা হলেও, যদি তাদের মান সমান হয়, তাহলে == সত্য (true) রিটার্ন করে।

    👉 == এর কাজ করার নিয়ম (Type Coercion)
    🔹 যদি দুই মানের টাইপ আলাদা হয়, তাহলে JavaScript একই টাইপে কনভার্ট করে তারপর তুলনা করে।
    🔹 এটি সংখ্যাকে (number) স্ট্রিং (string), বুলিয়ান (boolean), বা null/undefined-কে পরিবর্তন করতে পারে।

*/

//🔹 == ব্যবহার করার উদাহরণ

//1️⃣ Number & String
console.log(5 == "5");  // ✅ true (String "5" → Number 5)
console.log(10 == "10"); // ✅ true (String "10" → Number 10)
//👉 স্ট্রিং 5 কে নাম্বারে কনভার্ট করে তারপর তুলনা করা হয়েছে। তাই true।

//2️⃣ Boolean & Number তুলনা
console.log(true == 1);  // ✅ true (true → 1)
console.log(false == 0); // ✅ true (false → 0)
console.log(true == 2);  // ❌ false (true → 1, কিন্তু ২ নয়)
//👉 Boolean true কে ১ এবং false কে ০ তে কনভার্ট করে তুলনা করা হয়।

//3️⃣ Null & Undefined তুলনা
console.log(null == undefined); // ✅ true
console.log(null == 0);         // ❌ false
console.log(undefined == 0);    // ❌ false
//👉 null ও undefined শুধু নিজেদের মধ্যে true দেয়, কিন্তু অন্য কিছুর সাথে false দেয়।

//4️⃣ Object vs Primitive তুলনা
console.log([1] == 1);       // ✅ true (Array `[1]` → Number `1`)
console.log([] == 0);        // ✅ true (Empty array → Number `0`)
console.log([1, 2] == "1,2"); // ✅ true (Array `[1,2]` → String `"1,2"`)
console.log({} == "[object Object]"); // ❌ false
//👉 JavaScript toString() বা valueOf() মেথড ব্যবহার করে Object কে Primitive টাইপে কনভার্ট করে।



//5️⃣ Special Cases
console.log("" == 0);    // ✅ true (Empty string → 0)
console.log(" " == 0);   // ✅ true (Whitespace string → 0)
console.log("5" == true); // ✅ true ("5" → Number 5, true → 1 → false)
console.log("0" == false); // ✅ true ("0" → Number 0, false → 0)
//👉 Empty String " " এবং "0" কে নাম্বার 0 হিসাবে ধরা হয়।

/*
    🚨 == ব্যবহার করার সতর্কতা 🚨
    ✔️ JavaScript == ব্যবহার করলে Type Coercion হয়, যা অনেক সময় বিভ্রান্তিকর হতে পারে।
    ✔️ ভিন্ন ডাটা টাইপ সরাসরি তুলনা করার জন্য === (Strict Equality) ব্যবহার করা উত্তম।
    ✅ সঠিক তুলনা করতে === (Strict Equality) ব্যবহার করুন!
*/ 

console.log(5 === "5");  // ❌ false (No type conversion)
console.log(1 === true); // ❌ false (Number !== Boolean)
console.log(null === undefined); // ❌ false
//console.log([1] === 1); // ❌ false (Array !== Number)

/*
    🎯 সংক্ষেপে মূল পয়েন্ট
    ✅ == তুলনা করার সময় টাইপ পরিবর্তন (Type Coercion) করে।
    ✅ true == 1, false == 0, এবং "5" == 5 → true হয়।   
    ✅ null == undefined → true, কিন্তু null == 0 → false।
    ✅ [] == 0 এবং "" == 0 → true, কারণ তারা 0 হিসাবে কনভার্ট হয়।
    ✅ নির্ভুল তুলনার জন্য === ব্যবহার করা ভালো।
*/ 



