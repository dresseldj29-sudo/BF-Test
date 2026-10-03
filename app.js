/* =====================================================
   FEUERWEHR BEWERBUNGSTRAINER
===================================================== */


/* =====================================================
   BERUFSFEUERWEHREN
===================================================== */

const FEUERWEHREN = {

    nuernberg: {

        name: "Berufsfeuerwehr Nürnberg",

        description:
            "Training nach öffentlich beschriebenen Bestandteilen des Auswahlverfahrens.",

        module: [

            {
                id: "deutsch",

                name: "Deutsch",

                description:
                    "Textverständnis, Rechtschreibung und Sprache"
            },

            {
                id: "mathematik",

                name: "Mathematik",

                description:
                    "Rechnen, Prozentrechnung und Geometrie"
            },

            {
                id: "allgemeinwissen",

                name: "Allgemeinwissen",

                description:
                    "Staat, Geschichte, Gesellschaft und Feuerwehr"
            },

            {
                id: "logik",

                name: "Logik",

                description:
                    "Zahlenreihen, Muster und Schlussfolgerungen"
            },

            {
                id: "praxis",

                name: "Praktischer Teil",

                description:
                    "Handwerk, Technik und Erste Hilfe"
            },

            {
                id: "sport",

                name: "Sporttest",

                description:
                    "Ausdauer, Kraft, Koordination und Schwimmen"
            }

        ]

    },


    muenchen: {

        name: "Berufsfeuerwehr München",

        description:
            "Training nach öffentlich beschriebenen Bestandteilen des Auswahlverfahrens.",

        module: [

            {
                id: "deutsch",

                name: "Deutsch",

                description:
                    "Deutschgrundlagen und Sprachverständnis"
            },

            {
                id: "logik",

                name: "Logik",

                description:
                    "Logisches Denken und Problemlösen"
            },

            {
                id: "allgemeinwissen",

                name: "Allgemeinwissen",

                description:
                    "Allgemeine Kenntnisse"
            },

            {
                id: "mathematik",

                name: "Mathematik",

                description:
                    "Mathematik ohne Taschenrechner"
            },

            {
                id: "physik",

                name: "Physik",

                description:
                    "Kräfte, Bewegung und technische Grundlagen"
            },

            {
                id: "praxis",

                name: "Praktischer Test",

                description:
                    "Handwerk und technisches Verständnis"
            },

            {
                id: "sport",

                name: "Sporttest",

                description:
                    "Kraft, Ausdauer, Koordination und Schwimmen"
            }

        ]

    }

};



/* =====================================================
   FRAGEN
===================================================== */

