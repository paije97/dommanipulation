var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.createElement("button");

color1.value = "#ff0000";
color2.value = "#ffff00";

btn.innerHTML = "Randomizer!";
document.body.appendChild(btn);

function setGradient() {
    body.style.background = 
        "linear-gradient(to right," 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";

        css.textContent = body.style.background + ";";
};

function getRanHex() {
    body.style.background = 
        "linear-gradient(to right," 
        + "#" + genRanHex(6) 
        + ", " 
        + "#" + genRanHex(6)
        + ")";

        css.textContent = body.style.background + ";";
};

window.onload = setGradient;

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

btn.addEventListener("click", getRanHex);

let genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');