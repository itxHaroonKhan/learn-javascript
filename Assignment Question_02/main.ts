let quote: string = "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve.";
let author: string = "Quaid-e-Azam Muhammad Ali Jinnah";

console.log(`"${quote}" — ${author}`);





let personName: string = "Haroon Rasheed";

console.log("Lowercase: " + personName.toLowerCase());
console.log("Uppercase: " + personName.toUpperCase());

// Titlecase
let titleCase: string = personName
  .split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");

console.log("Titlecase: " + titleCase);








let personName1: string = "eric smith";

console.log("Lowercase: " + personName1.toLowerCase());
console.log("Uppercase: " + personName1.toUpperCase());

// Titlecase
let titleCase1: string = personName1[0].toUpperCase() + personName1.slice(1).toLowerCase();
console.log("Titlecase: " + titleCase);



// Store a person's name in a variable
let personName2: string = "Haroon";

// Print a personal message
console.log(`Hello ${personName2}, would you like to learn TypeScript today?`);
