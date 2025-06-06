// =======================================
// ✅ SWITCH STATEMENTS PRACTICE FILE
// =======================================


// ✅ Example 1: Basic Color Switch
let color = "green";

switch (color) {
  case "red":
    console.log("You chose red.");
    break;

  case "blue":
    console.log("You chose blue.");
    break;

  case "green":
    console.log("You chose green.");
    break;

  default:
    console.log("Color not found.");
}

// Output: You chose green.


// ✅ Example 2: Day of the Week
let day = "friday";

switch (day) {
  case "monday":
    console.log("It's Monday: Start of the week.");
    break;

  case "friday":
    console.log("It's Friday: Weekend is near!");
    break;

  case "sunday":
    console.log("It's Sunday: Time to rest.");
    break;

  default:
    console.log("Invalid day.");
}

// Output: It's Friday: Weekend is near!


// ✅ Example 3: Numbers as Cases
let number = 3;

switch (number) {
  case 1:
    console.log("Number is One");
    break;

  case 2:
    console.log("Number is Two");
    break;

  case 3:
    console.log("Number is Three");
    break;

  default:
    console.log("Number is unknown");
}

// Output: Number is Three


// ✅ Example 4: FALL-THROUGH (Jab break nahi hota)
// => Agar tum break nahi doge, to agla case bhi chalta rahega jab tak break na mile

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("This is an apple.");  // Match hua
    // break yahan nahi diya, is liye agla case bhi run karega

  case "banana":
    console.log("This is a banana.");  // Yeh bhi chalega
    break;

  default:
    console.log("Fruit not recognized.");
}

// Output:
// This is an apple.
// This is a banana.


// ✅ Example 5: default case when nothing matches
let vehicle = "bike";

switch (vehicle) {
  case "car":
    console.log("You chose a car.");
    break;

  case "bus":
    console.log("You chose a bus.");
    break;

  default:
    console.log("Vehicle not found.");
}

// Output: Vehicle not found.


// ✅ Note:
// - break zaroor do har case ke baad warna next case bhi run hoga (fall-through)
// - default case optional hota hai, lekin dena acha hota hai (jab koi bhi case match na kare)
