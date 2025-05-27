
// ✅ For Loop Examples: Flags, Booleans, array.length, Loopus Interruptus

// ✅ 1. Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Output: 0 1 2 3 4

// ✅ 2. Loop with array.length
let fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// Output:
// apple
// banana
// mango

// ✅ 3. Boolean Flag Example
let items = ["pen", "book", "laptop"];
let found = false; // 👉 yeh hai flag

for (let i = 0; i < items.length; i++) {
  if (items[i] === "book") {
    found = true;
    break;
  }
}

if (found) {
  console.log("Laptop mil gaya!");
} else {
  console.log("Laptop nahi mila!");
}

// ✅ 4. break = Loopus Interruptus 😄
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 30) {
    console.log("30 mil gaya, ab loop band!");
    break;
  }
  console.log("Check ho raha:", numbers[i]);
}
// Output:
// Check ho raha: 10
// Check ho raha: 20
// 30 mil gaya, ab loop band!






// ✅ 5. continue (Bonus)
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // 👉 is iteration ko skip karo
  }
  console.log(i);
}
// Output: 1 2 4 5
