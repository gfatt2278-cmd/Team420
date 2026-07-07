/* ===========================
   TEAM 420 SCRIPT
=========================== */

const logo = document.getElementById("logo");
const title420 = document.querySelector("h2");

// Click Effect
logo.addEventListener("click", () => {

    // Logo Spin
    logo.style.transform = "scale(1.2) rotate(720deg)";

    setTimeout(() => {
        logo.style.transform = "scale(1) rotate(0deg)";
    }, 800);

    // Change 420 Color
    title420.style.color = "#39ff14";
    title420.style.textShadow =
        "0 0 20px #39ff14, 0 0 50px #39ff14";

    setTimeout(() => {
        title420.style.color = "#00ff99";
        title420.style.textShadow =
            "0 0 15px #00ff99, 0 0 35px #00ff99";
    }, 800);

    // Screen Flash
    flashScreen();

    // Play Sound (optional)
    playClickSound();

});

// Flash Effect
function flashScreen() {

    const flash = document.createElement("div");

    flash.style.position = "fixed";
    flash.style.left = "0";
    flash.style.top = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.background = "#39ff14";
    flash.style.opacity = "0.35";
    flash.style.pointerEvents = "none";
    flash.style.zIndex = "999";

    document.body.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 180);

}

// Optional Click Sound
function playClickSound(){

    const audio = new Audio("click.mp3");

    audio.volume = 0.6;

    audio.play().catch(() => {

        // Ignore if sound file not found

    });

}

// Floating Title Animation
let up = true;

setInterval(() => {

    if(up){

        title420.style.transform = "translateY(-8px)";
        up = false;

    }else{

        title420.style.transform = "translateY(8px)";
        up = true;

    }

},600);

// Random Glow Pulse
setInterval(() => {

    logo.style.boxShadow =
        "0 0 30px #39ff14, 0 0 80px #39ff14";

    setTimeout(() => {

        logo.style.boxShadow =
            "0 0 20px #39ff14, 0 0 50px #39ff14";

    },400);

},2500);

// Welcome Message
window.onload = () => {

    console.log("🔥 TEAM 420 LOADED 🔥");

};
