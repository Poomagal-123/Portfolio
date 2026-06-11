// Typing Animation

const text = "Java Full Stack Developer";
let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,100);

}
}

typeWriter();


// Scroll Reveal Animation

window.addEventListener("scroll", reveal);

function reveal(){

const reveals = document.querySelectorAll(".reveal");

for(let i=0;i<reveals.length;i++){

const windowHeight = window.innerHeight;

const revealTop = reveals[i].getBoundingClientRect().top;

const revealPoint = 100;

if(revealTop < windowHeight - revealPoint){

reveals[i].classList.add("active");

}

}
}

reveal();