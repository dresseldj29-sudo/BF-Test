const DATA = {
  nuremberg: {
    name: "Berufsfeuerwehr Nürnberg",
    short: "Nürnberg",
    description: "Training nach den öffentlich beschriebenen Bestandteilen des Nürnberger Auswahlverfahrens.",
    sourceNote: "Nürnberg: Sport, praktischer Teil, schriftlicher Test, Gespräch und gesundheitliche Prüfung.",
    modules: [
      {id:"deutsch", title:"Deutsch", desc:"Textverständnis, Fehlersuche, Zusammenfassen", lessons:[
        ["Grundlagen","Im schriftlichen Test können Deutschgrundlagen und das Erfassen von Informationen geprüft werden."],
        ["Textverständnis","Lies zuerst die Frage. Suche danach die Stelle im Text, die die Antwort wirklich belegt. Vermeide Antworten, die nur plausibel klingen."],
        ["Fehlersuche","Achte auf Rechtschreibung, Grammatik, Zeichensetzung und doppelte oder fehlende Wörter."],
        ["Prüfungstipp","Arbeite sauber und kontrolliere am Ende die Aufgaben, bei denen du unsicher warst."]
      ]},
      {id:"mathe", title:"Mathematik", desc:"Rechnen ohne Taschenrechner, Größen und Textaufgaben", lessons:[
        ["Grundrechenarten","Sicher mit Dezimalzahlen, Brüchen, Prozenten, Einheiten und Klammern umgehen."],
        ["Textaufgaben","Markiere bekannte Größen und die gesuchte Größe. Schreibe einen Rechenweg auf, bevor du die Zahl berechnest."],
        ["Geometrie","Wichtige Formeln sind z. B. Rechteck A=a·b, Kreis A=πr² und Zylinder V=πr²h."],
        ["Prüfungstipp","Ohne Taschenrechner: Überschlage das Ergebnis und prüfe anschließend, ob die Größenordnung stimmen kann."]
      ]},
      {id:"allgemein", title:"Allgemeinwissen", desc:"Deutschland, Staat, Gesellschaft, Geschichte und Feuerwehrwissen", lessons:[
        ["Staat & Gesellschaft","Lerne Bundesländer und Hauptstädte, grundlegende Staatsorgane und wichtige Feiertage."],
        ["Geschichte","Kenne zentrale Daten und Ereignisse der deutschen Geschichte."],
        ["Feuerwehr","Grundbegriffe zu Aufgaben, Organisation, Einsatz und Gefahrenabwehr gehören zum sinnvollen Basiswissen."],
        ["Prüfungstipp","Aktuelle politische Ämter und andere zeitabhängige Fakten sollten vor dem echten Test mit aktuellen Quellen geprüft werden."]
      ]},
      {id:"logik", title:"Logik", desc:"Muster, Reihen, Schlussfolgerungen und Konzentration", lessons:[
        ["Zahlenreihen","Prüfe zuerst Differenzen, dann Multiplikation/Division und anschließend wechselnde Regeln."],
        ["Figuren & Muster","Vergleiche Drehung, Spiegelung, Anzahl, Position und Veränderung einzelner Elemente."],
        ["Schlussfolgerungen","Trenne sichere Informationen von Annahmen. Nur das wählen, was logisch aus den Angaben folgt."],
        ["Prüfungstipp","Wenn eine Aufgabe festhängt, markieren und weitergehen – Zeit ist ein eigener Faktor."]
      ]},
      {id:"praktisch", title:"Praktischer Teil", desc:"Handwerk, Werkzeuge, Schätzen, Erste Hilfe und Orientierung", lessons:[
        ["Handwerk","Trainiere Werkzeugnamen, sichere Werkzeugnutzung, Messen, Trennen, Verbinden und einfache Materialkunde."],
        ["Schätzen","Übe Längen und Gewichte ohne Hilfsmittel realistisch einzuschätzen."],
        ["Erste Hilfe","Kenne die grundlegende Reihenfolge: Eigenschutz, Bewusstsein/Atmung prüfen, Notruf und situationsgerechte Hilfe."],
        ["Orientierung","In engen oder dunklen Bereichen ruhig bleiben, Umgebung systematisch erfassen und sicheren Rückweg beachten."]
      ]},
      {id:"sport", title:"Sporttest", desc:"Ausdauer, Kraft, Koordination, Schwimmen und Höhentauglichkeit", lessons:[
        ["Ausdauer","Nürnberg veröffentlicht u. a. einen 3000-m-Lauf. Das Training sollte schrittweise und verletzungsfrei aufgebaut werden."],
        ["Kraft & Koordination","Kasten-Bumerang, Wechselsprünge, Beugehang und Personenrettung trainieren unterschiedliche Fähigkeiten."],
        ["Schwimmen & Tauchen","Der veröffentlichte Test umfasst 200 m Schwimmen und Tauchen. Schwimmtraining immer sicher und möglichst beaufsichtigt durchführen."],
        ["Leitersteigen","Höhentauglichkeit und sicheres, zügiges Leitersteigen werden beschrieben. Das darf nur unter fachgerechter Sicherung trainiert werden."]
      ]}
    ]
  },
  munich: {
    name: "Berufsfeuerwehr München",
    short: "München",
    description: "Training nach den öffentlich beschriebenen Bestandteilen des Münchner Auswahlverfahrens.",
    sourceNote: "München: Sporttest, schriftlicher Test und praktischer Test.",
    modules: [
      {id:"deutsch", title:"Deutsch", desc:"Deutschgrundlagen und Sprachverständnis", lessons:[
        ["Grundlagen","Im schriftlichen Test werden Deutschgrundlagen abgefragt."],
        ["Textverständnis","Erfasse Kernaussage, Details und Schlussfolgerungen eines Textes."],
        ["Rechtschreibung","Achte auf typische Fehler bei Groß-/Kleinschreibung, Getrennt-/Zusammenschreibung und Zeichensetzung."],
        ["Prüfungstipp","Arbeite konzentriert und beantworte zuerst Aufgaben, deren Lösung sicher ist."]
      ]},
      {id:"logik", title:"Logik", desc:"Muster erkennen und Probleme strukturiert lösen", lessons:[
        ["Zahlen & Regeln","Suche nach einfachen Regeln, bevor du komplizierte Muster annimmst."],
        ["Figuren","Prüfe Drehung, Spiegelung, Position, Anzahl und Reihenfolge."],
        ["Schlussfolgerungen","Nur Aussagen verwenden, die aus den Angaben folgen."],
        ["Zeitmanagement","Schwierige Aufgaben nicht zu lange blockieren."]
      ]},
      {id:"allgemein", title:"Allgemeinwissen", desc:"Staat, Gesellschaft, Geschichte und aktuelles Wissen", lessons:[
        ["Grundwissen","Bundesländer, Hauptstädte, Staatsorgane und zentrale historische Ereignisse."],
        ["Aktuelles","Zeitabhängige Fakten können sich ändern. Für eine echte Bewerbung immer aktuelle Informationen lernen."],
        ["Feuerwehrwissen","Aufgaben der Feuerwehr, Gefahrenabwehr, Teamarbeit und grundlegende Fachbegriffe."],
        ["Prüfungstipp","Nicht nur auswendig lernen: Zusammenhänge verstehen."]
      ]},
      {id:"mathe", title:"Mathematik", desc:"Rechnen, Größen, Geometrie und Problemlösen", lessons:[
        ["Rechnen","Sicher mit Grundrechenarten, Prozenten, Brüchen und Dezimalzahlen."],
        ["Einheiten","Längen, Flächen, Volumen, Zeit und Geschwindigkeit sicher umrechnen."],
        ["Geometrie","Fläche, Volumen und einfache Formeln auswendig beherrschen."],
        ["Prüfungstipp","München beschreibt den schriftlichen Test ohne Taschenrechner und Formelsammlung."]
      ]},
      {id:"physik", title:"Physik", desc:"Kräfte, Bewegung, Energie und einfache technische Zusammenhänge", lessons:[
        ["Kraft","Kraft verändert Bewegung oder Form eines Körpers. Einheit: Newton."],
        ["Geschwindigkeit","v = s/t. Achte auf passende Einheiten."],
        ["Druck","Druck hängt vereinfacht von Kraft und Fläche ab: p = F/A."],
        ["Technik","Verstehe Hebel, Reibung, Dichte und einfache mechanische Zusammenhänge."]
      ]},
      {id:"praktisch", title:"Praktischer Test", desc:"Handwerkliches und technisches Verständnis sowie Erste Hilfe", lessons:[
        ["Handwerk","Werkzeuge, Materialien und sichere Arbeitsweisen verstehen."],
        ["Technik","Einfache mechanische Zusammenhänge wie Hebel und Kraftübertragung erklären können."],
        ["Erste Hilfe","Grundlagen der Ersten Hilfe und situationsgerechtes Handeln trainieren."],
        ["Prüfungstipp","Sicherheit geht vor Geschwindigkeit – erst Aufgabe verstehen, dann handeln."]
      ]},
      {id:"sport", title:"Sporttest", desc:"Schiebleiter, Sprünge, Kraft, Lauf, Rettung, Schwimmen", lessons:[
        ["Kraft & Koordination","Beugehang, Wechselsprünge und Kasten-Bumerang trainieren mehrere Fähigkeiten."],
        ["Personenrettung","Dummy-Ziehen ist eine berufsspezifische Belastung. Technik und Sicherheit sind entscheidend."],
        ["Laufen","Der Pendellauf verlangt wiederholte Beschleunigung und Richtungswechsel."],
        ["Schwimmen","Die veröffentlichte Kombi-Übung umfasst 200 m Schwimmen und Tauchen."]
      ]}
    ]
  }
};

