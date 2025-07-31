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





let p = document.createElement("p");

p.innerHTML = "Hell Sir Who are You ?"
p.style.background = "red"
p.style.padding = "20px"

let body = document.querySelector("body");
body.append(p)



let but = document.createElement("button");
but.innerHTML = "Click me"
but.style.padding = "5px"
but.style.margin = "20px"
but.style.background = "green"
but.style.color = "white"
p.prepend(but)




let css = document.querySelector("div")
// css.setAttribute('style','background-color:red')
// css.setAttribute('class','apply')

// css.style.background="red"
// css.style.cssText = "background-color:red; font-size:60px;"




// css.classList.add("name")
// css.classList.add('xyz')
// css.classList.remove('xyz')
// console.log(css);

// let isyas = css.classList.contains('name');
// console.log(isyas);









