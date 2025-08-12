// Variable Scoping
// (A) Global Scope

var name = "Haroon"; // ye global variable hai, yani ye puray program me access ho sakta hai

function greet() {
  console.log(name); // yahan pe bhi "Haroon" print hoga kyun ke ye global variable hai
}

greet(); // function call karne se "Haroon" console me aayega
console.log(name); // function ke bahar bhi access ho raha hai kyun ke ye global hai


// (B) Function Scope
function test() {
  var x = 10; // ye variable sirf is function ke andar kaam karega
  console.log(x); // yahan print hoga 10
}

test(); // function run hua to 10 aaya
console.log(x); // ❌ Error: x is not defined (function ke bahar x kaam nahi karega)


// (C) Block Scope
if (true) {
  let a = 5;    // block scope variable (sirf is { } block me kaam karega)
  const b = 10; // block scope constant
  var c = 15;   // var block scope follow nahi karta, ye function ya global me chala jata hai
  console.log(a); // 5
  console.log(b); // 10
  console.log(c); // 15
}

console.log(c); // ✅ var block se bahar bhi access ho raha hai (var ka yahi problem hai)
console.log(a); // ❌ Error (let block se bahar kaam nahi karta)
console.log(b); // ❌ Error (const bhi block se bahar kaam nahi karta)








// ===================================== Closure =================================================


function outer() {
  let counter = 0; // ye private variable hai, sirf outer function ke scope me

  function inner() {      // ye inner function closure banayega
    counter++;            // counter ki value 1 se barhata hai
    console.log(counter); // updated counter print karta hai
  }

  return inner; // outer function inner function ko return kar raha hai
}

const myFunc = outer(); // outer call hua → counter = 0 ban gaya
                        // outer ka kaam khatam, lekin inner function return ho gaya
                        // aur inner ke saath counter ka scope bhi memory me save ho gaya

myFunc(); // counter = 1 → print "1"
myFunc(); // counter = 2 → print "2"
myFunc(); // counter = 3 → print "3"






// =======================================================Template literals============================


// Old Method (String Concatenation)
let name1 = "Haroon";
let age1 = 22;
let city1 = "Karachi";

let oldMessage = "Mera naam " + name1 + " hai,\n" +
"meri age " + age1 + " saal hai\n" +
"aur main " + city1 + " me rehta hoon.";

console.log(" Old Method Output:");
console.log(oldMessage);


// New Method (Template Literal)
let name2 = "Haroon";
let age2 = 22;
let city2 = "Karachi";

let newMessage = `Mera naam ${name2} hai,
meri age ${age2} saal hai
aur main ${city2} me rehta hoon.`;

console.log("\n New Method Output:");
console.log(newMessage);
