




// ✅ 1. Basic Nested For Loop Example
for (let i = 1; i <= 3; i++) {
  console.log("i = " + i); // Outer loop

  for (let j = 1; j <= 2; j++) {
    console.log("   j = " + j); // Inner loop
  }
}


// i = 1
//    j = 1
//    j = 2
// i = 2
//    j = 1
//    j = 2
// i = 3
//    j = 1
//    j = 2



// ✅ 2. Star Pattern using Nested Loop
for (let row = 1; row <= 3; row++) {
  let pattern = "";
  for (let col = 1; col <= 5; col++) {
    pattern += "*";
  }
  console.log(pattern);
}


// *****
// *****
// *****




// ✅ 3. Looping through a 2D Array
let students = [
  ["Ali", 85],
  ["Sara", 92],
  ["Bilal", 78]
];

for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < students[i].length; j++) {
    console.log(students[i][j]);
  }
  console.log("----------");
}

// Ali
// 85
// ----------
// Sara
// 92
// ----------
// Bilal
// 78
// ----------







// ✅ 4. Searching with Nested Loop + Boolean Flag
let departments = [
  ["pen", "book"],
  ["tablet", "phone"],
  ["mouse", "laptop", "charger"]
];

let found = false;

for (let i = 0; i < departments.length; i++) {
  for (let j = 0; j < departments[i].length; j++) {
    if (departments[i][j] === "laptop") {
      found = true;
      console.log("Laptop found in row:", i, "column:", j);
      break; // Exit inner loop
    }
  }
  if (found) break; // Exit outer loop if found
}

if (found) {
  console.log("Laptop mil gaya!");
} else {
  console.log("Laptop nahi mila!");
}

// Laptop found in row: 2 column: 1
// Laptop mil gaya!







// ✅ 5. Nested loop with 'continue' (skip value)
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (j === 2) continue; // Skip j = 2
    console.log(`i=${i}, j=${j}`);
  }
}



// output
// i=1, j=1
// i=1, j=3
// i=2, j=1
// i=2, j=3
// i=3, j=1
// i=3, j=3