const FRAGEN = {

    nuernberg: [

        {
            thema: "Mathematik",

            frage:
                "Ein Fahrzeug fährt 3,3 Meter pro Sekunde. Wie weit fährt es in 60 Sekunden?",

            antworten: [

                "19,8 Meter",

                "198 Meter",

                "1.980 Meter",

                "33 Meter"

            ],

            richtig: 1,

            erklaerung:
                "3,3 × 60 = 198 Meter."

        },


        {
            thema: "Mathematik",

            frage:
                "Wie viel sind 25 % von 200?",

            antworten: [

                "25",

                "40",

                "50",

                "75"

            ],

            richtig: 2,

            erklaerung:
                "25 % entsprechen einem Viertel. 200 ÷ 4 = 50."

        },


        {
            thema: "Allgemeinwissen",

            frage:
                "Wie viele Bundesländer hat Deutschland?",

            antworten: [

                "14",

                "15",

                "16",

                "17"

            ],

            richtig: 2,

            erklaerung:
                "Deutschland besteht aus 16 Bundesländern."

        },


        {
            thema: "Logik",

            frage:
                "Welche Zahl folgt? 3 – 6 – 12 – 24 – ?",

            antworten: [

                "30",

                "36",

                "48",

                "54"

            ],

            richtig: 2,

            erklaerung:
                "Jede Zahl wird mit 2 multipliziert."

        },


        {
            thema: "Deutsch",

            frage:
                "Welche Aussage ist eine sachliche Zusammenfassung?",

            antworten: [

                "Der Text ist total spannend.",

                "Der Text gibt die wichtigsten Informationen zum Thema wieder.",

                "Ich finde den Text langweilig.",

                "Der Autor hätte etwas anderes schreiben sollen."

            ],

            richtig: 1,

            erklaerung:
                "Eine Zusammenfassung gibt die wesentlichen Informationen sachlich wieder."

        },


        {
            thema: "Praxis",

            frage:
                "Was sollte vor der Benutzung eines Werkzeugs passieren?",

            antworten: [

                "Sofort loslegen.",

                "Werkzeug auf den Boden werfen.",

                "Werkzeug und Sicherheitszustand prüfen.",

                "Nur nach Gefühl arbeiten."

            ],

            richtig: 2,

            erklaerung:
                "Vor der Benutzung muss das Werkzeug geprüft werden."

        },


        {
            thema: "Erste Hilfe",

            frage:
                "Was gehört grundsätzlich zu den ersten Maßnahmen bei einem Notfall?",

            antworten: [

                "Eigenschutz und Lageeinschätzung",

                "Fotos machen",

                "Weggehen",

                "Erst nach einer Stunde helfen"

            ],

            richtig: 0,

            erklaerung:
                "Eigenschutz und Lageeinschätzung sind grundlegende erste Schritte."

        },


        {
            thema: "Sport",

            frage:
                "Welche Fähigkeit wird hauptsächlich durch einen langen Lauf geprüft?",

            antworten: [

                "Ausdauer",

                "Hörvermögen",

                "Feinmotorik",

                "Sehkraft"

            ],

            richtig: 0,

            erklaerung:
                "Ein längerer Lauf prüft hauptsächlich die Ausdauer."

        }

    ],



    muenchen: [

        {
            thema: "Mathematik",

            frage:
                "Ein Schlauch ist 20 Meter lang. Drei Schläuche werden verbunden. Wie lang ist die Gesamtstrecke?",

            antworten: [

                "40 Meter",

                "50 Meter",

                "60 Meter",

                "80 Meter"

            ],

            richtig: 2,

            erklaerung:
                "20 × 3 = 60 Meter."

        },


        {
            thema: "Physik",

            frage:
                "Welche Einheit gehört zur Kraft?",

            antworten: [

                "Joule",

                "Newton",

                "Watt",

                "Pascal"

            ],

            richtig: 1,

            erklaerung:
                "Die Einheit der Kraft ist Newton."

        },


        {
            thema: "Physik",

            frage:
                "Welche Formel beschreibt Geschwindigkeit?",

            antworten: [

                "v = s / t",

                "v = t / s",

                "v = s × t",

                "v = F / A"

            ],

            richtig: 0,

            erklaerung:
                "Geschwindigkeit ist Strecke geteilt durch Zeit."

        },


        {
            thema: "Deutsch",

            frage:
                "Welche Formulierung ist sachlich?",

            antworten: [

                "Das ist total genial!",

                "Der Bericht beschreibt den Einsatzablauf.",

                "Das war unglaublich cool.",

                "Das war bestimmt das beste Fahrzeug."

            ],

            richtig: 1,

            erklaerung:
                "Eine sachliche Formulierung beschreibt ohne persönliche Wertung."

        },


        {
            thema: "Logik",

            frage:
                "Welche Zahl folgt? 2 – 5 – 10 – 17 – 26 – ?",

            antworten: [

                "31",

                "35",

                "37",

                "40"

            ],

            richtig: 2,

            erklaerung:
                "Die Abstände sind +3, +5, +7, +9, +11. Daher 37."

        },


        {
            thema: "Allgemeinwissen",

            frage:
                "Welche Stadt ist die Landeshauptstadt Bayerns?",

            antworten: [

                "Nürnberg",

                "Augsburg",

                "München",

                "Regensburg"

            ],

            richtig: 2,

            erklaerung:
                "München ist die Landeshauptstadt Bayerns."

        },


        {
            thema: "Praxis",

            frage:
                "Warum soll ein Werkzeug vor der Benutzung geprüft werden?",

            antworten: [

                "Nur wegen der Optik.",

                "Um Schäden und Gefahren zu erkennen.",

                "Damit es schwerer wird.",

                "Damit die Aufgabe länger dauert."

            ],

            richtig: 1,

            erklaerung:
                "Beschädigte Werkzeuge können zu Unfällen führen."

        },


        {
            thema: "Mathematik",

            frage:
                "Wie viele Meter sind 1,5 Kilometer?",

            antworten: [

                "15",

                "150",

                "1.500",

                "15.000"

            ],

            richtig: 2,

            erklaerung:
                "1 Kilometer = 1.000 Meter. Daher 1,5 km = 1.500 m."

        }

    ]

};



