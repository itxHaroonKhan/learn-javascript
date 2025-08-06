

// Objects – (Objects kya hote hain?)
// Definition:
// JavaScript mein object aik aisi cheez hoti hai jo properties (data) aur methods (functions) dono ko contain karti hai.




let car = {
  brand: "Toyota",
  color: "Black",
  start: function() {
    console.log("Car started");
  }
};

car.start()


// Car aik object hai. Uske andar brand aur color properties hain, aur start aik method (function) hai







// ==================================================================================================









// 70. Objects: Properties – (Object ki properties kya hoti hain?)
// Definition:
// Object ke andar jo data hota hai use property kehte hain.



let student = {
  name: "Tayyab",
  age: 16
};

console.log(student.name);  // Output: Tayyab




// name aur age dono properties hain jo student object mein hain.






// =======================================================================================================================================





// 71. Objects: Methods – (Object ke methods kya hote hain?)


// Object ke andar jo function hota hai usse method kehte hain.


let students = {
  name: "Ali",
  speak: function() {
    console.log("Hello, my name is " + this.name);
  }
};

// student.speak();  // Output: Hello, my name is Ali

// this.name ka matlab hai is object ke andar ka name.




// ============================================================================================================================================
//  Objects: Constructors – (Constructors kya hote hain?)

//  Definition:
// Constructor aik template hota hai jo multiple objects banane ke liye use hota hai.


function Student(name, age) {
  this.name = name;
  this.age = age;
}

let s3 = new Student("Haroon", 18);
console.log(s3.name);  // Haroon




// Student aik constructor function hai jo new students banata hai.


// =======================================================================================================================


// 73. Objects: Constructors for methods – (Methods ko bhi constructor me add karna)

function Studentsss(name) {
  this.name = name;
  this.sayHello = function() {
    console.log("Hello, " + this.name);
  };
}

let s1 = new Studentsss("Ali");
s1.sayHello();  // Output: Hello, Ali

// Constructor ke andar method bhi add kiya gaya hai.



// =================================================================================================================================

// 75. Objects: Checking for properties and methods – (Object me koi property ya method hai ya nahi, check karna)

let cars = {
  brand: "Toyota",
  color: "Black"
};

console.log("brand" in cars);  // true
console.log(cars.hasOwnProperty("color")); // true
console.log("start" in cars);  // false



// in aur hasOwnProperty() ka use karke pata karte hain koi cheez object me maujood hai ya nahi.





// =======================================================================================================/


// Objects: Prototypes – (Prototype kya hota hai?)
// JavaScript mein har object ka aik prototype hota hai jisse wo properties ya methods inherit kar sakta hai.

function User(username) {
  this.username = username;
}

User.prototype.login = function() {
  console.log(this.username + " has logged in");
};

let u1 = new User("haroon123");
let u2 = new User("asim456");

u1.login(); // Output: haroon123 has logged in
u2.login(); // Output: asim456 has logged in


// JavaScript mein har object ka aik prototype hota hai jisse wo properties ya methods inherit kar sakta hai.