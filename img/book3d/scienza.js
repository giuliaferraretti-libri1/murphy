/* Il quiz di scienze di Murphy - tre fasce d'età */
(function(){
  if(!document.getElementById('scienza')) return;
  var F={
 "7-8": [
  [
   "Quante zampe ha un ragno?",
   [
    "8",
    "6",
    "4"
   ],
   "I ragni hanno 8 zampe: per questo non sono insetti, che invece ne hanno 6."
  ],
  [
   "Cosa producono le api?",
   [
    "Il miele",
    "Il latte",
    "La seta"
   ],
   "Le api fanno il miele con il nettare dei fiori. La seta invece la fanno i bachi da seta."
  ],
  [
   "Quale di questi animali depone le uova?",
   [
    "La gallina",
    "La mucca",
    "Il cane"
   ],
   "La gallina depone le uova. Mucca e cane fanno nascere i cuccioli dalla pancia."
  ],
  [
   "Quando l'acqua diventa ghiaccio?",
   [
    "Quando fa molto freddo",
    "Quando fa molto caldo",
    "Quando c'è vento"
   ],
   "L'acqua si trasforma in ghiaccio a 0 gradi: per questo d'inverno le pozzanghere gelano."
  ],
  [
   "In cosa si trasforma il bruco?",
   [
    "In una farfalla",
    "In un'ape",
    "In un ragno"
   ],
   "Il bruco si chiude nel bozzolo e ne esce farfalla. Questa magia si chiama metamorfosi."
  ],
  [
   "Da dove arriva la luce del giorno?",
   [
    "Dal Sole",
    "Dalla Luna",
    "Dalle nuvole"
   ],
   "La luce del giorno arriva dal Sole, che è una stella enorme e vicinissima a noi."
  ],
  [
   "Di cosa hanno bisogno le piante per crescere?",
   [
    "Acqua, luce e terra",
    "Solo buio",
    "Solo sale"
   ],
   "Senza acqua e luce una pianta non cresce: prova a lasciarne una al buio e vedrai!"
  ],
  [
   "In cosa si trasforma il girino?",
   [
    "In una rana",
    "In un pesce",
    "In una lucertola"
   ],
   "Il girino vive nell'acqua; poi gli crescono le zampe, perde la coda e diventa rana."
  ],
  [
   "Con quale parte del corpo sentiamo i suoni?",
   [
    "Le orecchie",
    "Gli occhi",
    "Le mani"
   ],
   "Le orecchie raccolgono i suoni e li mandano al cervello."
  ],
  [
   "Quale stagione viene dopo l'inverno?",
   [
    "La primavera",
    "L'estate",
    "L'autunno"
   ],
   "Dopo l'inverno arriva la primavera: le giornate si allungano e i fiori sbocciano."
  ],
  [
   "Cosa attira una calamita?",
   [
    "Un chiodo di ferro",
    "Un foglio di carta",
    "Un tappo di sughero"
   ],
   "Le calamite attirano il ferro. Carta e sughero non si muovono."
  ],
  [
   "Su quale pianeta viviamo?",
   [
    "La Terra",
    "Marte",
    "Giove"
   ],
   "Viviamo sulla Terra, il terzo pianeta in ordine di distanza dal Sole."
  ],
  [
   "Di cosa sono fatte le nuvole?",
   [
    "Di goccioline d'acqua",
    "Di zucchero filato",
    "Di fumo"
   ],
   "Le nuvole sono milioni di goccioline d'acqua piccolissime. Quando diventano pesanti, piove!"
  ],
  [
   "Cosa succede al ghiacciolo lasciato al sole?",
   [
    "Si scioglie",
    "Diventa più duro",
    "Cambia gusto"
   ],
   "Il calore trasforma il ghiaccio di nuovo in acqua: si scioglie."
  ],
  [
   "Cosa usano i pesci per nuotare?",
   [
    "Le pinne",
    "Le ali",
    "Le zampe"
   ],
   "Con le pinne e la coda i pesci si spingono e cambiano direzione nell'acqua."
  ]
 ],
 "8-9": [
  [
   "Che forma ha la Terra?",
   [
    "Quasi una palla",
    "Piatta come un piatto",
    "Un cubo"
   ],
   "La Terra è quasi una sfera, un po' schiacciata ai poli. Lo si vede bene dalle foto scattate dallo spazio."
  ],
  [
   "Quale di questi animali è un mammifero?",
   [
    "Il delfino",
    "Lo squalo",
    "Il tonno"
   ],
   "Il delfino respira aria e allatta i piccoli, come noi. Squalo e tonno sono pesci."
  ],
  [
   "Con cosa respirano i pesci?",
   [
    "Con le branchie",
    "Con il naso",
    "Con la coda"
   ],
   "Le branchie prendono l'ossigeno sciolto nell'acqua."
  ],
  [
   "Come si chiamano gli animali che mangiano solo piante?",
   [
    "Erbivori",
    "Carnivori",
    "Onnivori"
   ],
   "Gli erbivori mangiano erba e piante, come la mucca e il coniglio."
  ],
  [
   "Quante ali ha una farfalla?",
   [
    "4",
    "2",
    "6"
   ],
   "La farfalla ha 4 ali: due davanti e due dietro."
  ],
  [
   "Quale di questi animali vola?",
   [
    "Il pipistrello",
    "Il pinguino",
    "Lo struzzo"
   ],
   "Il pipistrello vola anche se è un mammifero. Pinguino e struzzo sono uccelli che non volano!"
  ],
  [
   "Quante zampe ha un insetto?",
   [
    "6",
    "8",
    "10"
   ],
   "Tutti gli insetti hanno 6 zampe: formiche, api, coccinelle…"
  ],
  [
   "Come si chiamano gli animali che mangiano sia piante che carne?",
   [
    "Onnivori",
    "Erbivori",
    "Carnivori"
   ],
   "Gli onnivori mangiano di tutto: come l'orso, il maiale e anche noi!"
  ],
  [
   "Cosa misura il termometro?",
   [
    "La temperatura",
    "Il peso",
    "La velocità"
   ],
   "Il termometro dice quanto è caldo o freddo qualcosa."
  ],
  [
   "Quanto tempo impiega la Terra a girare intorno al Sole?",
   [
    "Circa un anno",
    "Un giorno",
    "Un mese"
   ],
   "Un giro intorno al Sole dura circa 365 giorni. Un giro su se stessa, invece, dura un giorno."
  ],
  [
   "Perché la Luna brilla di notte?",
   [
    "Riflette la luce del Sole",
    "Ha una luce sua",
    "È in fiamme"
   ],
   "La Luna non ha luce propria: brilla perché riflette la luce del Sole."
  ],
  [
   "Quale pianeta è chiamato \"pianeta rosso\"?",
   [
    "Marte",
    "Venere",
    "Nettuno"
   ],
   "Marte è rosso perché il suo terreno è pieno di ferro arrugginito."
  ],
  [
   "Cosa esce da un vulcano in eruzione?",
   [
    "La lava",
    "La neve",
    "L'acqua di mare"
   ],
   "La lava è roccia così calda da essere fusa. Raffreddandosi torna dura."
  ],
  [
   "Quale forza fa cadere le cose a terra?",
   [
    "La gravità",
    "Il magnetismo",
    "Il vento"
   ],
   "La gravità attira tutto verso la Terra: per questo una palla lanciata in alto ricade sempre."
  ],
  [
   "Quale organo pompa il sangue in tutto il corpo?",
   [
    "Il cuore",
    "I polmoni",
    "Lo stomaco"
   ],
   "Il cuore è un muscolo grande più o meno come il tuo pugno e batte circa 100.000 volte al giorno."
  ]
 ],
 "9-10": [
  [
   "Qual è il pianeta più vicino al Sole?",
   [
    "Mercurio",
    "Venere",
    "Marte"
   ],
   "Mercurio è il più piccolo e il più vicino al Sole: il suo anno dura solo 88 giorni terrestri."
  ],
  [
   "Qual è il pianeta più grande del sistema solare?",
   [
    "Giove",
    "Saturno",
    "La Terra"
   ],
   "Giove è così grande che dentro potrebbero starci più di 1.000 Terre."
  ],
  [
   "Quante ossa ha un adulto?",
   [
    "206",
    "106",
    "306"
   ],
   "Un adulto ha 206 ossa. I neonati ne hanno di più: crescendo alcune si uniscono."
  ],
  [
   "Quale gas assorbono le piante dall'aria per produrre il loro cibo?",
   [
    "L'anidride carbonica",
    "L'ossigeno",
    "L'elio"
   ],
   "Le piante usano anidride carbonica, acqua e luce, e liberano l'ossigeno che respiriamo."
  ],
  [
   "Come si forma l'arcobaleno?",
   [
    "La luce del Sole attraversa le gocce di pioggia",
    "Le nuvole si colorano",
    "Lo fa il vento"
   ],
   "Le gocce di pioggia dividono la luce bianca del Sole in tutti i suoi colori."
  ],
  [
   "Qual è l'animale più grande mai esistito?",
   [
    "La balenottera azzurra",
    "L'elefante",
    "Il T. rex"
   ],
   "La balenottera azzurra può essere lunga circa 30 metri: più di qualsiasi dinosauro!"
  ],
  [
   "A quanti gradi bolle l'acqua al livello del mare?",
   [
    "100 °C",
    "50 °C",
    "200 °C"
   ],
   "Al livello del mare l'acqua bolle a 100 gradi. In alta montagna bolle a una temperatura più bassa."
  ],
  [
   "Quanti pianeti ci sono nel sistema solare?",
   [
    "8",
    "9",
    "12"
   ],
   "I pianeti sono 8. Plutone dal 2006 è considerato un pianeta nano."
  ],
  [
   "Come si chiama lo strato d'aria che circonda la Terra?",
   [
    "Atmosfera",
    "Crosta",
    "Nucleo"
   ],
   "L'atmosfera ci protegge dai raggi più forti del Sole e tiene caldo il pianeta."
  ],
  [
   "Qual è il materiale naturale più duro?",
   [
    "Il diamante",
    "L'oro",
    "Il ferro"
   ],
   "Il diamante è il materiale naturale più duro, ed è fatto di carbonio come la mina della matita!"
  ],
  [
   "Di quale gas dell'aria ha bisogno il nostro corpo?",
   [
    "L'ossigeno",
    "L'anidride carbonica",
    "L'elio"
   ],
   "I polmoni prendono l'ossigeno e il sangue lo porta in tutto il corpo."
  ],
  [
   "Come si chiama la trasformazione del bruco in farfalla?",
   [
    "Metamorfosi",
    "Fotosintesi",
    "Evoluzione"
   ],
   "La metamorfosi è il cambiamento completo del corpo: succede anche al girino che diventa rana."
  ],
  [
   "Perché vediamo prima il lampo e poi sentiamo il tuono?",
   [
    "La luce è più veloce del suono",
    "Il tuono parte dopo",
    "Le orecchie sono lente"
   ],
   "Lampo e tuono nascono insieme, ma la luce viaggia molto più veloce del suono."
  ],
  [
   "Quale di questi animali è un insetto?",
   [
    "La formica",
    "Il ragno",
    "Lo scorpione"
   ],
   "La formica ha 6 zampe ed è un insetto. Ragno e scorpione ne hanno 8: sono aracnidi."
  ],
  [
   "Cosa sono gli animali vertebrati?",
   [
    "Animali con la colonna vertebrale",
    "Animali senza ossa",
    "Animali che volano"
   ],
   "Pesci, anfibi, rettili, uccelli e mammiferi sono vertebrati: hanno la colonna vertebrale."
  ]
 ],
 "10-11": [
  [
   "Come si chiama il processo con cui le piante producono cibo grazie alla luce?",
   [
    "Fotosintesi",
    "Digestione",
    "Evaporazione"
   ],
   "Con la fotosintesi le foglie trasformano luce, acqua e anidride carbonica in zuccheri e ossigeno."
  ],
  [
   "Qual è la formula chimica dell'acqua?",
   [
    "H₂O",
    "CO₂",
    "O₂"
   ],
   "Ogni molecola d'acqua ha 2 atomi di idrogeno e 1 di ossigeno."
  ],
  [
   "Quale organo filtra il sangue e produce l'urina?",
   [
    "I reni",
    "Il fegato",
    "I polmoni"
   ],
   "I reni filtrano il sangue ogni giorno ed eliminano le sostanze di scarto con l'urina."
  ],
  [
   "Qual è l'unità più piccola di un essere vivente?",
   [
    "La cellula",
    "L'organo",
    "Il tessuto"
   ],
   "Tutti gli esseri viventi sono fatti di cellule: alcuni di una sola, noi di migliaia di miliardi."
  ],
  [
   "Quanto impiega la luce del Sole ad arrivare sulla Terra?",
   [
    "Circa 8 minuti",
    "1 secondo",
    "1 giorno"
   ],
   "La luce del Sole viaggia per circa 8 minuti prima di arrivare a noi."
  ],
  [
   "Qual è il gas più abbondante nell'aria?",
   [
    "L'azoto",
    "L'ossigeno",
    "L'anidride carbonica"
   ],
   "L'aria è fatta per circa il 78% di azoto e per il 21% di ossigeno."
  ],
  [
   "Come si chiama il passaggio dell'acqua dallo stato liquido a quello gassoso?",
   [
    "Evaporazione",
    "Solidificazione",
    "Condensazione"
   ],
   "Quando l'acqua si scalda evapora e diventa vapore. Il contrario si chiama condensazione."
  ],
  [
   "Qual è l'osso più lungo del corpo umano?",
   [
    "Il femore",
    "L'omero",
    "La tibia"
   ],
   "Il femore è l'osso della coscia: è il più lungo e uno dei più forti."
  ],
  [
   "In alta montagna l'acqua bolle a una temperatura…",
   [
    "Più bassa",
    "Più alta",
    "Uguale"
   ],
   "In montagna la pressione dell'aria è più bassa, così l'acqua bolle sotto i 100 °C."
  ],
  [
   "Quale vitamina produce la pelle grazie al sole?",
   [
    "La vitamina D",
    "La vitamina C",
    "La vitamina A"
   ],
   "Con la luce del sole la pelle produce vitamina D, importante per ossa forti."
  ],
  [
   "Quante cavità ha il cuore umano?",
   [
    "4",
    "2",
    "6"
   ],
   "Il cuore ha 4 cavità: due atri sopra e due ventricoli sotto."
  ],
  [
   "Qual è la stella più vicina alla Terra?",
   [
    "Il Sole",
    "La Stella Polare",
    "Sirio"
   ],
   "Il Sole è una stella! Dopo di lui, la più vicina è Proxima Centauri."
  ],
  [
   "Da cosa ricava energia un pannello solare?",
   [
    "Dalla luce del Sole",
    "Dal vento",
    "Dall'acqua"
   ],
   "I pannelli solari trasformano la luce del Sole in elettricità."
  ],
  [
   "Qual è il vulcano attivo più alto d'Europa?",
   [
    "L'Etna",
    "Il Vesuvio",
    "Lo Stromboli"
   ],
   "L'Etna, in Sicilia, supera i 3.300 metri ed è il vulcano attivo più alto d'Europa."
  ],
  [
   "Da cosa dipendono soprattutto le stagioni?",
   [
    "Dall'inclinazione dell'asse terrestre",
    "Dalla distanza dalla Luna",
    "Dal vento"
   ],
   "La Terra è inclinata: per metà anno un emisfero riceve più luce (estate), poi tocca all'altro."
  ],
  [
   "Cosa misura la scala Richter?",
   [
    "La forza dei terremoti",
    "La velocità del vento",
    "La quantità di pioggia"
   ],
   "La scala Richter misura l'energia liberata da un terremoto."
  ]
 ]
};
  function shuffle(a){a=a.slice();for(var i=a.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=a[i];a[i]=a[j];a[j]=t}return a}
  var ROUND=10, set=[], n=0, score=0, finished=false, band='7-8';
  var qn=document.getElementById('qzN'), qt=document.getElementById('qzQ'), ops=document.getElementById('qzOps'),
      fb=document.getElementById('qzFb'), nx=document.getElementById('qzNext'), sc=document.getElementById('qzScore');
  document.querySelectorAll('.age').forEach(function(b){
    b.addEventListener('click',function(){ band=b.dataset.b; document.querySelectorAll('.age').forEach(function(x){x.classList.toggle('on',x===b)}); start(); });
  });
  function start(){ finished=false; set=shuffle(F[band]).slice(0,ROUND); n=0; score=0; show(); }
  function show(){
    var q=set[n]; qn.textContent='Domanda '+(n+1)+' di '+ROUND; sc.textContent='Punti: '+score;
    qt.textContent=q[0]; ops.innerHTML=''; fb.innerHTML=''; fb.className='qzfb'; nx.style.display='none';
    shuffle(q[1].map(function(t,i){return [t,i===0]})).forEach(function(o){
      var b=document.createElement('button'); b.type='button'; b.textContent=o[0];
      b.addEventListener('click',function(){ answer(b,o[1],q); }); ops.appendChild(b);
    });
  }
  function answer(b,ok,q){
    [].forEach.call(ops.children,function(x){x.disabled=true; if(x.textContent===q[1][0]) x.classList.add('ok');});
    if(ok){score++; fb.className='qzfb good'; fb.innerHTML='<b>Giusto!</b> '+q[2];}
    else{b.classList.add('no'); fb.className='qzfb bad'; fb.innerHTML='<b>Ops! È colpa di Murphy.</b> La risposta giusta è <b>'+q[1][0]+'</b>. '+q[2];}
    sc.textContent='Punti: '+score;
    nx.textContent=n<ROUND-1?'Prossima domanda':'Vedi il punteggio'; nx.style.display='block';
  }
  nx.addEventListener('click',function(){
    if(finished){start();return}
    if(n<ROUND-1){n++;show();return}
    var msg=score>=9?'Campione di scienze! 🏆':score>=6?'Bravissimo scienziato! 🔬':'Murphy dice: chi perde gioca ancora! 🎲';
    qn.textContent='Finito!'; qt.textContent='Hai fatto '+score+' su '+ROUND+'. '+msg; ops.innerHTML=''; fb.innerHTML=''; fb.className='qzfb';
    nx.textContent='Gioca ancora (domande nuove)'; finished=true; if(score>=6 && typeof confetti==='function') confetti();
  });
  start();
})();