const QUESTIONS = {
  nuremberg: [
    {c:"Mathematik",q:"Ein Fahrzeug legt 3,3 m pro Sekunde zurück. Wie weit ist es nach 60 Sekunden gefahren?",a:["19,8 m","198 m","1.980 m","33 m"],correct:1,e:"3,3 × 60 = 198 m."},
    {c:"Mathematik",q:"Ein Zylinder hat r = 3 cm und h = 10 cm. Welche Formel beschreibt sein Volumen?",a:["2πrh","πr²h","πrh²","2πr²"],correct:1,e:"Für einen Zylinder gilt V = πr²h."},
    {c:"Deutsch",q:"Welche Aussage ist eine Zusammenfassung?",a:["Sie wiederholt jedes Detail des Textes.","Sie gibt die Kernaussage kurz und sachlich wieder.","Sie bewertet den Autor persönlich.","Sie erfindet ein alternatives Ende."],correct:1,e:"Eine Zusammenfassung konzentriert sich auf die wesentlichen Inhalte."},
    {c:"Logik",q:"Welche Zahl setzt die Reihe sinnvoll fort? 3 – 6 – 12 – 24 – ?",a:["30","36","48","54"],correct:2,e:"Jede Zahl wird mit 2 multipliziert."},
    {c:"Allgemeinwissen",q:"Wie viele Bundesländer hat Deutschland?",a:["14","15","16","17"],correct:2,e:"Deutschland besteht aus 16 Bundesländern."},
    {c:"Allgemeinwissen",q:"Welcher Tag ist der Tag der Deutschen Einheit?",a:["1. Mai","3. Oktober","9. November","24. Dezember"],correct:1,e:"Der Tag der Deutschen Einheit ist am 3. Oktober."},
    {c:"Praxis",q:"Was sollte bei einer handwerklichen Aufgabe zuerst passieren?",a:["Sofort möglichst schnell loslegen","Werkzeug werfen, wenn es nicht passt","Aufgabe und Sicherheitslage erfassen","Nur nach Gefühl arbeiten"],correct:2,e:"Aufgabe, Material, Werkzeug und Sicherheit zuerst klären."},
    {c:"Erste Hilfe",q:"Was gehört bei einem Notfall grundsätzlich zu den ersten Maßnahmen?",a:["Eigenschutz und Lageeinschätzung","Zuerst Fotos machen","Betroffene allein lassen","Erst nach einer Stunde Hilfe rufen"],correct:0,e:"Eigenschutz und Lageeinschätzung stehen am Anfang."},
    {c:"Sport",q:"Welche Fähigkeit prüft ein 3000-m-Lauf hauptsächlich?",a:["Ausdauer","Feinmotorik","Hörvermögen","Reaktionszeit"],correct:0,e:"Der 3000-m-Lauf prüft vor allem die aerobe Ausdauer."},
    {c:"Logik",q:"Alle Einsatzkräfte im Team tragen Helme. Max ist Einsatzkraft im Team. Was folgt logisch?",a:["Max trägt keinen Helm.","Max trägt einen Helm.","Max ist Führungskraft.","Max fährt das Fahrzeug."],correct:1,e:"Wenn alle Einsatzkräfte Helme tragen und Max dazugehört, trägt Max einen Helm."}
  ],
  munich: [
    {c:"Mathematik",q:"Ein Schlauch ist 20 m lang. Drei gleich lange Schläuche werden verbunden. Wie lang ist die Strecke?",a:["40 m","50 m","60 m","80 m"],correct:2,e:"20 × 3 = 60 m."},
    {c:"Physik",q:"Welche Einheit gehört zur Kraft?",a:["Joule","Newton","Watt","Pascal"],correct:1,e:"Die SI-Einheit der Kraft ist Newton (N)."},
    {c:"Physik",q:"Welche Formel beschreibt Geschwindigkeit?",a:["v = s/t","v = t/s","v = s·t","v = F/A"],correct:0,e:"Geschwindigkeit ist Strecke geteilt durch Zeit."},
    {c:"Deutsch",q:"Welche Formulierung ist sachlich?",a:["Das ist total genial!","Der Bericht beschreibt den Ablauf des Einsatzes.","Ich finde das unfassbar cool.","Das war bestimmt das beste Fahrzeug."],correct:1,e:"Sachliche Sprache vermeidet persönliche Wertungen."},
    {c:"Logik",q:"Welche Zahl folgt? 2 – 5 – 10 – 17 – 26 – ?",a:["31","35","37","40"],correct:2,e:"Die Abstände sind +3, +5, +7, +9, also +11 = 37."},
    {c:"Allgemeinwissen",q:"Welche Stadt ist die Landeshauptstadt Bayerns?",a:["Nürnberg","Augsburg","München","Regensburg"],correct:2,e:"München ist die Landeshauptstadt des Freistaates Bayern."},
    {c:"Praxis",q:"Warum sollte ein Werkzeug vor der Benutzung geprüft werden?",a:["Nur wegen der Optik","Um Schäden und Gefahren zu erkennen","Damit es schwerer wird","Damit die Aufgabe länger dauert"],correct:1,e:"Beschädigte Werkzeuge können Unfälle verursachen."},
    {c:"Sport",q:"Welche Kombination nennt München als Teil des Sporttests?",a:["200 m Schwimmen und Tauchen","10 km Radfahren","Weitsprung und Kugelstoßen","100 m Rückenschwimmen ohne Tauchen"],correct:0,e:"Die veröffentlichte Sporttestbeschreibung nennt eine Kombi-Übung Schwimmen und Tauchen über 200 m."},
    {c:"Mathematik",q:"Ein Einsatzweg ist 1,5 km lang. Wie viele Meter sind das?",a:["15 m","150 m","1.500 m","15.000 m"],correct:2,e:"1 km = 1.000 m, also 1,5 km = 1.500 m."},
    {c:"Physik",q:"Was passiert bei gleicher Kraft, wenn die Fläche A in p = F/A größer wird?",a:["Der Druck wird kleiner.","Der Druck wird größer.","Der Druck bleibt immer exakt gleich.","Die Kraft verschwindet."],correct:0,e:"Bei gleicher Kraft verteilt sich die Kraft auf eine größere Fläche – der Druck sinkt."}
  ]
};

