// Author: Haroon Rasheed
// Date: 21-09-2025
// This program stores names of friends in an array and prints each one.

// let names: string[] = ["Ali", "Ahmed", "Bilal", "Usman", "Hamza"];

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);



// Author: Haroon Rasheed
// Date: 21-09-2025
// This program prints a personalized greeting message for each friend.

let names: string[] = ["Ali", "Ahmed", "Bilal", "Usman", "Hamza"];

for (let i = 0; i < names.length; i++) {
    console.log("Hello " + names[i] + ", hope you are doing well!");
}







// Author: Haroon Rasheed
// Date: 21-09-2025
// This program stores favorite modes of transportation and prints statements about them.

let transportation: string[] = ["Honda motorcycle", "Toyota car", "Suzuki bike", "Yamaha scooter"];

for (let i = 0; i < transportation.length; i++) {
    console.log("I would like to own a " + transportation[i] + ".");
}


// Author: Haroon Rasheed
// Date: 21-09-2025
// This program invites a list of people to dinner.

// let guests: string[] = ["Quaid-e-Azam", "Allama Iqbal", "Albert Einstein"];

// for (let i = 0; i < guests.length; i++) {
//     console.log("Dear " + guests[i] + ", you are cordially invited to dinner at my place.");
// }




// Author: Haroon Rasheed
// Date: 21-09-2025
// This program replaces one guest who can't come and sends new invitations.

let guests: string[] = ["Quaid-e-Azam", "Allama Iqbal", "Albert Einstein"];

// Guest who can't make it
let cannotAttend: string = guests[2];
console.log(cannotAttend + " can't make it to the dinner.");

// Replace with a new guest
guests[2] = "Isaac Newton";

// Send new invitations
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are still invited to dinner at my place.");
}