/* =====================================================
   PROGRAMM STATUS
===================================================== */

let ausgewählteFeuerwehr = null;

let aktuelleFragen = [];

let aktuelleFrage = 0;

let richtigeAntworten = 0;

let antwortGegeben = false;

let prüfung = false;

let timer = null;

let zeit = 0;

let aktuellesModul = null;



/* =====================================================
   HILFSFUNKTION
===================================================== */

function zeigeSeite(id) {

    document
        .querySelectorAll(".screen")
        .forEach(seite => {

            seite.classList.remove("active");

        });


    document
        .getElementById(id)
        .classList.add("active");


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}



/* =====================================================
   FEUERWEHREN ANZEIGEN
===================================================== */

function zeigeFeuerwehren() {

    const container =
        document.getElementById("cityGrid");


    container.innerHTML = "";


    for (
        const [id, feuerwehr]
        of Object.entries(FEUERWEHREN)
    ) {

        const element =
            document.createElement("div");


        element.className =
            "city-card";


        element.innerHTML = `

            <h3>
                🚒 ${feuerwehr.name}
            </h3>

            <p>
                ${feuerwehr.description}
            </p>

            <div class="tags">

                ${feuerwehr.module
                    .slice(0,5)
                    .map(modul =>
                        `<span class="tag">
                            ${modul.name}
                        </span>`
                    )
                    .join("")
                }

            </div>

        `;


        element.onclick = function() {

            ausgewählteFeuerwehr = id;


            document
                .querySelectorAll(".city-card")
                .forEach(card =>
                    card.classList.remove("selected")
                );


            element.classList.add("selected");

        };


        container.appendChild(element);

    }

}



/* =====================================================
   DASHBOARD
===================================================== */

function öffneDashboard() {

    const feuerwehr =
        FEUERWEHREN[ausgewählteFeuerwehr];


    document.getElementById(
        "dashboardTitle"
    ).textContent =
        feuerwehr.name;


    document.getElementById(
        "dashboardDescription"
    ).textContent =
        feuerwehr.description;


    const module =
        document.getElementById("moduleList");


    module.innerHTML = "";


    feuerwehr.module.forEach(
        (modul, index) => {

            const element =
                document.createElement("div");


            element.className =
                "module";


            element.innerHTML = `

                <div class="module-number">
                    ${index + 1}
                </div>

                <div>

                    <h3>
                        ${modul.name}
                    </h3>

                    <p>
                        ${modul.description}
                    </p>

                </div>

                <small>
                    START →
                </small>

            `;


            element.onclick = () =>
                öffneLernmodul(modul);


            module.appendChild(element);

        }
    );


    ladeStatistik();


    zeigeSeite("dashboardScreen");

}



/* =====================================================
   LERNMODUL
===================================================== */

