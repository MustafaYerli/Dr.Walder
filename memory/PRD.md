# Dr. Ewald Walder – Statische Website (PRD)

## Problemstellung
Statische Single-Page-Website (HTML/CSS/Vanilla JS) für OA Dr. Ewald Walder, Facharzt für
Orthopädie und Unfallchirurgie in Wien. Migriert von React zu reinem HTML/CSS/JS.

## Architektur
- `/app/static-website/` = QUELLE DER WAHRHEIT (index.html, styles.css, script.js, AKV.jpg, logo.png, Anfahrt_Dr.Walder.png)
- `/app/frontend/public/` = vom Express-Server (serve.js, Port 3000) ausgelieferte Kopie
- WICHTIG: Nach jeder Änderung in static-website: `cp -r /app/static-website/* /app/frontend/public/`
- Kein Backend (FATAL ist hier normal – kein /app/backend Verzeichnis).
- Preview-URL: https://1e32b06c-3ca0-4efd-ae71-d2928a4b534c.preview.emergentagent.com
  (Externe Vorschau zeigt evtl. "Preview Unavailable" im Ruhezustand; lokal: http://localhost:3000)

## Umgesetzt
- 2026-06-12: Hero-Section neu gestaltet – `AKV.jpg` als Hintergrundbild, Links-nach-rechts-
  Verlauf mit `#80cc28` (grün links kräftig → rechts transparent, Bild rechts sichtbar),
  Texte/Buttons weiß über dem Bild, alter Foto-Platzhalter entfernt. Accessibility-Modus
  überschreibt Hero zu Weiß/Schwarz mit hohem Kontrast (kein Bild/Verlauf). Getestet via
  Screenshot (Normal + A11y). data-testids hinzugefügt.
- (Frühere Session) Barrierefreier Modus ("Barrierefreie Seite"-Toggle, Open Sans, Hochkontrast).
- (Frühere Session) Sections neu geordnet (FAQ als letzte), Footer/Termin-Section Farben.

## Backlog
- P1: Automatische Synchronisation static-website → frontend/public (Watcher / chokidar / bash watch),
  um manuelles `cp` zu vermeiden.
