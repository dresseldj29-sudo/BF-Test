/* =====================================================
   FEUERWEHR BEWERBUNGSTRAINER
   VERSION: 20 FRAGEN PRO ÜBUNG
===================================================== */


/* =====================================================
   FEUERWEHREN
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

    nuernberg: {

        deutsch: [

            ["Welche Formulierung ist sachlich?",
             ["Das ist total genial!","Der Bericht beschreibt den Einsatz.","Das war mega cool.","Das war bestimmt das beste Fahrzeug."],1],

            ["Welche Schreibweise ist richtig?",
             ["Feuerwehr","Feuerwer","Feuerwehrh","Feuer wehr"],0],

            ["Was ist eine Zusammenfassung?",
             ["Eine persönliche Meinung","Eine kurze Wiedergabe der wichtigsten Inhalte","Eine Geschichte","Eine Werbung"],1],

            ["Welche Formulierung ist korrekt?",
             ["Der Einsatz wurde erfolgreich beendet.","Der Einsatz wurde erfolgreich beändet.","Der Einsatz würd erfolgreich beendet.","Der Einsatz wurde erfolgrreich beendet."],0],

            ["Was bedeutet 'präzise'?",
             ["Ungenau","Genau","Langsam","Laut"],1],

            ["Was ist das Gegenteil von 'ruhig'?",
             ["leise","gelassen","unruhig","vorsichtig"],2],

            ["Welches Wort ist richtig geschrieben?",
             ["Maschiene","Maschine","Masiene","Maschinne"],1],

            ["Was ist ein Verb?",
             ["laufen","Feuerwehr","rot","schnell"],0],

            ["Was ist ein Nomen?",
             ["laufen","schnell","Fahrzeug","sehr"],2],

            ["Welche Aussage ist eine Tatsache?",
             ["Feuerwehrautos sind cool.","Ein Fahrzeug hat vier Räder.","Ich finde Feuerwehr spannend.","Das ist das beste Auto."],1],

            ["Was bedeutet 'konzentriert arbeiten'?",
             ["Ablenkung suchen","Aufmerksam arbeiten","Schnell aufgeben","Nur raten"],1],

            ["Welche Schreibweise ist richtig?",
             ["Einsatzleiter","Einsazleiter","Einsatzleita","Einsatz leit er"],0],

            ["Was ist ein Synonym für 'beginnen'?",
             ["enden","starten","verlieren","stoppen"],1],

            ["Welche Aussage ist neutral?",
             ["Der Bericht nennt drei Einsatzkräfte.","Das war ein unglaublich guter Einsatz.","Das Fahrzeug ist hässlich.","Der Einsatz war langweilig."],0],

            ["Was bedeutet 'kontrollieren'?",
             ["prüfen","vergessen","zerstören","beschleunigen"],0],

            ["Welche Schreibweise ist richtig?",
             ["Ausrüstung","Ausrustung","Ausrrüstung","Ausrüsttung"],0],

            ["Was ist das Gegenteil von 'gefährlich'?",
             ["riskant","sicher","schwer","schnell"],1],

            ["Was beschreibt 'sorgfältig'?",
             ["genau und aufmerksam","sehr schnell","laut","zufällig"],0],

            ["Was ist eine Frage?",
             ["Der Einsatz beginnt.","Wann beginnt der Einsatz?","Der Einsatz beginnt!","Einsatzbeginn."],1],

            ["Welche Aussage enthält eine Meinung?",
             ["Der Einsatz dauerte 30 Minuten.","Das Fahrzeug hat einen Wassertank.","Ich finde die Aufgabe schwierig.","Der Test beginnt um 9 Uhr."],2]

        ],


        mathematik: [

            ["3,3 × 60 = ?",["19,8","198","1.980","33"],1],

            ["25 % von 200 = ?",["25","40","50","75"],2],

            ["100 + 250 = ?",["300","350","400","450"],1],

            ["500 - 175 = ?",["225","275","325","375"],2],

            ["12 × 8 = ?",["86","96","106","116"],1],

            ["144 ÷ 12 = ?",["10","11","12","14"],2],

            ["1,5 km sind wie viele Meter?",["15","150","1.500","15.000"],2],

            ["2,5 Stunden sind wie viele Minuten?",["120","150","180","200"],1],

            ["10 % von 500 = ?",["5","25","50","100"],2],

            ["75 % von 400 = ?",["200","250","300","350"],2],

            ["7 × 9 = ?",["56","63","72","81"],1],

            ["200 ÷ 8 = ?",["20","25","30","35"],1],

            ["3/4 von 100 = ?",["25","50","75","80"],2],

            ["Ein Schlauch ist 20 m lang. Drei Schläuche sind verbunden. Länge?",["40 m","50 m","60 m","80 m"],2],

            ["2,4 + 3,6 = ?",["5","6","7","8"],1],

            ["10² = ?",["20","50","100","1.000"],2],

            ["Ein Fahrzeug fährt 60 km/h. Wie weit in 2 Stunden?",["30 km","60 km","120 km","180 km"],2],

            ["400 - 125 = ?",["225","250","275","300"],2],

            ["5 × 15 = ?",["50","65","75","85"],2],

            ["900 ÷ 30 = ?",["20","30","40","50"],1]

        ],


        allgemeinwissen: [

            ["Wie viele Bundesländer hat Deutschland?",["14","15","16","17"],2],

            ["Wie heißt die Hauptstadt Deutschlands?",["München","Berlin","Hamburg","Köln"],1],

            ["Welche Stadt ist Landeshauptstadt Bayerns?",["Nürnberg","München","Augsburg","Regensburg"],1],

            ["Wann ist der Tag der Deutschen Einheit?",["1. Mai","3. Oktober","9. November","24. Dezember"],1],

            ["Wie viele Tage hat ein Schaltjahr?",["364","365","366","367"],2],

            ["Wie viele Minuten hat eine Stunde?",["30","45","60","90"],2],

            ["Wie viele Sekunden hat eine Minute?",["30","45","60","90"],2],

            ["Welche Farbe hat eine deutsche Rettungsdienstkennzeichnung häufig?",["Rot","Schwarz","Lila","Braun"],0],

            ["Welche Nummer ist die europäische Notrufnummer?",["110","112","116","118"],1],

            ["Welche Nummer ist in Deutschland die Polizei-Notrufnummer?",["110","112","115","116"],0],

            ["Was ist Bayern?",["Ein Bundesland","Ein Landkreis","Eine Stadt","Ein Staat"],0],

            ["Was ist Nürnberg?",["Eine Stadt","Ein Bundesland","Ein Staat","Eine Insel"],0],

            ["Welche Institution beschließt Bundesgesetze mit?",["Bundestag","Feuerwehr","Polizei","Schule"],0],

            ["Was bedeutet Demokratie?",["Herrschaft des Volkes","Militärherrschaft","Alleinherrschaft","Gerichtssystem"],0],

            ["Welche Einheit gehört zur Zeit?",["Sekunde","Newton","Meter","Liter"],0],

            ["Was ist eine Kommune?",["Eine Gemeinde bzw. Stadt","Ein Fahrzeug","Ein Werkzeug","Ein Gebäude"],0],

            ["Was bedeutet Erste Hilfe?",["Sofortige Hilfe bis professionelle Hilfe übernimmt","Nur ärztliche Behandlung","Nur Transport","Nur Dokumentation"],0],

            ["Welche Organisation ist für Brandschutz zuständig?",["Feuerwehr","Post","Finanzamt","Bibliothek"],0],

            ["Was bedeutet 112?",["Notruf","Wetterdienst","Auskunft","Taxi"],0],

            ["Was ist ein Bundesland?",["Teil eines föderalen Staates","Ein Fahrzeug","Ein Beruf","Ein Gebäude"],0]

        ],


        logik: [

            ["3 – 6 – 12 – 24 – ?",["30","36","48","54"],2],

            ["2 – 4 – 8 – 16 – ?",["20","24","32","40"],2],

            ["5 – 10 – 15 – 20 – ?",["22","25","30","35"],1],

            ["10 – 20 – 40 – 80 – ?",["100","120","160","180"],2],

            ["1 – 4 – 9 – 16 – ?",["20","24","25","30"],2],

            ["2 – 5 – 10 – 17 – 26 – ?",["31","35","37","40"],2],

            ["100 – 90 – 80 – 70 – ?",["50","55","60","65"],2],

            ["4 – 8 – 12 – 16 – ?",["18","20","22","24"],1],

            ["81 – 27 – 9 – 3 – ?",["0","1","2","6"],1],

            ["7 – 14 – 28 – 56 – ?",["84","98","112","120"],2],

            ["20 – 18 – 16 – 14 – ?",["10","11","12","13"],3],

            ["1 – 2 – 4 – 8 – 16 – ?",["20","24","32","36"],2],

            ["6 – 12 – 18 – 24 – ?",["28","30","32","36"],1],

            ["50 – 45 – 40 – 35 – ?",["25","30","35","40"],1],

            ["3 – 9 – 27 – ?",["54","72","81","90"],2],

            ["Alle A sind B. Max ist A. Was folgt?",["Max ist B","Max ist C","Max ist kein B","Nichts"],0],

            ["Alle Einsatzkräfte tragen Helm. Max ist Einsatzkraft. Was folgt?",["Max trägt Helm","Max trägt keinen Helm","Max ist Fahrer","Nichts"],0],

            ["Welche Zahl ist größer?",["0,5","0,05","0,005","0,0005"],0],

            ["Welche Form folgt auf Kreis, Quadrat, Kreis, Quadrat?",["Kreis","Dreieck","Linie","Stern"],0],

            ["Wenn heute Montag ist, welcher Tag ist in zwei Tagen?",["Dienstag","Mittwoch","Donnerstag","Freitag"],1]

        ],


        praxis: [

            ["Was sollte vor der Werkzeugbenutzung passieren?",["Sofort arbeiten","Werkzeug prüfen","Werkzeug werfen","Raten"],1],

            ["Was dient dem Messen einer Länge?",["Meterstab","Hammer","Schraubendreher","Zange"],0],

            ["Was schützt die Hände?",["Handschuhe","Helm","Gehörschutz","Stiefel"],0],

            ["Was schützt den Kopf?",["Handschuhe","Helm","Brille","Gürtel"],1],

            ["Was sollte bei beschädigtem Werkzeug passieren?",["Weiter benutzen","Aussortieren und melden","Verstecken","Werfen"],1],

            ["Was ist Eigenschutz?",["Sich selbst vor Gefahren schützen","Schnell laufen","Laut rufen","Fotos machen"],0],

            ["Was ist bei einem Notruf wichtig?",["Ort und Lage nennen","Nur den Namen nennen","Auflegen","Musik abspielen"],0],

            ["Welche Nummer ist der Feuerwehr-Notruf?",["110","112","115","118"],1],

            ["Was ist ein Schraubenschlüssel?",["Werkzeug","Fahrzeug","Schlauch","Helm"],0],

            ["Was macht eine Zange?",["Greifen/Halten","Messen","Schwimmen","Funken erzeugen"],0],

            ["Was ist ein Maßband?",["Messwerkzeug","Schutzhelm","Fahrzeug","Schlauch"],0],

            ["Warum Schutzbrille tragen?",["Augen schützen","Besser hören","Schneller laufen","Besser messen"],0],

            ["Was ist bei unbekannter Gefahr sinnvoll?",["Abstand halten und Lage beurteilen","Hineinlaufen","Gefahr ignorieren","Allein handeln"],0],

            ["Was bedeutet Teamarbeit?",["Gemeinsam koordiniert arbeiten","Allein arbeiten","Nur einer entscheidet alles","Nicht kommunizieren"],0],

            ["Was ist eine Leiter?",["Aufstiegsmittel","Schneidwerkzeug","Messgerät","Fahrzeug"],0],

            ["Was ist ein Feuerlöscher?",["Löschgerät","Messgerät","Werkzeugkasten","Fahrzeug"],0],

            ["Was ist eine PSA?",["Persönliche Schutzausrüstung","Private Sportausrüstung","Polizeisystem","Prüfungssoftware"],0],

            ["Was ist bei Erste Hilfe wichtig?",["Eigenschutz beachten","Gefahr ignorieren","Nichts tun","Wegsehen"],0],

            ["Was sollte man bei einer Aufgabe zuerst tun?",["Aufgabe verstehen","Sofort rennen","Werkzeug werfen","Raten"],0],

            ["Was bedeutet sorgfältiges Arbeiten?",["Genau und aufmerksam arbeiten","Sehr schnell arbeiten","Nicht kontrollieren","Raten"],0]

        ],


        sport: [

            ["Was trainiert ein langer Lauf hauptsächlich?",["Ausdauer","Hörvermögen","Schreiben","Sehen"],0],

            ["Was trainiert Schwimmen?",["Ausdauer und Technik","Nur Fingerkraft","Nur Rechnen","Nur Lesen"],0],

            ["Was sollte vor Sport passieren?",["Aufwärmen","Sofort Vollgas","Nicht trinken","Nicht vorbereiten"],0],

            ["Was ist bei Schmerzen während Sport sinnvoll?",["Belastung stoppen und abklären","Ignorieren","Weitermachen","Schneller werden"],0],

            ["Was ist Koordination?",["Bewegungen gezielt steuern","Nur Kraft","Nur Ausdauer","Nur Geschwindigkeit"],0],

            ["Was ist Kraft?",["Fähigkeit Widerstand zu überwinden","Nur Geschwindigkeit","Nur Ausdauer","Nur Gleichgewicht"],0],

            ["Was ist Ausdauer?",["Belastung über längere Zeit aufrechterhalten","Nur Sprinten","Nur Springen","Nur Heben"],0],

            ["Was ist ein Sprint?",["Sehr schneller Lauf über kurze Strecke","Langer Spaziergang","Schwimmen","Klettern"],0],

            ["Warum ausreichend trinken?",["Flüssigkeitshaushalt unterstützen","Um schwerer zu werden","Um langsamer zu sein","Nur wegen der Schuhe"],0],

            ["Was ist Regeneration?",["Erholung nach Belastung","Sprint","Aufwärmen","Prüfung"],0],

            ["Was verbessert regelmäßiges Training?",["Leistungsfähigkeit","Nur Körpergröße","Nur Schuhgröße","Nichts"],0],

            ["Warum Technik trainieren?",["Bewegungen sicherer und effizienter machen","Nur schneller schreiben","Nur rechnen","Nur sitzen"],0],

            ["Was ist ein Hindernislauf?",["Laufen mit Hindernissen","Schwimmen","Radfahren","Lesen"],0],

            ["Was sollte beim Höhentraining besonders beachtet werden?",["Sicherheit und fachgerechte Sicherung","Allein klettern","Risiken ignorieren","Keine Sicherung"],0],

            ["Was ist ein Aufwärmen?",["Vorbereitung des Körpers auf Belastung","Abkühlung","Prüfung","Pause"],0],

            ["Was ist Beweglichkeit?",["Gelenke kontrolliert bewegen können","Nur Kraft","Nur Ausdauer","Nur Sprint"],0],

            ["Warum Pausen einplanen?",["Erholung ermöglichen","Leistung verhindern","Zeit verschwenden","Nie trainieren"],0],

            ["Was ist eine saubere Lauftechnik?",["Kontrollierte, effiziente Bewegung","Nur Arme bewegen","Nur Kopf bewegen","Nicht atmen"],0],

            ["Was ist ein realistisches Trainingsziel?",["Schrittweise Leistungssteigerung","Sofort maximale Belastung","Keine Erholung","Jeden Tag maximal"],0],

            ["Was ist beim Schwimmen wichtig?",["Sicherheit und geeignete Umgebung","Allein in unbekanntem Wasser tauchen","Gefahr ignorieren","Keine Aufsicht"],0]

        ]

    },


    muenchen: {

        deutsch: [

            ["Welche Formulierung ist sachlich?",["Das ist total genial!","Der Bericht beschreibt den Einsatz.","Das war mega cool.","Das beste Fahrzeug überhaupt!"],1],

            ["Was ist eine Zusammenfassung?",["Meinung","Wichtigste Inhalte kurz wiedergeben","Werbung","Roman"],1],

            ["Was ist ein Verb?",["laufen","Feuerwehr","rot","schnell"],0],

            ["Was ist ein Nomen?",["laufen","schnell","Fahrzeug","sehr"],2],

            ["Was bedeutet präzise?",["genau","laut","schnell","langsam"],0],

            ["Was bedeutet kontrollieren?",["prüfen","vergessen","zerstören","laufen"],0],

            ["Was bedeutet sorgfältig?",["genau und aufmerksam","schnell","laut","zufällig"],0],

            ["Was ist das Gegenteil von ruhig?",["leise","unruhig","vorsichtig","klein"],1],

            ["Welche Schreibweise ist richtig?",["Feuerwehr","Feuerwer","Feuerwehrh","Feuer wehr"],0],

            ["Welche Schreibweise ist richtig?",["Ausrüstung","Ausrustung","Ausrüsstung","Ausrüstungg"],0],

            ["Was ist eine Tatsache?",["Das Fahrzeug hat vier Räder.","Das ist cool.","Das ist langweilig.","Das ist das beste Fahrzeug."],0],

            ["Was ist eine Meinung?",["Der Test beginnt um 9 Uhr.","Ich finde den Test schwierig.","Der Raum ist 20 m² groß.","Der Einsatz dauerte 30 Minuten."],1],

            ["Was ist ein Synonym für beginnen?",["enden","starten","verlieren","stoppen"],1],

            ["Was bedeutet aufmerksam?",["konzentriert","abwesend","laut","schnell"],0],

            ["Welche Aussage ist neutral?",["Der Bericht nennt drei Einsatzkräfte.","Das war unglaublich!","Das war schlecht.","Das beste Team!"],0],

            ["Was ist eine Frage?",["Wann beginnt der Test?","Der Test beginnt.","Der Test beginnt!","Testbeginn."],0],

            ["Was bedeutet prüfen?",["kontrollieren","zerstören","verstecken","ignorieren"],0],

            ["Was bedeutet korrekt?",["richtig","falsch","laut","schnell"],0],

            ["Was ist ein Adjektiv?",["schnell","laufen","Fahrzeug","und"],0],

            ["Was ist das Gegenteil von falsch?",["richtig","schlecht","klein","langsam"],0]

        ],


        mathematik: [

            ["20 × 3 = ?",["40","50","60","70"],2],

            ["1,5 km = ?",["15 m","150 m","1.500 m","15.000 m"],2],

            ["25 % von 200 = ?",["25","40","50","75"],2],

            ["100 + 250 = ?",["300","350","400","450"],1],

            ["500 - 125 = ?",["325","350","375","400"],2],

            ["12 × 8 = ?",["86","96","106","116"],1],

            ["144 ÷ 12 = ?",["10","11","12","14"],2],

            ["10 % von 500 = ?",["5","25","50","100"],2],

            ["75 % von 400 = ?",["200","250","300","350"],2],

            ["7 × 9 = ?",["56","63","72","81"],1],

            ["200 ÷ 8 = ?",["20","25","30","35"],1],

            ["3/4 von 100 = ?",["25","50","75","80"],2],

            ["2,4 + 3,6 = ?",["5","6","7","8"],1],

            ["10² = ?",["20","50","100","1.000"],2],

            ["60 km/h × 2 h = ?",["30 km","60 km","120 km","180 km"],2],

            ["400 - 125 = ?",["225","250","275","300"],2],

            ["5 × 15 = ?",["50","65","75","85"],2],

            ["900 ÷ 30 = ?",["20","30","40","50"],1],

            ["2,5 Stunden = ?",["120 min","150 min","180 min","200 min"],1],

            ["50 % von 600 = ?",["100","200","300","400"],2]

        ],


        logik: [

            ["2 – 4 – 8 – 16 – ?",["20","24","32","40"],2],

            ["2 – 5 – 10 – 17 – 26 – ?",["31","35","37","40"],2],

            ["5 – 10 – 15 – 20 – ?",["22","25","30","35"],1],

            ["10 – 20 – 40 – 80 – ?",["100","120","160","180"],2],

            ["1 – 4 – 9 – 16 – ?",["20","24","25","30"],2],

            ["100 – 90 – 80 – 70 – ?",["50","55","60","65"],2],

            ["4 – 8 – 12 – 16 – ?",["18","20","22","24"],1],

            ["81 – 27 – 9 – 3 – ?",["0","1","2","6"],1],

            ["7 – 14 – 28 – 56 – ?",["84","98","112","120"],2],

            ["20 – 18 – 16 – 14 – ?",["10","11","12","13"],3],

            ["1 – 2 – 4 – 8 – 16 – ?",["20","24","32","36"],2],

            ["6 – 12 – 18 – 24 – ?",["28","30","32","36"],1],

            ["50 – 45 – 40 – 35 – ?",["25","30","35","40"],1],

            ["3 – 9 – 27 – ?",["54","72","81","90"],2],

            ["Alle A sind B. Max ist A. Was folgt?",["Max ist B","Max ist C","Max ist kein B","Nichts"],0],

            ["Alle Feuerwehrleute tragen Schutzkleidung. Max ist Feuerwehrmann. Was folgt?",["Max trägt Schutzkleidung","Max trägt keine Schutzkleidung","Max ist Fahrer","Nichts"],0],

            ["Welche Zahl ist größer?",["0,5","0,05","0,005","0,0005"],0],

            ["Kreis – Quadrat – Kreis – Quadrat – ?",["Kreis","Dreieck","Stern","Linie"],0],

            ["Montag + 2 Tage = ?",["Dienstag","Mittwoch","Donnerstag","Freitag"],1],

            ["1 – 3 – 6 – 10 – 15 – ?",["18","20","21","25"],2]

        ],


        allgemeinwissen: [

            ["Wie viele Bundesländer hat Deutschland?",["14","15","16","17"],2],

            ["Hauptstadt Deutschlands?",["München","Berlin","Hamburg","Köln"],1],

            ["Landeshauptstadt Bayerns?",["Nürnberg","München","Augsburg","Regensburg"],1],

            ["Tag der Deutschen Einheit?",["1. Mai","3. Oktober","9. November","24. Dezember"],1],

            ["Europäische Notrufnummer?",["110","112","115","118"],1],

            ["Polizei-Notruf Deutschland?",["110","112","115","116"],0],

            ["Wie viele Tage hat ein Schaltjahr?",["364","365","366","367"],2],

            ["Wie viele Minuten hat eine Stunde?",["30","45","60","90"],2],

            ["Wie viele Sekunden hat eine Minute?",["30","45","60","90"],2],

            ["Was ist Bayern?",["Bundesland","Stadt","Staat","Insel"],0],

            ["Was ist München?",["Stadt","Bundesland","Staat","Insel"],0],

            ["Was ist Nürnberg?",["Stadt","Bundesland","Staat","Insel"],0],

            ["Was bedeutet Demokratie?",["Herrschaft des Volkes","Alleinherrschaft","Militärherrschaft","Gericht"],0],

            ["Was ist eine Kommune?",["Gemeinde oder Stadt","Fahrzeug","Werkzeug","Schule"],0],

            ["Was bedeutet Erste Hilfe?",["Hilfe bis professionelle Hilfe übernimmt","Nur Arztbehandlung","Nur Transport","Nur Dokumentation"],0],

            ["Welche Organisation übernimmt Brandbekämpfung?",["Feuerwehr","Post","Finanzamt","Bibliothek"],0],

            ["Was bedeutet 112?",["Notruf","Taxi","Wetter","Auskunft"],0],

            ["Welche Einheit gehört zur Zeit?",["Sekunde","Newton","Meter","Liter"],0],

            ["Was ist ein Bundesland?",["Teil eines föderalen Staates","Fahrzeug","Beruf","Gebäude"],0],

            ["Was ist ein Notruf?",["Meldung eines Notfalls","Werbung","Unterricht","Sport"],0]

        ],


        physik: [

            ["Einheit der Kraft?",["Joule","Newton","Watt","Pascal"],1],

            ["Geschwindigkeit wird berechnet mit?",["v=s/t","v=t/s","v=s×t","v=F/A"],0],

            ["Was ist Reibung?",["Widerstand zwischen Oberflächen","Gewicht","Geschwindigkeit","Temperatur"],0],

            ["Was ist Gewichtskraft?",["Kraft durch Gravitation","Geschwindigkeit","Druck","Wärme"],0],

            ["Was ist Druck?",["Kraft pro Fläche","Masse pro Zeit","Strecke pro Zeit","Energie pro Weg"],0],

            ["Einheit des Drucks?",["Newton","Pascal","Watt","Joule"],1],

            ["Einheit der Energie?",["Joule","Newton","Meter","Pascal"],0],

            ["Was beschreibt Dichte?",["Masse pro Volumen","Kraft pro Fläche","Weg pro Zeit","Zeit pro Strecke"],0],

            ["Was ist ein Hebel?",["Mechanische Vorrichtung","Fahrzeug","Werkzeugschutz","Schlauch"],0],

            ["Was kann Reibung bewirken?",["Bewegung bremsen","Masse verschwinden lassen","Zeit stoppen","Licht erzeugen"],0],

            ["Was ist Beschleunigung?",["Änderung der Geschwindigkeit","Gewicht","Temperatur","Druck"],0],

            ["Was passiert bei größerer Fläche bei gleicher Kraft?",["Druck wird kleiner","Druck wird größer","Kraft verschwindet","Masse steigt"],0],

            ["Was ist Masse?",["Menge an Materie","Geschwindigkeit","Druck","Kraft"],0],

            ["Was ist Temperatur?",["Maß für thermischen Zustand","Kraft","Masse","Geschwindigkeit"],0],

            ["Was ist Energie?",["Fähigkeit Arbeit zu verrichten","Nur Geschwindigkeit","Nur Gewicht","Nur Druck"],0],

            ["Was ist Leistung?",["Arbeit pro Zeit","Masse pro Volumen","Kraft pro Fläche","Weg pro Zeit"],0],

            ["Was ist Geschwindigkeit?",["Strecke pro Zeit","Kraft pro Fläche","Masse pro Volumen","Arbeit pro Zeit"],0],

            ["Was ist ein Stromkreis?",["Geschlossener Weg für elektrischen Strom","Wasserleitung","Luftstrom","Straße"],0],

            ["Was ist Spannung?",["Elektrische Potentialdifferenz","Masse","Kraft","Temperatur"],0],

            ["Welche Einheit hat elektrische Spannung?",["Volt","Newton","Joule","Pascal"],0]

        ],


        praxis: [

            ["Werkzeug vor Benutzung?",["Prüfen","Werfen","Verstecken","Ignorieren"],0],

            ["Schutz für Hände?",["Handschuhe","Helm","Brille","Gehörschutz"],0],

            ["Schutz für Kopf?",["Helm","Handschuhe","Stiefel","Gürtel"],0],

            ["Warum Werkzeug prüfen?",["Gefahren erkennen","Zeit verschwenden","Optik","Gewicht"],0],

            ["Was ist Eigenschutz?",["Sich selbst schützen","Schnell laufen","Laut rufen","Fotos"],0],

            ["Feuerwehr-Notruf?",["110","112","115","118"],1],

            ["Was ist Teamarbeit?",["Gemeinsam koordiniert arbeiten","Allein arbeiten","Nicht sprechen","Nur einer arbeitet"],0],

            ["Was ist eine Zange?",["Greifwerkzeug","Messgerät","Fahrzeug","Schlauch"],0],

            ["Was ist ein Schraubenschlüssel?",["Werkzeug","Helm","Fahrzeug","Schlauch"],0],

            ["Was ist eine PSA?",["Persönliche Schutzausrüstung","Sportausrüstung","Polizeisystem","Software"],0],

            ["Was schützt die Augen?",["Schutzbrille","Handschuhe","Helm","Stiefel"],0],

            ["Was ist ein Maßband?",["Messwerkzeug","Schutzgerät","Fahrzeug","Löschmittel"],0],

            ["Was tun bei unbekannter Gefahr?",["Abstand halten und beurteilen","Hineinlaufen","Ignorieren","Allein handeln"],0],

            ["Was ist eine Leiter?",["Aufstiegsmittel","Schneidwerkzeug","Messgerät","Fahrzeug"],0],

            ["Was ist ein Feuerlöscher?",["Löschgerät","Messgerät","Fahrzeug","Helm"],0],

            ["Was ist Erste Hilfe?",["Sofortige Hilfe bis weitere Hilfe übernimmt","Nur Arzt","Nur Transport","Nichts"],0],

            ["Was ist sorgfältiges Arbeiten?",["Genau und aufmerksam","Sehr schnell","Raten","Nicht prüfen"],0],

            ["Was sollte man zuerst tun?",["Aufgabe verstehen","Sofort loslegen","Raten","Werkzeug werfen"],0],

            ["Was gehört zum sicheren Arbeiten?",["Geeignete Schutzmaßnahmen","Keine PSA","Gefahren ignorieren","Allein handeln"],0],

            ["Was ist ein Sicherheitsabstand?",["Abstand zur Gefahr","Abstand zum Tisch","Laufstrecke","Schlauchlänge"],0]

        ],


        sport: [

            ["Langer Lauf prüft hauptsächlich?",["Ausdauer","Hören","Schreiben","Sehen"],0],

            ["Schwimmen trainiert?",["Ausdauer und Technik","Nur Fingerkraft","Nur Rechnen","Nur Lesen"],0],

            ["Vor Sport?",["Aufwärmen","Sofort Vollgas","Nicht trinken","Nicht vorbereiten"],0],

            ["Bei Schmerzen?",["Belastung stoppen und abklären","Ignorieren","Weitermachen","Schneller werden"],0],

            ["Was ist Koordination?",["Bewegungen steuern","Nur Kraft","Nur Ausdauer","Nur Geschwindigkeit"],0],

            ["Was ist Kraft?",["Widerstand überwinden","Nur Geschwindigkeit","Nur Ausdauer","Nur Gleichgewicht"],0],

            ["Was ist Ausdauer?",["Belastung länger aufrechterhalten","Nur Sprint","Nur Springen","Nur Heben"],0],

            ["Was ist ein Sprint?",["Schneller kurzer Lauf","Spaziergang","Schwimmen","Klettern"],0],

            ["Warum trinken?",["Flüssigkeitshaushalt unterstützen","Schwerer werden","Langsamer werden","Schuhe"],0],

            ["Was ist Regeneration?",["Erholung","Sprint","Aufwärmen","Prüfung"],0],

            ["Regelmäßiges Training verbessert?",["Leistungsfähigkeit","Körpergröße","Schuhgröße","Nichts"],0],

            ["Warum Technik trainieren?",["Sicherer und effizienter bewegen","Schneller schreiben","Rechnen","Sitzen"],0],

            ["Was ist ein Hindernislauf?",["Laufen mit Hindernissen","Schwimmen","Radfahren","Lesen"],0],

            ["Höhentraining?",["Sicherheit und Sicherung beachten","Allein klettern","Risiken ignorieren","Keine Sicherung"],0],

            ["Was ist Aufwärmen?",["Vorbereitung auf Belastung","Abkühlung","Pause","Prüfung"],0],

            ["Was ist Beweglichkeit?",["Kontrollierte Gelenkbewegung","Nur Kraft","Nur Ausdauer","Nur Sprint"],0],

            ["Warum Pausen?",["Erholung ermöglichen","Leistung verhindern","Zeit verschwenden","Nie trainieren"],0],

            ["Saubere Lauftechnik?",["Kontrollierte effiziente Bewegung","Nur Arme","Nur Kopf","Nicht atmen"],0],

            ["Realistisches Trainingsziel?",["Schrittweise steigern","Sofort maximal","Keine Erholung","Jeden Tag maximal"],0],

            ["Beim Schwimmen wichtig?",["Sicherheit","Unbekannt allein tauchen","Gefahr ignorieren","Keine Aufsicht"],0]

        ]

    }

};



/* =====================================================
   STATUS
===================================================== */

