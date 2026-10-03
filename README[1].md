# 🚒 Feuerwehr Bewerbungstrainer

Eine statische GitHub-Pages-Webseite zum Üben für Auswahlverfahren von Berufsfeuerwehren.

## Enthalten
- Auswahl zwischen Berufsfeuerwehr Nürnberg und München
- Lernmodule
- realistische, selbst erstellte Übungsfragen
- Trainingsmodus
- Prüfungssimulation mit Zeitlimit
- automatische Auswertung
- Bestehen/Nichtbestehen für die Simulation
- Fortschritt und Ergebnisse im Browser (`localStorage`)
- responsive Design für PC, Tablet und Handy

## Wichtig
Die Fragen sind **keine echten, vertraulichen oder geleakten Originalprüfungen**. Sie sind eigene Trainingsaufgaben, die sich an den öffentlich beschriebenen Auswahlbestandteilen orientieren.

## GitHub Pages starten

1. Neues GitHub-Repository erstellen, z. B. `feuerwehr-bewerbungstrainer`.
2. `index.html`, `style.css`, `app.js` und `README.md` hochladen.
3. Repository öffnen → **Settings** → **Pages**.
4. Bei **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. **Save**.
6. Nach dem Deployment zeigt GitHub deine Webseite-Adresse an.

## Daten erweitern

Die Inhalte stehen in `app.js`:
- `DATA` = Städte, Module und Lernstoff
- `QUESTIONS` = Übungsfragen

Weitere Städte können dort ergänzt werden.

## Quellen für die aktuellen Grundlagen
- Stadt Nürnberg: Einstellungstest der Feuerwehr
- Landeshauptstadt München: Ausbildung 112 klassisch / Auswahlverfahren

Vor einer echten Bewerbung immer die aktuelle offizielle Ausschreibung der jeweiligen Feuerwehr prüfen.