function öffneLernmodul(modul) {

    aktuellesModul = modul;


    document.getElementById(
        "learningTitle"
    ).textContent =
        modul.name;


    document.getElementById(
        "learningDescription"
    ).textContent =
        modul.description;


    document.getElementById(
        "lessonText"
    ).innerHTML = `

        <h2>
            ${modul.name}
        </h2>

        <p>
            In diesem Lernmodul trainierst du
            die Grundlagen für den Bereich
            <strong>${modul.name}</strong>.
        </p>

        <h3>
            Lernstrategie
        </h3>

        <p>
            Lies die Informationen sorgfältig,
            lerne die Grundlagen und teste dich
            anschließend mit den Prüfungsfragen.
        </p>

        <div class="fact">

            <strong>
                Wichtig:
            </strong>

            Im echten Auswahlverfahren können
            Aufgaben und Anforderungen geändert
            werden. Dieses Modul ist eine
            Trainingssimulation.

        </div>

        <h3>
            Prüfungstipp
        </h3>

        <ul>

            <li>
                Aufgaben genau lesen
            </li>

            <li>
                Nicht vorschnell antworten
            </li>

            <li>
                Schwierige Aufgaben markieren
            </li>

            <li>
                Zeit im Auge behalten
            </li>

        </ul>

    `;


    zeigeSeite("learningScreen");

}



/* =====================================================
   MODULTEST
===================================================== */

function starteModulTest() {

    const alle =
        FRAGEN[ausgewählteFeuerwehr];


    aktuelleFragen =
        alle
        .filter(frage => {

            return frage.thema
                .toLowerCase()
                .includes(
                    aktuellesModul.name
                    .split(" ")[0]
                    .toLowerCase()
                );

        });


    if (
        aktuelleFragen.length === 0
    ) {

        aktuelleFragen =
            [...alle]
            .sort(() =>
                Math.random() - .5
            )
            .slice(0,5);

    }


    aktuelleFragen =
        aktuelleFragen.slice(0,5);


    prüfung = false;


    starteQuiz(
        aktuellesModul.name,
        300
    );

}



/* =====================================================
   KOMPLETTE PRÜFUNG
===================================================== */

function startePrüfung() {

    aktuelleFragen =
        [...FRAGEN[ausgewählteFeuerwehr]]
        .sort(() =>
            Math.random() - .5
        );


    prüfung = true;


    starteQuiz(
        "Komplette Prüfung",
        900
    );

}



/* =====================================================
   QUIZ STARTEN
===================================================== */

function starteQuiz(titel, sekunden) {

    aktuelleFrage = 0;

    richtigeAntworten = 0;

    antwortGegeben = false;

    zeit = sekunden;


    document.getElementById(
        "quizTitle"
    ).textContent =
        `${FEUERWEHREN[ausgewählteFeuerwehr].name} · ${titel}`;


    document.getElementById(
        "quizMode"
    ).textContent =
        prüfung
            ? "PRÜFUNG"
            : "TRAINING";


    zeigeSeite("quizScreen");


    zeigeFrage();


    starteTimer();

}



/* =====================================================
   TIMER
===================================================== */

function starteTimer() {

    stoppeTimer();


    aktualisiereTimer();


    timer =
        setInterval(() => {

            zeit--;


            aktualisiereTimer();


            if (zeit <= 0) {

                stoppeTimer();

                beendeQuiz(true);

            }

        },1000);

}



function stoppeTimer() {

    if (timer) {

        clearInterval(timer);

        timer = null;

    }

}



function aktualisiereTimer() {

    const minuten =
        String(
            Math.floor(zeit / 60)
        ).padStart(2,"0");


    const sekunden =
        String(
            zeit % 60
        ).padStart(2,"0");


    const timerElement =
        document.getElementById("timer");


    timerElement.textContent =
        `${minuten}:${sekunden}`;


    timerElement.classList.toggle(
        "warning",
        zeit < 60
    );

}



