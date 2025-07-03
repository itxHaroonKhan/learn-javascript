


function changeImage(){
  let imge1 = document.getElementById("myImage") ;
  imge1.src = "https://i.pinimg.com/736x/8a/6f/26/8a6f26400dbb30dbd7b2578ddbd36cdc.jpg"
  imge1.alt = "imge"
}



function changeText(){
  let text = document.getElementById("myText")
  text.innerText = "change text "
}







  let isOriginal = true; // Yeh batata hai ke abhi original image lagi hui hai ya nahi

  function swapImage() {
    let img = document.getElementById("myImage1");

    if (isOriginal) {
      img.src = "https://i.pinimg.com/736x/28/84/3b/28843b8f787286b740b4af57a4c48bc4.jpg"; // Dusri image
      img.alt = "Image 2";
    } else {
      img.src = "https://i.pinimg.com/736x/d7/89/47/d789474a4900e1a987f83088d7ee60dc.jpg"; // Original image
      img.alt = "Image 1";
    }

    isOriginal = !isOriginal; // True ko false aur false ko true bana deta hai
  }

