// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.  Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.






















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

// Author: Haroon Rasheed
// Date: 21-09-2025
// This program updates the guest list when one guest can't make it.

let guests: string[] = ["Quaid-e-Azam", "Allama Iqbal", "Albert Einstein"];

// Guest who can't make it
let unableToAttend: string = guests[2];
console.log(unableToAttend + " can’t make it to the dinner.");

// Replace the guest with a new one
guests[2] = "Isaac Newton";

// Print new invitations
for (let i = 0; i < guests.length; i++) {
    console.log("Dear " + guests[i] + ", you are cordially invited to dinner at my place.");
}

