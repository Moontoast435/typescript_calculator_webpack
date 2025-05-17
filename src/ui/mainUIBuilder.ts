import './style.css';

let body = document.querySelector("body");

let mainDiv = document.createElement("div");
mainDiv.classList.add("main");

createInput();

body.appendChild(mainDiv);

function createInput() {
    mainDiv.innerHTML += `<input type="text" class="mainInput">`; 
}

function createButtons() {
    let buttonsCont = document.createElement("div");
    
}