let header = document.querySelector("header");
let element = header.getElementsByTagName("li")[2];
element.querySelector('a').textContent="Projects";

let chatbutton = document.querySelector(".hero-right-section-btns");
let button = chatbutton.querySelector("button");
let clone = button.cloneNode(true);
clone.textContent="Support Me";
button.after(clone);