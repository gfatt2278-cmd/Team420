// ==============================
// TEAM 420 Professional Script
// ==============================

// Page Load Animation
window.addEventListener("load", () => {
    document.body.style.opacity = "0";

    setTimeout(() => {
        document.body.style.transition = "opacity 1.5s";
        document.body.style.opacity = "1";
    }, 200);
});

// ENTER Button
const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {

        enterBtn.innerHTML = "WELCOME 👽";

        enterBtn.style.background = "#00ff66";

        setTimeout(() => {
            alert("👽 Welcome To TEAM 420 👽");
        }, 300);

    });
}

// ==============================
// Random Stars
// ==============================

for (let i = 0; i < 80; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = Math.random() * window.innerHeight + "px";

    star.style.animationDuration = (2 + Math.random() * 4) + "s";

    document.body.appendChild(star);

}

// ==============================
// UFO Laser
// ==============================

const ufo = document.querySelector(".ufo");

if (ufo) {

    setInterval(() => {

        const laser = document.createElement("div");

        laser.className = "laser";

        laser.style.left = (
