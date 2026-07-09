const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
});

// ===== Stars =====
let stars = [];

for(let i=0;i<250;i++){
    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        s:Math.random()*3+1,
        v:Math.random()*4+1
    });
}

// ===== UFO =====
let ufos=[];

function createUFO(){

    ufos.push({

        x:canvas.width+100,

        y:80+Math.random()*(canvas.height-160),

        w:70,

        h:35,

        speed:4+Math.random()*4

    });

}

setInterval(createUFO,800);

// ===== Laser =====
let lasers=[];

function fireLaser(x,y){

    lasers.push({

        x:x,

        y:y,

        r:4,

        speed:12

    });

}

// ===== Explosion =====
let explosions=[];

function explode(x,y){

    explosions.push({

        x:x,

        y:y,

        r:1,

        alpha:1

    });

}

setInterval(()=>{

    ufos.forEach(u=>{

        fireLaser(u.x,u.y+15);

    });

},700);

// ===== Draw =====
function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // Stars

    ctx.fillStyle="white";

    stars.forEach(s=>{

        ctx.beginPath();

        ctx.arc(s.x,s.y,s.s,0,Math.PI*2);

        ctx.fill();

        s.x-=s.v;

        if(s.x<0){

            s.x=canvas.width;

            s.y=Math.random()*canvas.height;

        }

    });

    // UFO

    ufos.forEach((u,index)=>{

        u.x-=u.speed;

        ctx.fillStyle="#00ff66";

        ctx.beginPath();

        ctx.ellipse(u.x,u.y,u.w/2,u.h/2,0,0,Math.PI*2);

        ctx.fill();

        ctx.fillStyle="#66ffff";

        ctx.beginPath();

        ctx.arc(u.x,u.y-12,15,0,Math.PI*2);

        ctx.fill();

        if(u.x<-100){

            explode(u.x,u.y);

            ufos.splice(index,1);

        }

    });

    // Laser

    lasers.forEach((l,index)=>{

        l.x-=l.speed;

        ctx.strokeStyle="red";

        ctx.lineWidth=3;

        ctx.beginPath();

        ctx.moveTo(l.x,l.y);

        ctx.lineTo(l.x-20,l.y);

        ctx.stroke();

        if(l.x<0){

            lasers.splice(index,1);

        }

    });

    // Explosion

    explosions.forEach((e,index)=>{

        ctx.beginPath();

        ctx.arc(e.x,e.y,e.r,0,Math.PI*2);

        ctx.fillStyle="rgba(255,180,0,"+e.alpha+")";

        ctx.fill();

        e.r+=3;

        e.alpha-=0.04;

        if(e.alpha<=0){

            explosions.splice(index,1);

        }

    });

    requestAnimationFrame(draw);

}

draw();

// ===== START =====

document.getElementById("startBtn").onclick=function(){

    document.getElementById("intro").style.opacity="0";

    setTimeout(()=>{

        document.getElementById("intro").style.display="none";

        document.getElementById("battle").style.display="block";

    },900);

    // 8 sec later show TEAM420 logo

    setTimeout(()=>{

        document.getElementById("teamLogo").style.display="block";

    },8000);

};
// ===== Camera Flash =====
function flashScreen() {
    const flash = document.createElement("div");

    flash.style.position = "fixed";
    flash.style.left = "0";
    flash.style.top = "0";
    flash.style.width = "100%";
    flash.style.height = "100%";
    flash.style.background = "#fff";
    flash.style.opacity = "0.9";
    flash.style.pointerEvents = "none";
    flash.style.zIndex = "9999";
    flash.style.transition = "opacity .5s";

    document.body.appendChild(flash);

    setTimeout(() => {
        flash.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        flash.remove();
    }, 700);
}

// ===== Camera Shake =====
function shake() {

    document.body.style.animation = "shake .4s";

    setTimeout(() => {
        document.body.style.animation = "";
    }, 400);

}

// ===== Ending =====
setTimeout(() => {

    flashScreen();

    shake();

    const end = document.createElement("div");

    end.innerHTML = 
    <h1>MISSION COMPLETE</h1>
    <h2>TEAM 420</h2>
    ;

    end.style.position = "fixed";
    end.style.left = "50%";
    end.style.top = "50%";
    end.style.transform = "translate(-50%,-50%)";
    end.style.color = "#39ff14";
    end.style.textAlign = "center";
    end.style.zIndex = "99999";
    end.style.textShadow = "0 0 30px #39ff14";

    document.body.appendChild(end);

}, 15000);
