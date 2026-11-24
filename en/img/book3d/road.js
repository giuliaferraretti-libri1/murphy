/* Road-trip games (played by looking out of the window) */
(function(){
  var $=function(id){return document.getElementById(id)};
  if(!$('road')) return;
  var KEY='murphy-road-en';
  var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function pick(a){return a[Math.floor(Math.random()*a.length)]}
  function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
  function party(){ if(typeof confetti==='function') confetti(); }

  /* tabs */
  document.querySelectorAll('.rt').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.rt').forEach(function(x){x.classList.toggle('on',x===b)});
      document.querySelectorAll('.rp').forEach(function(p){p.classList.toggle('on',p.id==='rp-'+b.dataset.t)});
    });
  });

  /* 1. Car Bingo */
  var THINGS=[['🚌','Yellow school bus'],['🚚','Big truck'],['🐄','Cow'],['🐴','Horse'],['🌉','Bridge'],['⛽','Gas station'],['🚓','Police car'],['🏍️','Motorbike'],['🛑','Stop sign'],['🍁','Maple leaf'],['🚜','Tractor'],['🌊','River or lake'],['🚲','Bicycle'],['🚒','Fire truck'],['🐕','Dog'],['🚂','Train'],['⛪','Church'],['🌲','Pine forest'],['🏁','Red car'],['🚐','Camper van'],['🦅','Big bird'],['🚧','Road works'],['🏔️','Hill or mountain'],['🚙','Blue car'],['🛻','Pick-up truck'],['🐑','Sheep'],['🌽','Corn field'],['🏠','Red roof'],['🚦','Traffic light'],['✈️','Plane in the sky']];
  var bingo=$('bingo'), cells=[], won=false;
  function lines(){var L=[],i,j;for(i=0;i<4;i++){L.push([0,1,2,3].map(function(j){return i*4+j}));L.push([0,1,2,3].map(function(j){return j*4+i}))}L.push([0,5,10,15]);L.push([3,6,9,12]);return L}
  function newCard(){
    bingo.innerHTML='';cells=[];won=false;
    shuffle(THINGS).slice(0,16).forEach(function(t){
      var b=document.createElement('button');b.type='button';b.innerHTML='<span>'+t[0]+'</span>'+t[1];
      b.addEventListener('click',function(){b.classList.toggle('on');check()});
      bingo.appendChild(b);cells.push(b);
    });
  }
  function check(){
    cells.forEach(function(c){c.classList.remove('win')});
    var hit=lines().filter(function(l){return l.every(function(k){return cells[k].classList.contains('on')})});
    hit.forEach(function(l){l.forEach(function(k){cells[k].classList.add('win')})});
    if(hit.length&&!won){won=true;party()} if(!hit.length) won=false;
  }
  $('newBingo').addEventListener('click',newCard); newCard();

  /* 2. Alphabet Hunt */
  var AB='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), pos=0, abc=$('abc');
  try{pos=Math.min(26,parseInt(localStorage.getItem(KEY+'-abc')||'0',10)||0)}catch(e){}
  AB.forEach(function(l){var d=document.createElement('div');d.textContent=l;abc.appendChild(d)});
  function paintAbc(){
    [].forEach.call(abc.children,function(d,i){d.className=i<pos?'got':(i===pos?'now':'')});
    $('abcNext').textContent=pos>=26?'You found them all! 🏆':'Found '+AB[pos]+'!';
    try{localStorage.setItem(KEY+'-abc',String(pos))}catch(e){}
  }
  $('abcNext').addEventListener('click',function(){ if(pos<26){pos++;paintAbc(); if(pos===26) party();} });
  $('abcReset').addEventListener('click',function(){pos=0;paintAbc()});
  paintAbc();

  /* 3. Murphy's Road Dice */
  var DICE=[
    ['Colour hunt','First to spot 5 white cars wins. Whoever loses picks the next song… and plays again!'],
    ['Silent game','Nobody talks until the next bridge or traffic light. First one to laugh starts the next round.'],
    ['Murphy story','Tell a story one sentence each. Every sentence must start with “Unfortunately…” or “Luckily…”.'],
    ['Sign detective','Find a sign with a number. Add up the digits: highest total wins.'],
    ['I spy','“I spy with my little eye something beginning with…” Three wrong guesses? The guesser gets a hint.'],
    ['Animal sounds','Spot an animal outside and make its sound. The driver guesses which animal it is.'],
    ['Backwards champion','Count from 20 down to 1 as fast as you can. Muddled up? Murphy did it! Try again.'],
    ['Shape spotter','Find something round, something square and something triangle-shaped out of the window.'],
    ['Number plate jokes','Read the letters of a number plate and invent a silly phrase with them (ABC = “Aliens Bake Cookies”).'],
    ['20 questions','Think of an animal. The others ask yes/no questions, up to 20. The driver can play too!'],
    ['Rhyme time','Say a word you see outside. Everybody finds a rhyme. First one stuck says “Blame Murphy!”.'],
    ['Weather reporter','Give a TV-style weather report of what you see right now. Best accent wins.'],
    ['Odd one out','Name three things: two that go together and one that does not. The others find the odd one.'],
    ['Colour of the day','Choose a colour. Count all the cars of that colour until the next stop.'],
    ['Category race','Pick a category (food, animals, names). Take turns naming one each. Stuck? You lose… and play again!'],
    ['Thank-you round','Everyone says one thing that went wrong today and one thing that went right.']
  ];
  var die=$('die'), dout=$('dout'), last=-1, rolling=false;
  var PIPS={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]};
  var dots=die.querySelectorAll('i');
  function face(n){dots.forEach(function(d,k){d.classList.toggle('on',PIPS[n].indexOf(k)>=0)}); die.setAttribute('aria-label','Dice shows '+n+'. Tap to roll again');}
  face(1+Math.floor(Math.random()*6));
  die.addEventListener('click',function(){
    if(rolling) return; rolling=true;
    var n=1+Math.floor(Math.random()*6), i; do{i=Math.floor(Math.random()*DICE.length)}while(i===last); last=i;
    die.classList.remove('roll'); void die.offsetWidth; if(!reduce) die.classList.add('roll');
    dout.style.opacity=.3;
    var steps=reduce?0:8, k=0;
    (function spin(){ if(k++<steps){face(1+Math.floor(Math.random()*6)); setTimeout(spin,80);} else {
      face(n);
      dout.innerHTML='<div><b>You rolled '+n+'! · '+DICE[i][0]+'</b>'+DICE[i][1]+'</div>'; dout.style.opacity=1; rolling=false; } })();
  });


  /* 5. Colour Hunt */
  if($('cdot')){
    var COLS=[['RED','#e23d32'],['BLUE','#2f6fe0'],['YELLOW','#f2c21b'],['GREEN','#36a852'],['ORANGE','#f28a1b'],['PURPLE','#8a4fd1'],['PINK','#f06aa6'],['WHITE','#f4f1ea'],['BLACK','#2b2b2b'],['BROWN','#8b5a2b'],['GREY','#8f969c'],['SILVER','#c8cdd2']];
    var cdot=$('cdot'), cname=$('cname'), ctime=$('ctime'), lastC=-1, timer=null, left=0;
    var pl=[['Mum',0],['Dad',0],['Me',0],['Friend',0]];
    try{var sv=JSON.parse(localStorage.getItem(KEY+'-col')||'null'); if(sv&&sv.length===4) pl=sv;}catch(e){}
    function saveP(){try{localStorage.setItem(KEY+'-col',JSON.stringify(pl))}catch(e){}}
    var box=$('cplayers');
    function drawP(){
      box.innerHTML='';
      pl.forEach(function(p,i){
        var d=document.createElement('div'); d.className='cpl';
        var inp=document.createElement('input'); inp.value=p[0]; inp.setAttribute('aria-label','Player name');
        inp.addEventListener('input',function(){pl[i][0]=inp.value;saveP()});
        var b=document.createElement('b'); b.textContent=p[1];
        var btn=document.createElement('button'); btn.type='button'; btn.textContent='+1';
        btn.addEventListener('click',function(){
          pl[i][1]++; b.textContent=pl[i][1]; saveP(); stop('Point to '+(pl[i][0]||'player')+'!');
          if(pl[i][1]===10){ party(); ctime.textContent='🏆 '+(pl[i][0]||'Player')+' is the Colour Champion!'; }
        });
        d.appendChild(inp); d.appendChild(b); d.appendChild(btn); box.appendChild(d);
      });
    }
    function stop(msg){ if(timer){clearInterval(timer);timer=null} ctime.textContent=msg||''; }
    $('cnew').addEventListener('click',function(){
      var i; do{i=Math.floor(Math.random()*COLS.length)}while(i===lastC); lastC=i;
      cdot.style.background=COLS[i][1]; cname.textContent=COLS[i][0];
      cname.style.color=(COLS[i][0]==='WHITE'||COLS[i][0]==='SILVER'||COLS[i][0]==='YELLOW')?'#2b2b2b':'#fff';
      cdot.classList.remove('pop'); void cdot.offsetWidth; cdot.classList.add('pop');
      stop(); left=30; ctime.textContent='⏱ '+left+' s';
      timer=setInterval(function(){ left--; if(left<=0){ stop('Time\'s up! Murphy hid it. New colour!'); } else ctime.textContent='⏱ '+left+' s'; },1000);
    });
    $('creset').addEventListener('click',function(){ pl.forEach(function(p){p[1]=0}); saveP(); drawP(); stop(); });
    drawP();
  }
  /* 4. Would you rather? */
  var Q=['Would you rather be able to fly or be invisible?','Would you rather live in a treehouse or a submarine?','Would you rather have a dragon or a unicorn as a pet?','Would you rather never lose a game, or always laugh when you lose?','Would you rather eat only pizza or only ice cream for a week?','Would you rather talk to animals or speak every language?','Would you rather be a giant or as tiny as an ant for a day?','Would you rather go to space or to the bottom of the ocean?','Would you rather have a robot that does your homework or one that cleans your room?','Would you rather snow every day or summer every day?','Would you rather be the best player or the funniest player in the team?','Would you rather have a car that flies or a car that swims?','Would you rather live in a castle or on a pirate ship?','Would you rather have three eyes or four arms?','Would you rather make a mistake and laugh, or never try at all?','Would you rather be a famous singer or a famous inventor?','Would you rather have no homework or no bedtime?','Would you rather meet a friendly ghost or a friendly alien?','Would you rather sleep in a tent in the woods or in a hotel at the top of a skyscraper?','Would you rather have hair that changes colour with your mood or a nose that glows in the dark?'];
  var order=shuffle(Q), qi=0;
  $('qnext').addEventListener('click',function(){ if(qi>=order.length){order=shuffle(Q);qi=0} $('qcard').textContent=order[qi++]; });
})();