/* =====================================================
   FRAGE ANZEIGEN
===================================================== */

function zeigeFrage() {

    const frage =
        aktuelleFragen[aktuelleFrage];


    const gesamt =
        aktuelleFragen.length;


    document.getElementById(
        "questionNumber"
    ).textContent =
        `Aufgabe ${aktuelleFrage + 1} / ${gesamt}`;


    document.getElementById(
        "questionCategory"
    ).textContent =
        frage.thema;


    document.getElementById(
        "question"
    ).textContent =
        frage.frage;


    document.getElementById(
        "progressBar"
    ).style.width =
        `${aktuelleFrage / gesamt * 100}%`;


    const antwortContainer =
        document.getElementById("answers");


    antwortContainer.innerHTML = "";


    frage.antworten.forEach(
        (antwort,index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer";


            button.textContent =
                `${String.fromCharCode(65 + index)} · ${antwort}`;


            button.onclick = () =>
                beantworteFrage(index);


            antwortContainer.appendChild(button);

        }
    );


    const feedback =
        document.getElementById("feedback");


    feedback.className =
        "feedback hidden";


    feedback.innerHTML = "";


    document.getElementById(
        "nextQuestion"
    ).textContent =
        aktuelleFrage === gesamt - 1
            ? "Auswertung →"
            : "Nächste Aufgabe →";


    antwortGegeben = false;

}



/* =====================================================
   ANTWORT
===================================================== */

function beantworteFrage(index) {

    if (antwortGegeben)
        return;


    antwortGegeben = true;


    const frage =
        aktuelleFragen[aktuelleFrage];


    const buttons =
        document.querySelectorAll(".answer");


    buttons.forEach(
        (button,index2) => {

            button.disabled = true;


            if (
                index2 === frage.richtig
            ) {

                button.classList.add(
                    "correct"
                );

            }


            if (
                index2 === index &&
                index !== frage.richtig
            ) {

                button.classList.add(
                    "wrong"
                );

            }

        }
    );


    const richtig =
        index === frage.richtig;


    if (richtig)
        richtigeAntworten++;


    const feedback =
        document.getElementById(
            "feedback"
        );


    feedback.className =
        `feedback ${
            richtig
                ? "good"
                : "bad"
        }`;


    feedback.innerHTML = `

        <strong>
            ${
                richtig
                    ? "Richtig!"
                    : "Nicht richtig."
            }
        </strong>

        ${frage.erklaerung}

    `;

}



/* =====================================================
   NÄCHSTE FRAGE
===================================================== */

function nächsteFrage() {

    if (!antwortGegeben) {

        alert(
            "Bitte zuerst eine Antwort auswählen."
        );

        return;

    }


    if (
        aktuelleFrage >=
        aktuelleFragen.length - 1
    ) {

        beendeQuiz(false);

        return;

    }


    aktuelleFrage++;


    zeigeFrage();

}



/* =====================================================
   QUIZ BEENDEN
===================================================== */

function beendeQuiz(zeitAbgelaufen) {

    stoppeTimer();


    const gesamt =
        aktuelleFragen.length;


    const prozent =
        Math.round(
            richtigeAntworten /
            gesamt *
            100
        );


    const bestanden =
        prüfung
            ? prozent >= 70
            : prozent >= 60;


    document.getElementById(
        "resultIcon"
    ).textContent =
        bestanden
            ? "🏆"
            : "📚";


    document.getElementById(
        "resultTitle"
    ).textContent =
        bestanden
            ? "BESTANDEN"
            : "NOCH NICHT BESTANDEN";


    document.getElementById(
        "resultDescription"
    ).textContent =
        zeitAbgelaufen
            ? "Die Prüfungszeit ist abgelaufen."
            : "Die Prüfung wurde ausgewertet.";


    document.getElementById(
        "resultPercent"
    ).textContent =
        `${prozent}%`;


    document.getElementById(
        "resultPoints"
    ).textContent =
        `${richtigeAntworten} von ${gesamt} Aufgaben richtig`;


    document.getElementById(
        "resultDetails"
    ).innerHTML = `

        <div class="result-detail">

            <strong>
                ${richtigeAntworten}
            </strong>

            <span>
                Richtig
            </span>

        </div>


        <div class="result-detail">

            <strong>
                ${gesamt - richtigeAntworten}
            </strong>

            <span>
                Falsch
            </span>

        </div>


        <div class="result-detail">

            <strong>
                ${prüfung ? 70 : 60}%
            </strong>

            <span>
                Bestehensgrenze
            </span>

        </div>

    `;


    if (prüfung) {

        speicherePrüfung(
            prozent,
            bestanden
        );

    }


    zeigeSeite(
        "resultScreen"
    );

}



