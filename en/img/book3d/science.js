/* Murphy's Science Quiz - kids about 10 years old */
(function(){
  var box=document.getElementById('science'); if(!box) return;
  var Q=[
    ['Which planet is closest to the Sun?',['Mercury','Venus','Mars'],'Mercury is the smallest planet and the closest to the Sun. A year there lasts only 88 Earth days!'],
    ['What gas do plants take in from the air to make their food?',['Carbon dioxide','Oxygen','Helium'],'Plants use carbon dioxide, water and sunlight to make food, and they give out the oxygen we breathe.'],
    ['How many legs does a spider have?',['8','6','10'],'Spiders have 8 legs, so they are not insects. Insects have 6.'],
    ['What is the biggest planet in our solar system?',['Jupiter','Saturn','Earth'],'Jupiter is so big that more than 1,000 Earths could fit inside it.'],
    ['At what temperature does water freeze?',['0 °C','10 °C','−10 °C'],'Water turns into ice at 0 degrees Celsius.'],
    ['Which of these animals is a mammal?',['Whale','Shark','Salmon'],'Whales breathe air and feed their babies milk, just like us. Sharks and salmon are fish.'],
    ['What force pulls things down to the ground?',['Gravity','Magnetism','Wind'],'Gravity pulls everything towards the Earth. That is why a dropped ball always falls down.'],
    ['What do bees make?',['Honey','Milk','Silk'],'Bees make honey from the nectar of flowers. Silk comes from silkworms.'],
    ['Which organ pumps blood around your body?',['The heart','The lungs','The stomach'],'Your heart is a muscle about the size of your fist and it beats about 100,000 times a day.'],
    ['How many bones does an adult human have?',['206','106','306'],'Adults have 206 bones. Babies are born with more, and some of them join together as they grow.'],
    ['What is the closest star to Earth?',['The Sun','The North Star','The Moon'],'The Sun is a star! The Moon is not a star: it does not make its own light.'],
    ['Why does the Moon shine at night?',['It reflects sunlight','It is on fire','It has giant lamps'],'The Moon has no light of its own. It shines because sunlight bounces off it.'],
    ['What do caterpillars turn into?',['Butterflies or moths','Beetles','Bees'],'Inside a chrysalis or cocoon, a caterpillar changes into a butterfly or a moth. This change is called metamorphosis.'],
    ['What do we call animals that eat only plants?',['Herbivores','Carnivores','Omnivores'],'Herbivores eat plants, carnivores eat meat, and omnivores (like most people) eat both.'],
    ['Which planet is called the Red Planet?',['Mars','Venus','Jupiter'],'Mars looks red because its soil has a lot of rusty iron in it.'],
    ['What does a thermometer measure?',['Temperature','Weight','Speed'],'A thermometer tells you how hot or cold something is.'],
    ['Which travels faster?',['Light','Sound','They are the same'],'Light is much faster than sound. That is why you see lightning before you hear the thunder.'],
    ['What is the hardest natural material?',['Diamond','Gold','Iron'],'Diamond is the hardest natural material. It is made of carbon, like pencil lead!'],
    ['How long does the Earth take to go around the Sun?',['About one year','One day','One month'],'One trip around the Sun takes about 365 days. One spin on itself takes one day.'],
    ['Which part of a plant takes in water from the soil?',['The roots','The leaves','The flowers'],'Roots drink water and hold the plant firmly in the ground.'],
    ['Which of these will a magnet pick up?',['An iron paper clip','A plastic spoon','A wooden pencil'],'Magnets attract iron and steel. Plastic and wood are not magnetic.'],
    ['What do frogs start their life as?',['Tadpoles','Caterpillars','Chicks'],'Frogs hatch from eggs as tadpoles that live in water, then grow legs and become frogs.'],
    ['What is the layer of air around the Earth called?',['The atmosphere','The crust','The core'],'The atmosphere protects us from the Sun\'s strongest rays and keeps the planet warm.'],
    ['At what temperature does water boil (at sea level)?',['100 °C','50 °C','200 °C'],'At sea level water boils at 100 degrees Celsius. High on a mountain it boils at a lower temperature!'],
    ['What makes a rainbow?',['Sunlight passing through raindrops','Paint in the clouds','The wind'],'Raindrops split white sunlight into all its colours: red, orange, yellow, green, blue, indigo and violet.'],
    ['What is the biggest animal that has ever lived?',['The blue whale','The elephant','The T. rex'],'The blue whale can be about 30 metres long: bigger than any dinosaur.'],
    ['Which gas from the air does your body need to live?',['Oxygen','Carbon dioxide','Helium'],'Your lungs take oxygen from the air, and your blood carries it all around your body.'],
    ['How many planets are there in our solar system?',['8','9','12'],'There are 8 planets. Pluto was called a dwarf planet in 2006.'],
    ['Which animal is on the Canadian 5-cent coin?',['A beaver','A moose','A loon'],'The beaver has been on the nickel since 1937. The loon is on the one-dollar coin: that is why it is called the loonie!'],
    ['What comes out of an erupting volcano?',['Lava (melted rock)','Snow','Sea water'],'Lava is rock so hot that it melts. When it cools down it becomes hard rock again.']
  ];
  function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
  var ROUND=10, set=[], n=0, score=0;
  var qn=document.getElementById('qzN'), qt=document.getElementById('qzQ'), ops=document.getElementById('qzOps'),
      fb=document.getElementById('qzFb'), nx=document.getElementById('qzNext'), sc=document.getElementById('qzScore');
  function start(){ set=shuffle(Q).slice(0,ROUND); n=0; score=0; show(); }
  function show(){
    var q=set[n]; qn.textContent='Question '+(n+1)+' of '+ROUND; sc.textContent='Score: '+score;
    qt.textContent=q[0]; ops.innerHTML=''; fb.innerHTML=''; fb.className='qzfb'; nx.style.display='none';
    shuffle(q[1].map(function(t,i){return [t,i===0]})).forEach(function(o){
      var b=document.createElement('button'); b.type='button'; b.textContent=o[0];
      b.addEventListener('click',function(){ answer(b,o[1],q); }); ops.appendChild(b);
    });
  }
  function answer(b,ok,q){
    [].forEach.call(ops.children,function(x){x.disabled=true; if(x.textContent===q[1][0]) x.classList.add('ok');});
    if(ok){score++; fb.className='qzfb good'; fb.innerHTML='<b>Correct!</b> '+q[2];}
    else{b.classList.add('no'); fb.className='qzfb bad'; fb.innerHTML='<b>Oops! Blame Murphy.</b> The answer is <b>'+q[1][0]+'</b>. '+q[2];}
    sc.textContent='Score: '+score;
    nx.textContent=n<ROUND-1?'Next question':'See my score'; nx.style.display='block';
  }
  var finished=false;
  nx.addEventListener('click',function(){
    if(finished){finished=false;start();return}
    if(n<ROUND-1){n++;show();return}
    var msg=score>=9?'Science Champion! 🏆':score>=6?'Great scientist! 🔬':'Murphy says: whoever loses plays again! 🎲';
    qn.textContent='Finished!'; qt.textContent='You got '+score+' out of '+ROUND+'. '+msg; ops.innerHTML=''; fb.innerHTML='';fb.className='qzfb';
    nx.textContent='Play again (new questions)'; finished=true; if(score>=6 && typeof confetti==='function') confetti();
  });
  start();
})();
