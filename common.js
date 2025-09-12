import * as THREE from "three";

// === STARFIELD ===
const bgCanvas = document.getElementById("bg-canvas");
if (bgCanvas) {
  const ctx = bgCanvas.getContext("2d");
  function resizeBG(){ bgCanvas.width=innerWidth; bgCanvas.height=innerHeight; }
  window.addEventListener("resize", resizeBG); resizeBG();

  const stars = Array.from({length: 400}).map(() => ({
    x: Math.random()*bgCanvas.width,
    y: Math.random()*bgCanvas.height,
    r: Math.random()*1.6+0.4,
    color: ["#bbb","#999","#ccddee","#ddd","#aaa"][Math.floor(Math.random()*5)],
    tw: Math.random()*1000
  }));

  function drawStars(time){
    ctx.fillStyle="black"; ctx.fillRect(0,0,bgCanvas.width,bgCanvas.height);
    for(const s of stars){
      const flick=0.5+0.5*Math.sin(time*0.002+s.tw);
      ctx.fillStyle=s.color; ctx.globalAlpha=flick;
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
    } ctx.globalAlpha=1;
  }
  (function loop(t){ drawStars(t); requestAnimationFrame(loop); })(0);
}

// === AUDIO PLAYER ===
const audio=document.getElementById("bg-audio");
const playBtn=document.getElementById("play-btn");
const trackSelect=document.getElementById("track-select");

if(audio && playBtn && trackSelect){
  audio.volume=0.7;
  audio.src=trackSelect.value;

  playBtn.addEventListener("click",()=>{
    if(audio.paused){
      audio.play().then(()=>{ playBtn.textContent="⏸ Pause"; })
      .catch(err=>console.log("Audio error:",err));
    } else {
      audio.pause(); playBtn.textContent="▶ Play";
    }
  });

  trackSelect.addEventListener("change",()=>{
    audio.src=trackSelect.value;
    audio.play().then(()=>{ playBtn.textContent="⏸ Pause"; })
    .catch(err=>console.log("Audio error:",err));
  });
}

document.getElementById('year').textContent=new Date().getFullYear();
