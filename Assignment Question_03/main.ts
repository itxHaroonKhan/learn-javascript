// Output Example
// With whitespace:

//     Haroon Rasheed   


// After stripping whitespace:
// Haroon Rasheed







































let famous_person: string = "Quaid-e-Azam Muhammad Ali Jinnah";
let quote: string = "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.";

let message: string = `"${quote}" — ${famous_person}`;
console.log(message);




let personName: string = "\t\n   Haroon Rasheed   \n\t";

console.log("With whitespace:");
console.log(personName);   // Whitespace ke sath naam print hoga

console.log("\nAfter stripping whitespace:");
console.log(personName.trim());  // trim() se clean naam print hoga





console.log(5 + 3);   // Addition = 8
console.log(10 - 2);  // Subtraction = 8
console.log(2 * 4);   // Multiplication = 8
console.log(16 / 2);  // Division = 8

