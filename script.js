const intro = document.getElementById("intro");
const battle = document.getElementById("battle");
const finalScreen = document.getElementById("final");
const flash = document.getElementById("flash");
const start = document.getElementById("start");

const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.onresize = () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
};

// ===== STAR FIELD =====
const stars = [];

for (let i = 0; i < 300; i++) {
    stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        s: Math.random() * 2 + 1,
        v: Math.random() * 5 + 1
    });
}

function drawStars() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="white";

    stars.forEach(st=>{

        ctx.beginPath();

        ctx.arc(st.x,st.y,st.s,0,Math.PI*2);

        ctx.fill();

        st.x-=st.v;

        if(st.x<0){

            st.x=canvas.width;

            st.y=Math.random()*canvas.height;

        }

    });

    requestAnimationFrame(drawStars);

}

drawStars();

// ===== UFO =====

const ufos=document.querySelectorAll(".ufo");

setTimeout(()=>{

    battle.style.opacity=1;

    ufos.forEach((u,index)=>{

        u.animate([

            {
                transform:"translateX(0)"
            },

            {
                transform:"translateX(-180vw)"
            }

        ],{

            duration:5000+(index*700),

            iterations:1,

            fill:"forwards"

        });

    });

},5000);

// ===== LASER =====

function laser(){

    document.querySelectorAll(".laser").forEach((l,index)=>{

        l.style.opacity=1;

        l.style.top=(25+index*20)+"%";

        l.style.left="100%";

        l.animate([

            {
                transform:"translateX(0)"
            },

            {
                transform:"translateX(-220vw)"
            }

        ],{

            duration:900,

            iterations:1

        });

    });

}

setInterval(laser,700);

// ===== FLASH =====

function boom(){

    flash.animate([

        {opacity:0},

        {opacity:.9},

        {opacity:0}

    ],{

        duration:500

    });

}

setInterval(boom,1600);

// ===== SHOW FINAL =====

setTimeout(()=>{

    battle.style.opacity=0;

    finalScreen.style.opacity=1;

},12000);

// ===== START BUTTON =====

start.onclick=function(){

    window.location.href="home.html";

};
setTimeout(() => {
  document.getElementById("loading").style.display = "none";
  document.getElementById("home").style.display = "block";
}, 4000);
// ===== Logo Glow Pulse =====
const logo = document.getElementById("logo");

if (logo) {
    setInterval(() => {
        logo.animate(
            [
                {
                    transform: "scale(1)",
                    filter: "drop-shadow(0 0 20px #39ff14)"
                },
                {
                    transform: "scale(1.08)",
                    filter: "drop-shadow(0 0 50px #39ff14)"
                },
                {
                    transform: "scale(1)",
                    filter: "drop-shadow(0 0 20px #39ff14)"
                }
            ],
            {
                duration: 2000,
                iterations: 1
            }
        );
    }, 2000);
}
