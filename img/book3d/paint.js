/* Colour Murphy on the phone: tap-to-fill, brush, undo, save */
(function(){
  var modal=document.getElementById('paint'); if(!modal) return;
  var cv=document.getElementById('pcv'), ctx=cv.getContext('2d',{willReadFrequently:true});
  var KEY=modal.getAttribute('data-key')||'murphy-paint-en-', DIR=modal.getAttribute('data-dir')||'colour';
  var COLORS=['#e23d32','#f28a1b','#f2c21b','#ffe98a','#36a852','#9fd36b','#1FA3A3','#2f6fe0','#8fc4ff','#8a4fd1','#f06aa6','#ffc2a1','#8b5a2b','#d9b38c','#8f969c','#2b2b2b','#ffffff'];
  var col=COLORS[0], mode='fill', cur=0, line=null, undo=[], drawing=false, lx=0, ly=0;
  var pal=document.getElementById('ppal');
  COLORS.forEach(function(c,i){var b=document.createElement('button');b.type='button';b.style.background=c;b.setAttribute('aria-label','Colour '+c);if(i===0)b.classList.add('on');
    b.addEventListener('click',function(){col=c;[].forEach.call(pal.children,function(x){x.classList.toggle('on',x===b)})});pal.appendChild(b)});
  function setMode(m){mode=m;document.getElementById('pfill').classList.toggle('on',m==='fill');document.getElementById('pbrush').classList.toggle('on',m==='brush')}
  document.getElementById('pfill').addEventListener('click',function(){setMode('fill')});
  document.getElementById('pbrush').addEventListener('click',function(){setMode('brush')});
  function hex(c){return [parseInt(c.substr(1,2),16),parseInt(c.substr(3,2),16),parseInt(c.substr(5,2),16)]}
  function push(){undo.push(ctx.getImageData(0,0,cv.width,cv.height)); if(undo.length>15) undo.shift();}
  function store(){try{localStorage.setItem(KEY+cur,cv.toDataURL('image/jpeg',0.85))}catch(e){}}
  function restoreLines(){ var im=ctx.getImageData(0,0,cv.width,cv.height),d=im.data; for(var i=0,p=0;i<line.length;i++,p+=4){ if(line[i]<255){d[p]=d[p+1]=d[p+2]=line[i];} } ctx.putImageData(im,0,0); }
  function open(n){
    cur=n; undo=[]; setMode('fill');
    var img=new Image();
    img.onload=function(){
      cv.width=img.naturalWidth; cv.height=img.naturalHeight;
      ctx.fillStyle='#fff'; ctx.fillRect(0,0,cv.width,cv.height); ctx.drawImage(img,0,0);
      var d=ctx.getImageData(0,0,cv.width,cv.height).data; line=new Uint8Array(cv.width*cv.height);
      for(var i=0,p=0;i<line.length;i++,p+=4){ line[i]=d[p]<200?d[p]:255; }
      var saved=null; try{saved=localStorage.getItem(KEY+n)}catch(e){}
      if(saved){ var s=new Image(); s.onload=function(){ctx.drawImage(s,0,0,cv.width,cv.height);restoreLines()}; s.src=saved; }
    };
    img.src=DIR+'/c'+(n<10?'0':'')+n+'.png';
    modal.classList.add('show'); document.body.style.overflow='hidden';
  }
  function close(){ modal.classList.remove('show'); document.body.style.overflow=''; }
  document.querySelectorAll('[data-paint]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();open(+b.dataset.paint)})});
  document.getElementById('pclose').addEventListener('click',close);
  function pos(e){var r=cv.getBoundingClientRect(),p=e.touches?e.touches[0]:e;return [Math.floor((p.clientX-r.left)*cv.width/r.width),Math.floor((p.clientY-r.top)*cv.height/r.height)]}
  function fill(x,y){
    var W=cv.width,H=cv.height; if(x<0||y<0||x>=W||y>=H) return; if(line[y*W+x]<255) return;
    var im=ctx.getImageData(0,0,W,H),d=im.data,i0=(y*W+x)*4,t=[d[i0],d[i0+1],d[i0+2]],c=hex(col);
    if(t[0]===c[0]&&t[1]===c[1]&&t[2]===c[2]) return; push();
    var st=[x,y],seen=new Uint8Array(W*H);
    function m(k){var p=k*4;return line[k]===255&&!seen[k]&&Math.abs(d[p]-t[0])<40&&Math.abs(d[p+1]-t[1])<40&&Math.abs(d[p+2]-t[2])<40}
    while(st.length){ var yy=st.pop(),xx=st.pop(),k=yy*W+xx;
      while(xx>0&&m(k-1)){xx--;k--}
      var up=false,dn=false;
      while(xx<W&&m(k)){ seen[k]=1; var p=k*4; d[p]=c[0];d[p+1]=c[1];d[p+2]=c[2];d[p+3]=255;
        if(yy>0){ if(m(k-W)){ if(!up){st.push(xx,yy-1);up=true} } else up=false }
        if(yy<H-1){ if(m(k+W)){ if(!dn){st.push(xx,yy+1);dn=true} } else dn=false }
        xx++;k++; } }
    ctx.putImageData(im,0,0); store();
  }
  function dot(x,y,x2,y2){ctx.strokeStyle=col;ctx.lineWidth=Math.max(10,cv.width/45);ctx.lineCap='round';ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x2,y2);ctx.stroke()}
  function down(e){ e.preventDefault(); var p=pos(e); if(mode==='fill'){fill(p[0],p[1]);return} push(); drawing=true; lx=p[0]; ly=p[1]; dot(lx,ly,lx,ly); }
  function move(e){ if(!drawing) return; e.preventDefault(); var p=pos(e); dot(lx,ly,p[0],p[1]); lx=p[0]; ly=p[1]; }
  function up(){ if(!drawing) return; drawing=false; restoreLines(); store(); }
  cv.addEventListener('mousedown',down); cv.addEventListener('mousemove',move); window.addEventListener('mouseup',up);
  cv.addEventListener('touchstart',down,{passive:false}); cv.addEventListener('touchmove',move,{passive:false}); cv.addEventListener('touchend',up);
  document.getElementById('pundo').addEventListener('click',function(){ if(undo.length){ctx.putImageData(undo.pop(),0,0);store()} });
  document.getElementById('pclear').addEventListener('click',function(){ push(); var im=ctx.getImageData(0,0,cv.width,cv.height),d=im.data; for(var i=0,p=0;i<line.length;i++,p+=4){d[p]=d[p+1]=d[p+2]=line[i];d[p+3]=255} ctx.putImageData(im,0,0); try{localStorage.removeItem(KEY+cur)}catch(e){} });
  document.getElementById('psave').addEventListener('click',function(){ cv.toBlob(function(b){ var a=document.createElement('a'); a.href=URL.createObjectURL(b); a.download=(modal.getAttribute('data-file')||'my-murphy-drawing-')+cur+'.png'; document.body.appendChild(a); a.click(); setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},1000); },'image/png'); });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape') close(); });
})();
