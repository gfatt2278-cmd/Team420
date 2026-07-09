const story = 

Beyond the stars...

A mysterious UFO appeared from deep space.

Its glowing green beam pierced the darkness...

Revealing a mysterious symbol...

━━━━━━━━━━━━━━━━━━

The UFO represents
new ideas,
limitless imagination,
and the future.

Its beam symbolizes
hope,
new opportunities,
and endless possibilities.

At the center...

420

A symbol of
Trust...
Uniqueness...
Identity...

━━━━━━━━━━━━━━━━━━

Think Different.

Stay Creative.

Beyond Limits.

🚀 Beyond Limits

👽 Beyond Imagination

🌌 Create Your Own Universe

420 — Explore the Unknown.

;

const typing = document.getElementById("typing");
const btn = document.getElementById("startBtn");

let i = 0;

function typeWriter(){

    if(i < story.length){

        typing.innerHTML += story.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }

}

btn.addEventListener("click",()=>{

    btn.style.display="none";

    typing.innerHTML="";

    i=0;

    document.querySelector(".logo").classList.add("active");

    typeWriter();

});
