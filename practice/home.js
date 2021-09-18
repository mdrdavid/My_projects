let element = document.querySelector('.main');
element.style.fontSize= "20px";
element.style.color= "white";
element.style.fontWeight= "700"
element.style.position = "absolute";
element.style.top="650px";
element.style.left="10";
element.style.display= "flex"

let parag = document.createElement("p");
let node = document.createTextNode("My paragraphy one");
parag.appendChild(node);
let element2 = document.querySelector(".main");
//element2.appendChild(parag);
let child = document.querySelector(".paragraph")
element2.insertBefore(parag, child);
element2.style.display ="block";
element.style.textAlign ="center";