let ausgewählteFeuerwehr = null;

let aktuelleFragen = [];

let aktuelleFrage = 0;

let richtigeAntworten = 0;

let antwortGegeben = false;

let prüfung = false;

let aktuellesModul = null;

let timer = null;

let zeit = 0;


/* =====================================================
   SEITENWECHSEL
===================================================== */

function zeigeSeite(id) {

    document
        .querySelectorAll(".screen")
        .forEach(
            screen =>
                screen.classList.remove("active")
        );


    document
        .getElementById(id)
        .classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =====================================================
   FEUERWEHREN
===================================================== */

function zeigeFeuerwehren() {

    const container =
        document.getElementById("cityGrid");


    container.innerHTML = "";


    Object.entries(FEUERWEHREN)
        .forEach(
            ([id, feuerwehr]) => {

                const card =
                    document.createElement("div");


                card.className =
                    "city-card";


                card.innerHTML = `

                    <h3>
                        🚒 ${feuerwehr.name}
                    </h3>

                    <p>
                        ${feuerwehr.description}
                    </p>

                    <div class="tags">

                        ${feuerwehr.module
                            .slice(0,5)
                            .map(
                                modul =>
                                `<span class="tag">
                                    ${modul.name}
                                </span>`
                            )
                            .join("")
                        }

                    </div>

                `;


                card.onclick =
                    function() {

                        ausgewählteFeuerwehr =
                            id;


                        document
                            .querySelectorAll(
                                ".city-card"
                            )
                            .forEach(
                                element =>
                                element
                                .classList
                                .remove(
                                    "selected"
                                )
                            );


                        card.classList.add(
                            "selected"
                        );

                    };


                container.appendChild(card);

            }
        );

}


/* =====================================================
   DASHBOARD
===================================================== */

function öffneDashboard() {

    const feuerwehr =
        FEUERWEHREN[
            ausgewählteFeuerwehr
        ];


    document.getElementById(
        "dashboardTitle"
    ).textContent =
        feuerwehr.name;


    document.getElementById(
        "dashboardDescription"
    ).textContent =
        feuerwehr.description;


    const container =
        document.getElementById(
            "moduleList"
        );


    container.innerHTML = "";


    feuerwehr.module
        .forEach(
            (modul,index) => {

                const element =
                    document.createElement(
                        "div"
                    );


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
                        20 FRAGEN →
                    </small>

                `;


                element.onclick =
                    () =>
                    öffneLernmodul(
                        modul
                    );


                container.appendChild(
                    element
                );

            }
        );


    ladeStatistik();


    zeigeSeite(
        "dashboardScreen"
    );

}


/* =====================================================
   LERNMODUL
===================================================== */

function öffneLernmodul(modul) {

    aktuellesModul =
        modul;


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
            In diesem Modul trainierst du
            den Bereich
            <strong>
                ${modul.name}
            </strong>.
        </p>

        <h3>
            Vorbereitung
        </h3>

        <p>
            Lies den Lernstoff sorgfältig
            und teste danach dein Wissen.
        </p>

        <div class="fact">

            <strong>
                Prüfungsmodus:
            </strong>

            Du musst insgesamt
            <strong>20 Fragen</strong>
            beantworten.

            Erst danach bekommst du
            dein Ergebnis.

        </div>

        <h3>
            Wichtig
        </h3>

        <ul>

            <li>
                Lies jede Frage genau.
            </li>

            <li>
                Überlege vor der Antwort.
            </li>

            <li>
                Nach der Antwort wird die
                Lösung erklärt.
            </li>

            <li>
                Am Ende werden alle 20 Fragen
                ausgewertet.
            </li>

        </ul>

    `;


    zeigeSeite(
        "learningScreen"
    );

}


/* =====================================================
   FRAGEN NORMALISIEREN
===================================================== */

function frageObjekt(
    eintrag,
    thema
) {

    return {

        thema: thema,

        frage: eintrag[0],

        antworten: eintrag[1],

        richtig: eintrag[2],

        erklaerung:
            "Die richtige Antwort ist: " +
            eintrag[1][eintrag[2]]

    };

}


/* =====================================================
   20 FRAGEN FÜR MODUL
===================================================== */

function bekomme20Fragen(
    modulId
) {

    const daten =
        FRAGEN[
            ausgewählteFeuerwehr
        ][modulId];


    if (!daten)
        return [];


    return daten
        .map(
            frage =>
            frageObjekt(
                frage,
                modulId
            )
        )
        .sort(
            () =>
                Math.random() - 0.5
        )
        .slice(0,20);

}


/* =====================================================
   MODULTEST START
===================================================== */

function starteModulTest() {

    aktuelleFragen =
        bekomme20Fragen(
            aktuellesModul.id
        );


    if (
        aktuelleFragen.length < 20
    ) {

        alert(
            "Für dieses Modul sind noch nicht 20 Fragen hinterlegt."
        );

        return;

    }


    prüfung = false;


    starteQuiz(
        `${aktuellesModul.name} · 20-Fragen-Test`,
        1200
    );

}


/* =====================================================
   KOMPLETTE PRÜFUNG
===================================================== */

function startePrüfung() {

    const alleModule =
        FEUERWEHREN[
            ausgewählteFeuerwehr
        ].module;


    let pool = [];


    alleModule.forEach(
        modul => {

            const fragen =
                FRAGEN[
                    ausgewählteFeuerwehr
                ][modul.id];


            if (fragen) {

                fragen.forEach(
                    frage => {

                        pool.push(
                            frageObjekt(
                                frage,
                                modul.name
                            )
                        );

                    }
                );

            }

        }
    );


    aktuelleFragen =
        pool
        .sort(
            () =>
                Math.random() - 0.5
        )
        .slice(
            0,
            Math.min(60,pool.length)
        );


    prüfung = true;


    starteQuiz(
        "Prüfungssimulation",
        3600
    );

}


/* =====================================================
   QUIZ START
===================================================== */

function starteQuiz(
    titel,
    sekunden
) {

    aktuelleFrage = 0;

    richtigeAntworten = 0;

    antwortGegeben = false;

    zeit = sekunden;


    document.getElementById(
        "quizTitle"
    ).textContent =
        `${FEUERWEHREN[
            ausgewählteFeuerwehr
        ].name} · ${titel}`;


    document.getElementById(
        "quizMode"
    ).textContent =
        prüfung
            ? "PRÜFUNG"
            : "ÜBUNG";


    zeigeSeite(
        "quizScreen"
    );


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
        setInterval(
            function() {

                zeit--;


                aktualisiereTimer();


                if (
                    zeit <= 0
                ) {

                    stoppeTimer();


                    beendeQuiz(
                        true
                    );

                }

            },
            1000
        );

}


function stoppeTimer() {

    if (timer) {

        clearInterval(
            timer
        );

        timer = null;

    }

}


function aktualisiereTimer() {

    const minuten =
        String(
            Math.floor(
                zeit / 60
            )
        ).padStart(
            2,
            "0"
        );


    const sekunden =
        String(
            zeit % 60
        ).padStart(
            2,
            "0"
        );


    const element =
        document.getElementById(
            "timer"
        );


    element.textContent =
        `${minuten}:${sekunden}`;


    element.classList.toggle(
        "warning",
        zeit < 60
    );

}


/* =====================================================
   FRAGE ANZEIGEN
===================================================== */

function zeigeFrage() {

    const frage =
        aktuelleFragen[
            aktuelleFrage
        ];


    const gesamt =
        aktuelleFragen.length;


    document.getElementById(
        "questionNumber"
    ).textContent =
        `Frage ${
            aktuelleFrage + 1
        } von ${gesamt}`;


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
        `${
            (
                aktuelleFrage /
                gesamt
            ) * 100
        }%`;


    const answers =
        document.getElementById(
            "answers"
        );


    answers.innerHTML = "";


    frage.antworten
        .forEach(
            (
                antwort,
                index
            ) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.className =
                    "answer";


                button.textContent =
                    `${String.fromCharCode(
                        65 + index
                    )} · ${antwort}`;


                button.onclick =
                    () =>
                    beantworteFrage(
                        index
                    );


                answers.appendChild(
                    button
                );

            }
        );


    const feedback =
        document.getElementById(
            "feedback"
        );


    feedback.className =
        "feedback hidden";


    feedback.innerHTML = "";


    document.getElementById(
        "nextQuestion"
    ).textContent =
        aktuelleFrage ===
        gesamt - 1

            ? "Auswertung →"

            : "Nächste Frage →";


    antwortGegeben =
        false;

}


/* =====================================================
   ANTWORT
===================================================== */

function beantworteFrage(
    index
) {

    if (
        antwortGegeben
    )
        return;


    antwortGegeben =
        true;


    const frage =
        aktuelleFragen[
            aktuelleFrage
        ];


    const buttons =
        document.querySelectorAll(
            ".answer"
        );


    buttons.forEach(
        (
            button,
            buttonIndex
        ) => {

            button.disabled =
                true;


            if (
                buttonIndex ===
                frage.richtig
            ) {

                button.classList.add(
                    "correct"
                );

            }


            if (
                buttonIndex === index &&
                index !==
                frage.richtig
            ) {

                button.classList.add(
                    "wrong"
                );

            }

        }
    );


    const richtig =
        index ===
        frage.richtig;


    if (richtig) {

        richtigeAntworten++;

    }


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
                    : "Falsch!"
            }
        </strong>

        <br>

        ${
            frage.erklaerung
        }

    `;

}


/* =====================================================
   NÄCHSTE FRAGE
===================================================== */

function nächsteFrage() {

    if (
        !antwortGegeben
    ) {

        alert(
            "Bitte zuerst eine Antwort auswählen."
        );

        return;

    }


    if (
        aktuelleFrage >=
        aktuelleFragen.length - 1
    ) {

        beendeQuiz(
            false
        );

        return;

    }


    aktuelleFrage++;


    zeigeFrage();

}


/* =====================================================
   QUIZ BEENDET
===================================================== */

function beendeQuiz(
    zeitAbgelaufen
) {

    stoppeTimer();


    const gesamt =
        aktuelleFragen.length;


    const prozent =
        Math.round(
            (
                richtigeAntworten /
                gesamt
            ) * 100
        );


    /*
       ÜBUNG:
       60 % notwendig

       PRÜFUNG:
       70 % notwendig

       Das ist die Simulationseinstellung
       dieser Webseite und keine Aussage
       über eine offizielle Bestehensgrenze.
    */

    const grenze =
        prüfung
            ? 70
            : 60;


    const bestanden =
        prozent >= grenze;


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
            ? "Die Zeit ist abgelaufen."
            : "Alle Fragen wurden ausgewertet.";


    document.getElementById(
        "resultPercent"
    ).textContent =
        `${prozent}%`;


    document.getElementById(
        "resultPoints"
    ).textContent =
        `${richtigeAntworten} von ${gesamt} richtig`;


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
                ${
                    gesamt -
                    richtigeAntworten
                }
            </strong>

            <span>
                Falsch
            </span>

        </div>


        <div class="result-detail">

            <strong>
                ${grenze}%
            </strong>

            <span>
                Simulationsgrenze
            </span>

        </div>

    `;


    if (
        prüfung
    ) {

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
   PRÜFUNGEN SPEICHERN
===================================================== */

function speicherePrüfung(
    prozent,
    bestanden
) {

    const key =
        `tests_${ausgewählteFeuerwehr}`;


    const tests =
        JSON.parse(
            localStorage.getItem(
                key
            ) || "[]"
        );


    tests.push({

        datum:
            new Date()
            .toLocaleString(
                "de-DE"
            ),

        prozent:

            prozent,

        bestanden:

            bestanden

    });


    localStorage.setItem(
        key,
        JSON.stringify(
            tests
        )
    );

}


/* =====================================================
   STATISTIK
===================================================== */

function ladeStatistik() {

    const key =
        `tests_${ausgewählteFeuerwehr}`;


    const tests =
        JSON.parse(
            localStorage.getItem(
                key
            ) || "[]"
        );


    document.getElementById(
        "statTests"
    ).textContent =
        tests.length;


    if (
        tests.length === 0
    ) {

        document.getElementById(
            "statBest"
        ).textContent =
            "–";


        document.getElementById(
            "statLast"
        ).textContent =
            "–";


        document.getElementById(
            "statProgress"
        ).textContent =
            "0%";


        return;

    }


    const beste =
        Math.max(
            ...tests.map(
                test =>
                    test.prozent
            )
        );


    const letzte =
        tests[
            tests.length - 1
        ];


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


    document.getElementById(
        "statProgress"
    ).textContent =
        `${Math.min(
            100,
            tests.length * 10
        )}%`;

}


/* =====================================================
   BUTTONS
===================================================== */

document
    .getElementById(
        "startButton"
    )
    .onclick =
    function() {

        if (
            !ausgewählteFeuerwehr
        ) {

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
    .getElementById(
        "changeCityButton"
    )
    .onclick =
    function() {

        zeigeSeite(
            "startScreen"
        );

    };


document
    .getElementById(
        "examButton"
    )
    .onclick =
    startePrüfung;


document
    .getElementById(
        "lessonTestButton"
    )
    .onclick =
    starteModulTest;


document
    .getElementById(
        "nextQuestion"
    )
    .onclick =
    nächsteFrage;


document
    .getElementById(
        "cancelQuiz"
    )
    .onclick =
    function() {

        if (
            confirm(
                "Möchtest du den Test wirklich abbrechen?"
            )
        ) {

            stoppeTimer();

            öffneDashboard();

        }

    };


document
    .getElementById(
        "retryButton"
    )
    .onclick =
    function() {

        if (
            prüfung
        ) {

            startePrüfung();

        } else {

            starteModulTest();

        }

    };


document
    .getElementById(
        "resultDashboard"
    )
    .onclick =
    function() {

        öffneDashboard();

    };


document
    .getElementById(
        "backButton"
    )
    .onclick =
    function() {

        öffneDashboard();

    };


document
    .getElementById(
        "resetButton"
    )
    .onclick =
    function() {

        if (
            confirm(
                "Wirklich alle gespeicherten Ergebnisse löschen?"
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
