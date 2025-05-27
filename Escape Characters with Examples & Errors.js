// // Simple Calculator using only JavaScript

// // Get first number from user
// let num1 = parseFloat(prompt("Enter the first number:"));

// // Get operator from user (+, -, *, /)
// let operator = prompt("Enter an operator (+, -, *, /):");

// // Get second number from user
// let num2 = parseFloat(prompt("Enter the second number:"));

// let result;

// // Perform calculation based on the operator
// if (operator === "+") {
//   result = num1 + num2;
// } else if (operator === "-") {
//   result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
//   if (num2 !== 0) {
//     result = num1 / num2;
//   } else {
//     result = "Cannot divide by zero!";
//   }
// } else {
//   result = "Invalid operator!";
// }

// // Show result to the user
// alert("Result: " + result);










// Array 


// let numess = ["Ail" ,"Tayyab", "Hamza" , "Ali" , "Tariq" , "Awais" , "Hassan" , "Usama" , "Ali" , "Tariq" , "Awais" , "Hassan" , "Usama"];


// console.log(numess[1]);


// let a = []



// let a = ["a","b", "c", "d", "e", "f", "g", "h", ]

//  a.splice(2,2,"z", "y", "x", "w");

// console.log(a);




// let length = 6; // OTP length
// let giveotp = "";

// for (let i = 0; i < length; i++) {
//     let otp = Math.floor(Math.random() * 10);
//     giveotp += otp; // Concatenating digit as string
// }

// console.log("Generated OTP:", giveotp);

























//  OTP Generator

// let langth = 6; // OTP length

// let giveotp = "";

// for (let i = 0; i < langth; i++) {
//     let otp = Math.floor(Math.random() * 10);
//     giveotp += otp; // Concatenating digit as string
// }

// console.log("Generated OTP:", giveotp);


// // Function to generate a random OTP

// function OTPGenerator(langth){
//     let otp = "";
//     for (let i = 0; i < langth; i++){
//         let digit = Math.floor(Math.random() * 10);
//         otp += digit; // Concatenating digit as string
//     }

//     return otp;
// }

// console.log("Generated OTP:", OTPGenerator(6));









let text = "";
for(let i = 0; i < 90; i++){
  text += "This is Numabr" + i + "\n";
}
console.log(text);


console.log("Folder path: C:\\Users\\Haroon");


