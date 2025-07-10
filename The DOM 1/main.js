
// let a = document.getElementById("fun");
// let a = document.getElementsByClassName("box")[0];
// let a = document.querySelectorAll(".box")[1];
// let a = document.querySelector("#fun");




// a.innerHTML = "Hello Sir, Welcome to the DOM Manipulation Tutorial!";
// a.textContent = "Hello Sir, Welcome to the DOM Manipulation Tutorial!";
// a.innerText = "Hello Sir, Welcome to the DOM Manipulation Tutorial!";
// a.innerHTML = "<i>Hello Sir, Welcome to the DOM Manipulation Tutorial!</i>"








// let b = document.querySelector("a");


// b.href = "https://www.google.com";
// b.setAttribute("href", "https://www.google.com");


// console.log(b.getAttribute("href"))ye a tag ka link log me show karega
// a.removeAttribute("href"); // ye a tag ka link hata dega






// createElement

// append / prepend karo jahaa be element chieye

// let c = document.createElement("h1")
// c.textContent = "This is a new heading created by JavaScript";
// document.body.prepend(c); // ye element ko body ke starting me add karega







// let d = document.querySelector("#fun")
// d.remove(); // ye element ko remove karega



// let e = document.querySelector("h1");
// e.classList.add("box"); // ye element me new class add karega






// let f = document.querySelector("p");
    // let h1 = document.querySelector("h1");

    // f.addEventListener("dblclick", function() {
        // h1.style.color = "red"; // h1 کا رنگ سرخ ہو جائے گا
    // });






    // let input = document.querySelector("input");

    // input.addEventListener("input", function (event) {
    // //    console.log(event.target.value);
    // //    console.log(event);
    // // console.log(event.data);
    
       
       
    // }
    // );

    // input.addEventListener("input", function (event) {
    //      if(event.data !== null){
    //         console.log(event.data);
            
    //      }
    // }



    // )



    

let names = document.querySelector("#names");
  let heading = document.querySelector("#fun");

  names.addEventListener("change", function (event) {
    heading.textContent = `Hello ${event.target.value}`;
  });
    



    








