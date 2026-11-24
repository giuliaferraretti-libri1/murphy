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
  ],
  [
   "Quanti colori ha l'arcobaleno?",
   [
    "7",
    "3",
    "10"
   ],
   "Rosso, arancione, giallo, verde, azzurro, indaco e violetto: sono 7!"
  ],
  [
   "Dove vivono i pinguini selvatici?",
   [
    "Al Polo Sud e nei mari del sud",
    "Al Polo Nord",
    "Nel deserto"
   ],
   "I pinguini vivono nella parte sud del mondo, soprattutto in Antartide. Al Polo Nord non ce ne sono!"
  ],
  [
   "Quale animale ha la proboscide?",
   [
    "L'elefante",
    "La giraffa",
    "Il leone"
   ],
   "L'elefante usa la proboscide come naso, come mano e anche come doccia!"
  ],
  [
   "Di cosa si nutre soprattutto il panda gigante?",
   [
    "Di bambù",
    "Di pesce",
    "Di formaggio"
   ],
   "Il panda gigante mangia quasi solo bambù, per molte ore al giorno."
  ],
  [
   "Con quale parte del corpo sentiamo i profumi?",
   [
    "Il naso",
    "Le orecchie",
    "I piedi"
   ],
   "Il naso ci fa sentire odori e profumi: questo senso si chiama olfatto."
  ],
  [
   "Quale di questi è un frutto?",
   [
    "La mela",
    "La carota",
    "La patata"
   ],
   "La mela nasce dal fiore e contiene i semi: è un frutto. Carota e patata crescono sotto terra."
  ],
  [
   "Quale animale va in letargo d'inverno?",
   [
    "Il ghiro",
    "La gallina",
    "Il cavallo"
   ],
   "Il ghiro dorme per tutto l'inverno: per questo si dice \"dormire come un ghiro\"!"
  ],
  [
   "Cosa serve per far volare un aquilone?",
   [
    "Il vento",
    "La pioggia",
    "Il buio"
   ],
   "Il vento spinge l'aquilone verso l'alto e lo tiene in aria."
  ],
  [
   "Quale animale cambia colore per nascondersi?",
   [
    "Il camaleonte",
    "Il gatto",
    "La mucca"
   ],
   "Il camaleonte cambia colore della pelle, anche per mimetizzarsi."
  ],
  [
   "Quale di questi animali è un rettile?",
   [
    "La tartaruga",
    "La rana",
    "Il topo"
   ],
   "La tartaruga è un rettile, come i serpenti e le lucertole. La rana è un anfibio."
  ],
  [
   "Che cosa c'è al centro del nostro sistema solare?",
   [
    "Il Sole",
    "La Terra",
    "La Luna"
   ],
   "Tutti i pianeti, compresa la Terra, girano intorno al Sole."
  ],
  [
   "Quando si vedono le stelle?",
   [
    "Di notte, con il cielo sereno",
    "Di giorno a mezzogiorno",
    "Solo quando piove"
   ],
   "Le stelle ci sono anche di giorno, ma la luce del Sole è così forte che non le vediamo."
  ],
  [
   "Cosa fa un cubetto di ghiaccio in un bicchiere d'acqua?",
   [
    "Galleggia",
    "Va a fondo",
    "Diventa sale"
   ],
   "Il ghiaccio è più leggero dell'acqua, per questo galleggia, proprio come gli iceberg."
  ],
  [
   "Quale animale ci dà la lana?",
   [
    "La pecora",
    "La gallina",
    "Il pesce"
   ],
   "La lana si ottiene tosando la pecora, che poi la fa ricrescere."
  ],
  [
   "Di che colore è il sangue?",
   [
    "Rosso",
    "Blu",
    "Verde"
   ],
   "Il sangue è rosso grazie a una sostanza dei globuli rossi che trasporta l'ossigeno."
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
  ],
  [
   "Con quale organo respiriamo?",
   [
    "I polmoni",
    "Il cuore",
    "Lo stomaco"
   ],
   "I polmoni si riempiono d'aria e passano l'ossigeno al sangue."
  ],
  [
   "Come si chiama il cucciolo della mucca?",
   [
    "Il vitello",
    "Il puledro",
    "L'agnello"
   ],
   "Il vitello è il cucciolo della mucca. Il puledro è del cavallo, l'agnello della pecora."
  ],
  [
   "Qual è l'oceano più grande della Terra?",
   [
    "Il Pacifico",
    "L'Atlantico",
    "L'Indiano"
   ],
   "L'Oceano Pacifico è il più grande e il più profondo di tutti."
  ],
  [
   "Qual è il continente più freddo?",
   [
    "L'Antartide",
    "L'Africa",
    "L'Europa"
   ],
   "L'Antartide è coperta di ghiaccio: lì sono state misurate le temperature più basse della Terra."
  ],
  [
   "Qual è l'animale più veloce sulla terraferma?",
   [
    "Il ghepardo",
    "Il cavallo",
    "Il leone"
   ],
   "Il ghepardo può superare i 100 chilometri all'ora, ma solo per pochi secondi."
  ],
  [
   "Da che parte sorge il Sole?",
   [
    "A est",
    "A ovest",
    "A nord"
   ],
   "Il Sole sorge a est e tramonta a ovest, perché la Terra gira su se stessa."
  ],
  [
   "Da quale parte della pianta nasce il frutto?",
   [
    "Dal fiore",
    "Dalla radice",
    "Dalla foglia"
   ],
   "Dopo l'impollinazione, il fiore si trasforma e diventa il frutto con i semi."
  ],
  [
   "Come si chiama la nostra galassia?",
   [
    "La Via Lattea",
    "Andromeda",
    "L'Orsa Maggiore"
   ],
   "Il Sole e i suoi pianeti fanno parte della Via Lattea, che ha miliardi di stelle."
  ],
  [
   "Da dove respira la balena?",
   [
    "Dallo sfiatatoio sulla testa",
    "Dalle branchie",
    "Dalla coda"
   ],
   "La balena è un mammifero: sale a galla e respira aria dallo sfiatatoio, facendo lo spruzzo."
  ],
  [
   "Quanti sono i denti da latte di un bambino?",
   [
    "20",
    "32",
    "10"
   ],
   "I denti da latte sono 20. Poi cadono e arrivano i denti definitivi, che in un adulto sono 32."
  ],
  [
   "Che cos'è un fossile?",
   [
    "Il resto di un essere vivente antico conservato nella roccia",
    "Un tipo di sasso colorato",
    "Un animale che vive sotto terra"
   ],
   "I fossili, come le ossa dei dinosauri o le conchiglie nella roccia, ci raccontano la vita di milioni di anni fa."
  ],
  [
   "Di che colore è la clorofilla, la sostanza che cattura la luce nelle foglie?",
   [
    "Verde",
    "Rossa",
    "Blu"
   ],
   "La clorofilla è verde: per questo le foglie sono verdi!"
  ],
  [
   "Quale mammifero depone le uova?",
   [
    "L'ornitorinco",
    "Il gatto",
    "Il cavallo"
   ],
   "L'ornitorinco vive in Australia: è un mammifero ma depone le uova, e ha il becco come un'anatra!"
  ],
  [
   "Quale di questi materiali lascia passare l'elettricità?",
   [
    "Il rame",
    "La plastica",
    "Il legno"
   ],
   "Il rame è un metallo che conduce bene l'elettricità: per questo i fili elettrici sono di rame, coperti di plastica."
  ],
  [
   "Quale animale costruisce le dighe sui fiumi?",
   [
    "Il castoro",
    "La lontra",
    "La rana"
   ],
   "Il castoro rosicchia i tronchi con i denti fortissimi e costruisce dighe e tane nell'acqua."
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
  ],
  [
   "Quale pianeta ha gli anelli più famosi?",
   [
    "Saturno",
    "Marte",
    "Mercurio"
   ],
   "Gli anelli di Saturno sono fatti di pezzi di ghiaccio e roccia. Anche altri pianeti ne hanno, ma molto più sottili."
  ],
  [
   "Qual è l'organo più grande del corpo umano?",
   [
    "La pelle",
    "Il fegato",
    "Il cuore"
   ],
   "La pelle ricopre tutto il corpo e ci protegge: è l'organo più grande che abbiamo."
  ],
  [
   "Quale gas mandiamo fuori quando espiriamo?",
   [
    "L'anidride carbonica",
    "L'elio",
    "Il vapore di ferro"
   ],
   "Respirando prendiamo ossigeno e buttiamo fuori anidride carbonica, che le piante usano per crescere."
  ],
  [
   "Quanto dura un giro completo della Terra su se stessa?",
   [
    "Circa 24 ore",
    "Una settimana",
    "Un anno"
   ],
   "Un giro della Terra su se stessa dura circa 24 ore: è così che arrivano il giorno e la notte."
  ],
  [
   "Come si chiamano gli animali che vivono sia in acqua sia sulla terra, come la rana?",
   [
    "Anfibi",
    "Rettili",
    "Mammiferi"
   ],
   "Gli anfibi, come rane e salamandre, nascono in acqua e da adulti possono vivere anche sulla terra."
  ],
  [
   "Qual è il fiume più lungo d'Italia?",
   [
    "Il Po",
    "Il Tevere",
    "L'Arno"
   ],
   "Il Po è lungo circa 650 chilometri e attraversa la Pianura Padana."
  ],
  [
   "Qual è la montagna più alta delle Alpi?",
   [
    "Il Monte Bianco",
    "Il Cervino",
    "Il Monte Rosa"
   ],
   "Il Monte Bianco supera i 4.800 metri, al confine tra Italia e Francia."
  ],
  [
   "Che cos'è l'eco?",
   [
    "Un suono che rimbalza e torna indietro",
    "Un tipo di vento",
    "Una nuvola bassa"
   ],
   "Se gridi davanti a una montagna, il suono rimbalza sulla roccia e torna da te: è l'eco!"
  ],
  [
   "Quale organo comanda tutto il corpo?",
   [
    "Il cervello",
    "Lo stomaco",
    "I polmoni"
   ],
   "Il cervello riceve i messaggi dai sensi e manda gli ordini ai muscoli attraverso i nervi."
  ],
  [
   "Quale animale ha il collo più lungo?",
   [
    "La giraffa",
    "Il cammello",
    "Lo struzzo"
   ],
   "La giraffa ha il collo più lungo di tutti, eppure ha solo 7 vertebre nel collo, come noi!"
  ],
  [
   "In che stato si trova l'acqua quando è vapore?",
   [
    "Gassoso",
    "Solido",
    "Liquido"
   ],
   "Il vapore è acqua allo stato gassoso. Il ghiaccio è solido e l'acqua del rubinetto è liquida."
  ],
  [
   "Quale strumento si usa per guardare le stelle lontane?",
   [
    "Il telescopio",
    "Il microscopio",
    "Il termometro"
   ],
   "Il telescopio fa sembrare vicine le cose lontane, come la Luna e i pianeti."
  ],
  [
   "Quale strumento si usa per vedere cose piccolissime?",
   [
    "Il microscopio",
    "Il telescopio",
    "La bussola"
   ],
   "Con il microscopio si vedono le cellule e i microbi, invisibili a occhio nudo."
  ],
  [
   "Dove conserva l'acqua un cactus?",
   [
    "Nel fusto",
    "Nei fiori",
    "Nell'aria"
   ],
   "Il cactus ha un fusto grosso e spugnoso che fa da serbatoio d'acqua nel deserto."
  ],
  [
   "Il suono può viaggiare nello spazio vuoto?",
   [
    "No, nel vuoto non c'è aria",
    "Sì, ancora più veloce",
    "Solo di notte"
   ],
   "Il suono ha bisogno di aria, acqua o di un oggetto per viaggiare. Nello spazio vuoto c'è silenzio."
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
  ],
  [
   "Come si chiamano le particelle con carica negativa che girano intorno al nucleo dell'atomo?",
   [
    "Elettroni",
    "Protoni",
    "Neutroni"
   ],
   "Gli elettroni hanno carica negativa, i protoni positiva e i neutroni nessuna carica."
  ],
  [
   "Chi scoprì nel 1610 quattro lune di Giove con il cannocchiale?",
   [
    "Galileo Galilei",
    "Leonardo da Vinci",
    "Isaac Newton"
   ],
   "Galileo Galilei puntò il cannocchiale verso il cielo e scoprì le quattro lune più grandi di Giove."
  ],
  [
   "Qual è il simbolo chimico dell'oro?",
   [
    "Au",
    "Ag",
    "Fe"
   ],
   "Au viene dal latino aurum. Ag è l'argento e Fe è il ferro."
  ],
  [
   "Qual è il pianeta più caldo del sistema solare?",
   [
    "Venere",
    "Mercurio",
    "Marte"
   ],
   "Venere è più calda di Mercurio, anche se è più lontana dal Sole: la sua atmosfera densa trattiene il calore."
  ],
  [
   "Che cosa trasporta l'ossigeno nel sangue?",
   [
    "I globuli rossi",
    "I globuli bianchi",
    "Le piastrine"
   ],
   "I globuli rossi portano l'ossigeno, i globuli bianchi ci difendono dai microbi e le piastrine fermano le ferite."
  ],
  [
   "In quale parte della cellula si trova il DNA?",
   [
    "Nel nucleo",
    "Nella membrana",
    "Fuori dalla cellula"
   ],
   "Il DNA si trova soprattutto nel nucleo e contiene le istruzioni per far funzionare l'essere vivente."
  ],
  [
   "Che cosa forma soprattutto le onde del mare?",
   [
    "Il vento",
    "I pesci",
    "La Luna piena"
   ],
   "Le onde si formano soprattutto quando il vento soffia sulla superficie del mare."
  ],
  [
   "Che cosa provoca le maree?",
   [
    "L'attrazione della Luna e del Sole",
    "Il vento",
    "Le navi"
   ],
   "La gravità della Luna, e in parte del Sole, attira l'acqua dei mari: così si alza e si abbassa."
  ],
  [
   "Quanto è veloce il suono nell'aria, più o meno?",
   [
    "Circa 340 metri al secondo",
    "Circa 3 metri al secondo",
    "Più veloce della luce"
   ],
   "Il suono nell'aria percorre circa 340 metri ogni secondo: tantissimo, ma molto meno della luce."
  ],
  [
   "Come si chiama lo strato dell'atmosfera che ci protegge dai raggi ultravioletti del Sole?",
   [
    "Lo strato di ozono",
    "Lo strato di vapore",
    "Lo strato di elio"
   ],
   "L'ozono è un gas che filtra gran parte dei raggi ultravioletti, pericolosi per la pelle e per gli occhi."
  ],
  [
   "Che cos'è un'eclissi di Sole?",
   [
    "La Luna passa davanti al Sole e lo copre",
    "Il Sole si spegne per un po'",
    "Una nuvola enorme copre il cielo"
   ],
   "Durante l'eclissi di Sole la Luna si mette tra il Sole e la Terra e ne nasconde la luce. Mai guardarla senza occhiali speciali!"
  ],
  [
   "Quale di queste energie è rinnovabile?",
   [
    "L'energia del vento",
    "Il petrolio",
    "Il carbone"
   ],
   "Il vento non finisce mai: l'energia eolica è rinnovabile. Petrolio e carbone invece prima o poi finiscono."
  ],
  [
   "Come si chiama la serie che mostra chi mangia chi in natura?",
   [
    "Catena alimentare",
    "Ciclo dell'acqua",
    "Albero genealogico"
   ],
   "Esempio di catena alimentare: l'erba è mangiata dal coniglio, il coniglio dalla volpe."
  ],
  [
   "Qual è l'osso più piccolo del corpo umano?",
   [
    "La staffa, nell'orecchio",
    "Il mignolo del piede",
    "La rotula"
   ],
   "La staffa si trova nell'orecchio ed è lunga solo pochi millimetri: aiuta a sentire i suoni."
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
