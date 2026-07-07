// =========================
// TEAM 420 Script
// =========================

const logo = document.getElementById("logo");
const title = document.querySelector(".title");
const text = document.querySelector("p");
const bgVideo = document.getElementById("bgVideo");

logo.addEventListener("click", () => {

    // Logo Animation
    logo.style.transition = "1s";
    logo.style.transform = "scale(1.4) rotate(360deg)";
    logo.style.boxShadow = 
        0 0 30px #39ff14,
        0 0 60px #39ff14,
        0 0 120px #39ff14,
        0 0 200px #39ff14
    ;

    title.innerHTML = "WELCOME TO TEAM 420";
    text.innerHTML = "INITIALIZING...";

    // Flash Effect
    document.body.style.transition = "0.5s";
    document.body.style.background = "#0f0";

    setTimeout(() => {
        document.body.style.background = "#000";
    }, 300);

    // UFO Effect
    createUFO();

});

function createUFO(){

    const ufo = document.createElement("div");

    ufo.innerHTML = "🛸";

    ufo.style.position = "fixed";
    ufo.style.left = "-100px";
    ufo.style.top = "20%";
    ufo.style.fontSize = "70px";
    ufo.style.zIndex = "9999";
    ufo.style.transition = "6s linear";

    document.body.appendChild(ufo);

    setTimeout(()=>{
        ufo.style.left = "110%";
    },100);

    setTimeout(()=>{
        ufo.remove();
    },6500);

}
