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
- 2026-06-12: KOMPLETTE DESIGN-ÜBERARBEITUNG (auf Wunsch des Users "a komplette design überarbeiten").
  Design-Konzept vom Design-Agent (`/app/design_guidelines.json`, Archetyp "Organic & Earthy").
  Umgesetzt in `index.html`/`styles.css`/`script.js`:
  - Neues Design-System (CSS-Variablen): Marke #80cc28, Navy #1E3A5F, Bone-White Hintergrund,
    Fonts Outfit (Headings) + Work Sans (Body), Spacing-/Radius-/Shadow-Skala.
  - Sticky Glass-Navbar mit Ankerlinks (Über/Leistungen/Honorare/Kontakt) + Barrierefreie-Seite-
    Toggle + "Termin vereinbaren"-CTA; "scrolled"-Schatten.
  - Hero: AKV.jpg + Links-rechts-Verlauf #80cc28, Eyebrow-Badge, Glass-Benefit-Karten, weiße CTA.
  - Navy Advantages-Strip (4 Vorteile, grüne Icons).
  - Services-Grid mit Hover-Lift + Icon-Farbwechsel; Honorare (Sage-Hintergrund, id=honorare);
    Termin-Banner (grün); Kontakt-Karten + Map; FAQ-Accordion; Navy-Footer.
  - Scroll-Reveal-Animationen via IntersectionObserver (opt-in `body.reveal-ready`, daher ohne JS /
    im Barrierefrei-Modus voll sichtbar).
  - Barrierefreier Modus erhalten & angepasst (Overrides für neue Komponenten). User: "reden wir später".
  - Getestet via Screenshots (Desktop Hero/Services/Kontakt, Mobile, A11y) + Accordion-Funktion.
- 2026-06-12: Hero-Section (vorheriger Schritt) – AKV.jpg + #80cc28-Verlauf, Platzhalter entfernt.
- (Frühere Session) Barrierefreier Modus ("Barrierefreie Seite"-Toggle, Open Sans, Hochkontrast).
- (Frühere Session) Sections neu geordnet (FAQ als letzte), Footer/Termin-Section Farben.

## Offen / Hinweise
- User lädt eigene Fotos hoch (Hero/About). About nutzt aktuell noch eine gestrichelte Bild-
  Platzhalterbox (.placeholder-box) – beim Upload einfach durch <img> ersetzen.
- Barrierefreier Modus: Feinschliff "reden wir später" (User).

## Backlog
- P1: Automatische Synchronisation static-website → frontend/public (Watcher / chokidar / bash watch),
  um manuelles `cp` zu vermeiden.
