/* 3D rotating book: auto-spins, drag/swipe to turn it by hand */
(function(){
  var stage=document.querySelector('.b3-stage'); if(!stage) return;
  var book=stage.querySelector('.b3-book');
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var ry=-28, rx=-8, vel=reduce?0:0.35, drag=false, lx=0, ly=0, idle=0;
  function draw(){book.style.transform='rotateX('+rx+'deg) rotateY('+ry+'deg)';}
  function tick(){
    if(!drag){ idle++; if(idle>90 && !reduce){ vel+=(0.35-vel)*0.03; rx+=(-8-rx)*0.04; } ry+=vel; }
    draw(); requestAnimationFrame(tick);
  }
  function down(e){drag=true;idle=0;var p=e.touches?e.touches[0]:e;lx=p.clientX;ly=p.clientY;}
  function move(e){ if(!drag) return; var p=e.touches?e.touches[0]:e;
    var dx=p.clientX-lx, dy=p.clientY-ly; lx=p.clientX; ly=p.clientY;
    ry+=dx*0.6; vel=dx*0.25; rx=Math.max(-30,Math.min(20,rx-dy*0.3)); }
  function up(){drag=false;idle=0;}
  stage.addEventListener('mousedown',down); window.addEventListener('mousemove',move); window.addEventListener('mouseup',up);
  stage.addEventListener('touchstart',down,{passive:true}); window.addEventListener('touchmove',move,{passive:true}); window.addEventListener('touchend',up);
  requestAnimationFrame(tick);
  /* gentle falling cards & dice in the background */
  if(!reduce){
    var fx=document.createElement('div'); fx.className='b3-fx'; fx.setAttribute('aria-hidden','true');
    var icons=['🎲','🃏','⭐','♠️','♥️','🏆','✨','♦️','♣️'];
    for(var i=0;i<14;i++){ var s=document.createElement('span'); s.textContent=icons[i%icons.length];
      s.style.left=(Math.random()*100)+'%'; s.style.fontSize=(16+Math.random()*16)+'px';
      s.style.animationDuration=(14+Math.random()*16)+'s'; s.style.animationDelay=(-Math.random()*30)+'s';
      fx.appendChild(s); }
    document.body.insertBefore(fx,document.body.firstChild);
  }
})();
