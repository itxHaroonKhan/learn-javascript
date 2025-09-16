
// 1.	Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”


// User se input lena
let city = prompt("Apna city name likho:");

// Input ko lowercase me convert karna (taake case sensitive problem na ho)
// city = city.toLowerCase();

// Agar city Karachi hai to special message show karna
if (city === "karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Welcome to " + city);
}





// 2  ..ase be code samja jawab porha samja 1. Suppose You have an array of object  
// var itemsArray = [ 
// {name:”juice”,price:”50”, quantity:”3”}, 
// {name:”cookie”,price:”30”, quantity:”9”}, 
// {name:”shirt”,price:”880”, quantity:”1”}, 
// {name:”pen”,price:”100”, quantity:”2”}]; 
// Calculate total price of each item and all items; 


// Array of objects banaya
var itemsArray = [ 
    { name: "juice", price: 50, quantity: 3 },
    { name: "cookie", price: 30, quantity: 9 },
    { name: "shirt", price: 880, quantity: 1 },
    { name: "pen", price: 100, quantity: 2 }
];

// Sab items ka total store karne ke liye ek variable
var totalAllItems = 0;

// Loop chalate hain har item ke liye
for (var i = 0; i < itemsArray.length; i++) {
    var item = itemsArray[i];
    
    // Total price of ek item = price × quantity
    var totalPrice = item.price * item.quantity;
    
    // Har item ka total print karwa diya
    console.log(item.name + " ka total price hai: " + totalPrice);
    
    // Grand total me add kar diya
    totalAllItems += totalPrice;
}

// Sab items ka total price
console.log("Sab items ka total price hai: " + totalAllItems);






// 2. Create an object with properties name, email, password, age, 
// gender, city, country. 
// Check if age and country properties exist in object or not. 
// Also check firstName and lastName properties in object.


// Object banaya jisme properties hain
var user = {
    name: "Haroon",
    email: "haroonkhan@gmail.com",
    password: "09765",
    age: 20,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
};

// Check karna ke 'age' property exist karti hai ya nahi
console.log("Age property hai? " + ("age" in user));

// Check karna ke 'country' property exist karti hai ya nahi
console.log("Country property hai? " + ("country" in user));

// Check karna ke 'firstName' property exist karti hai ya nahi
console.log("FirstName property hai? " + ("firstName" in user));

// Check karna ke 'lastName' property exist karti hai ya nahi
console.log("LastName property hai? " + ("lastName" in user));
