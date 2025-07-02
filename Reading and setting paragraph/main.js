  function setValue() {
      let inputBox = document.getElementById("myInput");
      inputBox.value = "Haroon Rasheed";
    }


   
  function textBadlo() {
  let para = document.getElementById("meraPara"); // Paragraph ko pakra
  para.innerText = "Mera naam Haroon Rasheed hai."; // Text badla
}


function textParho() {
  let para = document.getElementById("meraPara"); // Paragraph ko pakra
  alert(para.innerText); // Uska text screen par dikhaya (popup)
}