const state = {
  city: localStorage.getItem("fb_city") || null,
  name: localStorage.getItem("fb_name") || "",
  quiz: null,
  lessonIndex: 0,
  examMode: false,
  examQuestions: [],
  questionIndex: 0,
  score: 0,
  answered: false,
  timer: null,
  timeLeft: 0,
  lastModule: null
};

const $ = id => document.getElementById(id);
function save(){localStorage.setItem("fb_city",state.city||"");localStorage.setItem("fb_name",state.name||"");}
function show(id){document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));$(id).classList.add("active");window.scrollTo({top:0,behavior:"smooth"});}
function cityData(){return DATA[state.city];}

function init(){
  renderCities();
  $("nameInput").value=state.name;
  if(state.city) continueToDashboard(); else show("startScreen");
  $("continueBtn").onclick=()=>{if(!state.city){alert("Bitte zuerst eine Berufsfeuerwehr auswählen.");return}state.name=$("nameInput").value.trim();save();continueToDashboard()};
  $("changeCityBtn").onclick=()=>{show("startScreen");renderCities()};
  $("backDashboard1").onclick=()=>show("dashboardScreen");
  $("startExamBtn").onclick=()=>startExam();
  $("lessonQuizBtn").onclick=()=>startModuleQuiz(state.lastModule);
  $("quitQuizBtn").onclick=()=>{stopTimer();show("dashboardScreen")};
  $("nextBtn").onclick=nextQuestion;
  $("retryBtn").onclick=()=>state.examMode?startExam():startModuleQuiz(state.lastModule);
  $("resultDashboardBtn").onclick=()=>{updateDashboard();show("dashboardScreen")};
  $("resetBtn").onclick=()=>{if(confirm("Wirklich den gespeicherten Fortschritt zurücksetzen?")){localStorage.clear();location.reload()}};
}
function renderCities(){
  $("cityGrid").innerHTML=Object.entries(DATA).map(([id,d])=>`
    <div class="city-card ${state.city===id?"selected":""}" data-city="${id}">
      <h3>🚒 ${d.name}</h3><p>${d.description}</p>
      <div class="mini">${d.modules.slice(0,5).map(m=>`<span class="tag">${m.title}</span>`).join("")}</div>
    </div>`).join("");
  document.querySelectorAll(".city-card").forEach(c=>c.onclick=()=>{state.city=c.dataset.city;save();renderCities()});
}
function continueToDashboard(){updateDashboard();show("dashboardScreen")}
function updateDashboard(){
  const d=cityData();$("dashboardTitle").textContent=d.name;$("dashboardSubtitle").textContent=d.description;
  $("moduleList").innerHTML=d.modules.map((m,i)=>`
    <div class="module" data-module="${m.id}">
      <div class="module-num">${i+1}</div><div><h3>${m.title}</h3><p>${m.desc}</p></div><small>START →</small>
    </div>`).join("");
  document.querySelectorAll(".module").forEach(x=>x.onclick=()=>openLesson(x.dataset.module));
  const attempts=JSON.parse(localStorage.getItem("fb_attempts_"+state.city)||"[]");
  $("statTests").textContent=attempts.length;
  $("statBest").textContent=attempts.length?Math.max(...attempts.map(x=>x.percent))+"%":"–";
  $("statPass").textContent=attempts.length?(attempts[attempts.length-1].passed?"BESTANDEN":"NICHT BESTANDEN"):"–";
  const done=new Set(JSON.parse(localStorage.getItem("fb_done_"+state.city)||"[]"));
  $("statProgress").textContent=Math.round(done.size/d.modules.length*100)+"%";
}
function openLesson(id){
  const d=cityData(),m=d.modules.find(x=>x.id===id);state.lastModule=id;state.lessonIndex=0;
  $("learnTitle").textContent=m.title;$("learnDescription").textContent=m.desc;
  $("lessonNav").innerHTML=m.lessons.map((l,i)=>`<button class="lesson-tab ${i===0?"active":""}" data-i="${i}">${i+1}. ${l[0]}</button>`).join("");
  document.querySelectorAll(".lesson-tab").forEach(b=>b.onclick=()=>renderLesson(m,Number(b.dataset.i)));
  renderLesson(m,0);show("learnScreen");
}
function renderLesson(m,i){
  state.lessonIndex=i;
  document.querySelectorAll(".lesson-tab").forEach((b,j)=>b.classList.toggle("active",j===i));
  const l=m.lessons[i];
  $("lessonBody").innerHTML=`<h2>${l[0]}</h2><p>${l[1]}</p>
    <div class="fact"><b>Merke:</b> Im echten Auswahlverfahren können Ablauf, Aufgaben und Anforderungen geändert werden. Nutze dieses Modul als Training, nicht als amtliche Prüfungsunterlage.</div>
    <h3>So trainierst du</h3><ul><li>Verstehe den Stoff statt nur Antworten auswendig zu lernen.</li><li>Trainiere regelmäßig unter Zeitdruck.</li><li>Notiere Fehler und wiederhole genau diese Themen.</li></ul>`;
}
function startModuleQuiz(id){
  const pool=QUESTIONS[state.city].filter(q=>{
    const map={mathe:"Mathematik",deutsch:"Deutsch",allgemein:"Allgemeinwissen",logik:"Logik",praktisch:"Praxis",sport:"Sport",physik:"Physik"};
    return q.c===map[id] || (id==="praktisch" && q.c==="Erste Hilfe") || (id==="sport" && q.c==="Sport");
  });
  state.examMode=false;state.examQuestions=shuffle(pool.length?pool:QUESTIONS[state.city]).slice(0,Math.min(5,QUESTIONS[state.city].length));state.questionIndex=0;state.score=0;startQuizUI(`${cityData().short} · ${cityData().modules.find(m=>m.id===id)?.title||"Training"}`,300);
}
function startExam(){
  state.examMode=true;state.examQuestions=shuffle([...QUESTIONS[state.city]]);state.questionIndex=0;state.score=0;
  startQuizUI(`${cityData().short} · Prüfungssimulation`,900);
}
function startQuizUI(title,seconds){
  state.timeLeft=seconds;state.answered=false;$("quizTitle").textContent=title;$("quizMode").textContent=state.examMode?"PRÜFUNG":"TRAINING";show("quizScreen");renderQuestion();startTimer();
}
function startTimer(){
  stopTimer();updateTimer();
  state.timer=setInterval(()=>{state.timeLeft--;updateTimer();if(state.timeLeft<=0){stopTimer();finishQuiz(true)}},1000);
}
function stopTimer(){if(state.timer){clearInterval(state.timer);state.timer=null}}
function updateTimer(){const m=String(Math.floor(state.timeLeft/60)).padStart(2,"0"),s=String(state.timeLeft%60).padStart(2,"0");$("timer").textContent=`${m}:${s}`;$("timer").classList.toggle("warning",state.timeLeft<60)}
function renderQuestion(){
  const q=state.examQuestions[state.questionIndex],total=state.examQuestions.length;
  $("questionCount").textContent=`Aufgabe ${state.questionIndex+1} / ${total}`;
  $("questionCategory").textContent=q.c;$("questionText").textContent=q.q;
  $("quizProgress").style.width=((state.questionIndex)/total*100)+"%";$("feedback").className="feedback hidden";$("feedback").innerHTML="";
  $("answers").innerHTML=q.a.map((a,i)=>`<button class="answer" data-i="${i}">${String.fromCharCode(65+i)} · ${a}</button>`).join("");
  document.querySelectorAll(".answer").forEach(b=>b.onclick=()=>answer(Number(b.dataset.i)));
  $("nextBtn").textContent=state.questionIndex===total-1?"Auswertung →":"Nächste Aufgabe →";
  state.answered=false;
}
function answer(i){
  if(state.answered)return;state.answered=true;const q=state.examQuestions[state.questionIndex];
  document.querySelectorAll(".answer").forEach((b,j)=>{b.disabled=true;if(j===q.correct)b.classList.add("correct");if(j===i&&i!==q.correct)b.classList.add("wrong");});
  if(i===q.correct)state.score++;
  $("feedback").className="feedback "+(i===q.correct?"good":"bad");$("feedback").innerHTML=`<b>${i===q.correct?"Richtig!":"Nicht ganz."}</b> ${q.e}`;
}
function nextQuestion(){
  if(!state.answered){alert("Bitte wähle zuerst eine Antwort.");return}
  if(state.questionIndex>=state.examQuestions.length-1){finishQuiz(false);return}
  state.questionIndex++;renderQuestion();
}
function finishQuiz(timeout){
  stopTimer();const total=state.examQuestions.length,percent=Math.round(state.score/total*100);
  const pass=state.examMode?percent>=70:percent>=60;
  if(state.examMode){
    const attempts=JSON.parse(localStorage.getItem("fb_attempts_"+state.city)||"[]");
    attempts.push({percent,passed:pass,date:new Date().toLocaleString("de-DE")});
    localStorage.setItem("fb_attempts_"+state.city,JSON.stringify(attempts.slice(-20)));
  }else{
    const done=new Set(JSON.parse(localStorage.getItem("fb_done_"+state.city)||"[]"));done.add(state.lastModule);localStorage.setItem("fb_done_"+state.city,JSON.stringify([...done]));
  }
  $("resultIcon").textContent=pass?"🏆":"📚";$("resultTitle").textContent=pass?"BESTANDEN":"NOCH NICHT BESTANDEN";
  $("resultSubtitle").textContent=timeout?"Die Zeit ist abgelaufen.":"Auswertung abgeschlossen.";
  $("resultPercent").textContent=percent+"%";$("resultPoints").textContent=`${state.score} von ${total} Aufgaben richtig`;
  $("resultDetails").innerHTML=`<div class="detail"><b>${state.score}</b><span>Richtig</span></div><div class="detail"><b>${total-state.score}</b><span>Falsch</span></div><div class="detail"><b>${state.examMode?"70":"60"}%</b><span>Simulationsgrenze</span></div>`;
  show("resultScreen");
}
function shuffle(arr){return arr.map(v=>({v,r:Math.random()})).sort((a,b)=>a.r-b.r).map(x=>x.v)}
init();
