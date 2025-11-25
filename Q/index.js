




// **3. Loops (10 Questions)**
// **21.** Write a for loop to print numbers from 1 to 50.
// **22.** Use a while loop to sum the numbers from 1 to 10.
// **23.** Create a for…of loop to log each character of the string.
// **24.** Write a loop that prints all even numbers between 1 and 100.
// **25.** Create a program that reverses a string using a loop.
// **26.** Write a loop to find the largest number in an array.
// **27.** Use a for loop to print the multiplication table of 7 from 1 to 10.
// **28.** Create a while loop that keeps running until the user enters the number 5.
// **29.** Use a for…in loop to print all keys of an object.
// **30.** Write a loop that counts how many vowels are in a given string.
// **31.** Create a loop that removes all negative numbers from an array.
// **32.** Use a loop to calculate the factorial of a number (like 5 → 120).
// **33.** Write a loop that prints numbers from 10 down to 1.




// 1. Log your name and favorite hobby to the console.
// 2. Perform and log the result of 45 * 2 - 10.
// 3. Display the current year in the console.
// 4. Create two variables for first and last name, concatenate them, and log the result.
// 5. Track the value of a variable by logging it before and after updating it.
// 6. Use `console.error()` to simulate an error message.
// 7. Log the square of the number 12 to the console.

// ---



// **2. Variables and Data Types (10 Questions)**
// 11. Declare a variable using let and log its value.
// 12. Create a constant to store the value of PI and log it.
// 13. Reassign a value to a variable declared with let and log the result.
// 14. Check the type of null and log it.
// 15. Create a variable with a number as a string (e.g., "25") and log its type.
// 16. Use typeof to check the type of a boolean variable.
// 17. Create three variables of types string, number, and boolean, and log their values.
// 18. Declare a variable without assigning a value. Log its type.




























































// ---

// ## **20. Use const to create an array. Try reassigning the array and observe the error.**

// ```js
// const numbers = [1, 2, 3];
// numbers = [4, 5, 6]; // Error: Assignment to constant variable
// ```

// ---

// ## **21. Write a for loop to print numbers from 1 to 50.**

// ```js
// for (let i = 1; i <= 50; i++) {
//   console.log(i);
// }
// ```

// ---

// ## **22. Use a while loop to sum the numbers from 1 to 10.**

// ```js
// let i = 1;
// let sum = 0;

// while (i <= 10) {
//   sum += i;
//   i++;
// }

// console.log(sum);
// ```

// ---

// ## **23. Create a for…of loop to log each character of the string.**

// ```js
// const text = "Haroon";

// for (let ch of text) {
//   console.log(ch);
// }
// ```

// ---

// # **Extra Questions (24–33) with Answers**

// ---

// ## **24. Write a loop that prints all even numbers between 1 and 100.**

// ```js
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// ```

// ---

// ## **25. Create a program that reverses a string using a loop.**

// ```js
// let str = "javascript";
// let reversed = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversed += str[i];
// }

// console.log(reversed);
// ```

// ---

// ## **26. Write a loop to find the largest number in an array.**

// ```js
// let arr = [5, 12, 3, 20, 7];
// let largest = arr[0];

// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }

// console.log(largest);
// ```

// ---

// ## **27. Use a for loop to print the multiplication table of 7 from 1 to 10.**

// ```js
// for (let i = 1; i <= 10; i++) {
//   console.log(`7 x ${i} = ${7 * i}`);
// }
// ```

// ---

// ## **28. Create a while loop that keeps running until the user enters the number 5.**

// ```js
// let num = 0;

// while (num !== 5) {
//   num = Number(prompt("Enter a number: "));
// }

// console.log("Loop stopped because you entered 5");
// ```

// ---

// ## **29. Use a for…in loop to print all keys of an object.**

// ```js
// const user = {
//   name: "Haroon",
//   age: 20,
//   city: "Karachi"
// };

// for (let key in user) {
//   console.log(key);
// }
// ```

// ---

// ## **30. Write a loop that counts how many vowels are in a given string.**

// ```js
// let str = "javascript";
// let vowels = "aeiou";
// let count = 0;

// for (let ch of str) {
//   if (vowels.includes(ch)) {
//     count++;
//   }
// }

// console.log(count);
// ```

// ---

// ## **31. Create a loop that removes all negative numbers from an array.**

// ```js
// let nums = [3, -5, 7, -2, 10];
// let positive = [];

// for (let n of nums) {
//   if (n >= 0) {
//     positive.push(n);
//   }
// }

// console.log(positive);
// ```

// ---

// ## **32. Use a loop to calculate the factorial of a number. (5 → 120)**

// ```js
// let num = 5;
// let result = 1;

// for (let i = 1; i <= num; i++) {
//   result *= i;
// }

// console.log(result);
// ```

// ---

// ## **33. Write a loop that prints numbers from 10 down to 1.**

// ```js
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }
// ```

// ---




// ### **2. Variables and Data Types – Answers**

// **11. Declare a variable using let and log its value.**

// ```javascript
// let age = 25;
// console.log(age);
// ```

// **12. Create a constant to store the value of PI and log it.**

// ```javascript
// const PI = 3.14159;
// console.log(PI);
// ```

// **13. Reassign a value to a variable declared with let and log the result.**

// ```javascript
// let city = "Karachi";
// city = "Lahore";
// console.log(city);
// ```

// **14. Check the type of null and log it.**

// ```javascript
// console.log(typeof null);  // "object"
// ```

// **15. Create a variable with a number as a string and log its type.**

// ```javascript
// let numString = "25";
// console.log(typeof numString);  // "string"
// ```

// **16. Use typeof to check the type of a boolean variable.**

// ```javascript
// let isActive = true;
// console.log(typeof isActive);  // "boolean"
// ```

// **17. Create three variables of types string, number, and boolean, and log their values.**

// ```javascript
// let name = "Haroon";
// let score = 100;
// let passed = true;

// console.log(name, score, passed);
// ```

// **18. Declare a variable without assigning a value. Log its type.**

// ```javascript
// let item;
// console.log(typeof item);  // "undefined"
// ```

// ---







































// =====================
// Basic Console Usage
// =====================

// 1. Log your name and favorite hobby
console.log("Haroon");
console.log("Hobby: Coding");

// 2. Perform and log the result of 45 * 2 - 10
console.log(45 * 2 - 10);

// 3. Display the current year
console.log(new Date().getFullYear());

// 4. Concatenate first and last name
let firstName = "Haroon";
let lastName = "Khan";
console.log(firstName + " " + lastName);

// 5. Track variable before and after updating
let count = 10;
console.log("Before:", count);
count = 20;
console.log("After:", count);

// 6. Simulate an error message
console.error("Something went wrong!");

// 7. Log the square of the number 12
console.log(12 * 12);




