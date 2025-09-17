// Constructor function banaya
function Person(name, age, gender, city) {
    this.name = name;     // name property
    this.age = age;       // age property
    this.gender = gender; // gender property
    this.city = city;     // city property
}

// Constructor ka use karke multiple objects banaye
var person1 = new Person("Ali", 20, "Male", "Karachi");
var person2 = new Person("Sara", 22, "Female", "Lahore");
var person3 = new Person("Usman", 25, "Male", "Islamabad");

// Objects ko console me check karna
console.log(person1);
console.log(person2);
console.log(person3);





// User se gender input lena
let gender = prompt("Apna gender type kare (male/female):");

// Input ko lowercase me convert karte hain
gender = gender.toLowerCase();

// Conditional check
if (gender === "male") {
    alert("Hello Sir, Good Morning!");
} else if (gender === "female") {
    alert("Hello Ma’am, Good Morning!");
} else {
    alert("Hello, Good Morning!");
}



// Taking inputs from user
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operation = prompt("Enter operation (+, -, *, /, %):");

// Checking operation using if statements
if (operation === "+") {
    alert("Result: " + (num1 + num2));
} 
else if (operation === "-") {
    alert("Result: " + (num1 - num2));
} 
else if (operation === "*") {
    alert("Result: " + (num1 * num2));
} 
else if (operation === "/") {
    // Division check
    if (num2 !== 0) {
        alert("Result: " + (num1 / num2));
    } else {
        alert("Error: Cannot divide by zero!");
    }
} 
else if (operation === "%") {
    alert("Result: " + (num1 % num2));
} 
else {
    alert("Invalid operation entered!");
}
