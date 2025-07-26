let heading = document.querySelector("h1");
heading.innerHTML = "Hello Haroon Rasheed";






let para = document.querySelector("p");
// para.innerText = "Mara Dill NHI KAR RAHA DOM SEKNI KO"
para.style.color = "red";
para.style.maxWidth = "800px";





let btn = document.querySelector(".btn"); 
btn.addEventListener("click", () => {
    para.style.color = "black";
    alert("Wow sir");
});




// let a = document.querySelector()
// let a = document.querySelectorAll()
// let a = document.getElementById("")
// let a = document.getElementsByClassName()
// let a = document.getElementsByTagName()




let div = document.querySelector("div");

let p = document.createElement("p");
p.innerHTML = "TO kase hoo"
// div.append(p) 
// div.prepend(p)
// div.after(p)
// div.before(p)

div.insertAdjacentElement('afterbegin',p)
// div.insertAdjacentElement("afterend",p)

// div.remove()


let elem = div.children[0]
elem.remove()