/* =====================================================
   STATISTIK
===================================================== */

function speicherePrüfung(
    prozent,
    bestanden
) {

    const key =
        `feuerwehr_tests_${ausgewählteFeuerwehr}`;


    const tests =
        JSON.parse(
            localStorage.getItem(key)
            || "[]"
        );


    tests.push({

        datum:
            new Date()
            .toLocaleString("de-DE"),

        prozent,

        bestanden

    });


    localStorage.setItem(
        key,
        JSON.stringify(tests)
    );

}



function ladeStatistik() {

    const key =
        `feuerwehr_tests_${ausgewählteFeuerwehr}`;


    const tests =
        JSON.parse(
            localStorage.getItem(key)
            || "[]"
        );


    document.getElementById(
        "statTests"
    ).textContent =
        tests.length;


    if (tests.length === 0) {

        document.getElementById(
            "statBest"
        ).textContent = "–";


        document.getElementById(
            "statLast"
        ).textContent = "–";

        return;

    }


    const beste =
        Math.max(
            ...tests.map(
                test => test.prozent
            )
        );


    const letzte =
        tests[tests.length - 1];


    document.getElementById(
        "statBest"
    ).textContent =
        `${beste}%`;


    document.getElementById(
        "statLast"
    ).textContent =
        letzte.bestanden
            ? "BESTANDEN"
            : "NICHT BESTANDEN";

}



/* =====================================================
   BUTTONS
===================================================== */

document
    .getElementById("startButton")
    .onclick = function() {

        if (!ausgewählteFeuerwehr) {

            alert(
                "Bitte zuerst eine Berufsfeuerwehr auswählen."
            );

            return;

        }


        const name =
            document.getElementById(
                "nameInput"
            ).value;


        localStorage.setItem(
            "feuerwehr_name",
            name
        );


        öffneDashboard();

    };



document
    .getElementById("changeCityButton")
    .onclick = function() {

        zeigeSeite(
            "startScreen"
        );

    };



document
    .getElementById("examButton")
    .onclick =
    startePrüfung;



document
    .getElementById("lessonTestButton")
    .onclick =
    starteModulTest;



document
    .getElementById("nextQuestion")
    .onclick =
    nächsteFrage;



document
    .getElementById("cancelQuiz")
    .onclick =
    function() {

        stoppeTimer();

        öffneDashboard();

    };



document
    .getElementById("retryButton")
    .onclick =
    function() {

        if (prüfung) {

            startePrüfung();

        } else {

            starteModulTest();

        }

    };



document
    .getElementById("resultDashboard")
    .onclick =
    function() {

        öffneDashboard();

    };



document
    .getElementById("backButton")
    .onclick =
    function() {

        öffneDashboard();

    };



document
    .getElementById("resetButton")
    .onclick =
    function() {

        if (
            confirm(
                "Gesamten gespeicherten Fortschritt löschen?"
            )
        ) {

            localStorage.clear();

            location.reload();

        }

    };



/* =====================================================
   START
===================================================== */

zeigeFeuerwehren();
