// 🔁 1. WHILE LOOP – Example:
// 🎯 Example: User se password lena jab tak sahi na ho

let password = "";
const correctPassword = "1234";

while (password !== correctPassword) {
  password = prompt("Enter your password:");
}

console.log("Access granted!");
// 📢 Samjhanay ka tareeqa (Urdu):
// Jab tak user sahi password nahi likhta, system baar baar bolega: 'Enter your password' – yeh while loop hai.


// 🔁 2. DO...WHILE LOOP – Example:
// 🎯 Example: User se ek dafa to number lena hi hai, phir check karna ke chhota hai 10 se ya nahi

let number;

do {
  number = parseInt(prompt("Enter a number less than 10:"));
} while (number >= 10);

console.log("Good! You entered:", number);
// 📢 Samjhanay ka tareeqa (Urdu):
// Yeh loop user se ek baar number lega hi lega, phir check karega ke number 10 se chhota hai ya nahi. Agar nahi hai to phir se lega.


// 📚 BONUS Example: Menu System (Do...While)

let option;

do {
  option = prompt("Menu:\n1. Start Game\n2. Help\n3. Exit");

  if (option === "1") {
    console.log("Starting game...");
  } else if (option === "2") {
    console.log("This is a simple game.");
  }

} while (option !== "3");

console.log("Goodbye!");
// 📢 Iska matlab:
// Jab tak user exit nahi karta, menu bar bar dikhaya jaata hai.


// ✅ Summary:
// while loop: Jab tak condition true ho (e.g., Jab tak exam pass nahi hota, dubara appear hona)
// do...while loop: Jab ek kaam zaroor karna ho, phir check ho (e.g., Pehle ek bite lo chocolate ki, phir dekhna tasty hai ya nahi)