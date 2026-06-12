# Dr. Ewald Walder – Statische Website (PRD)

## Problemstellung
Statische Single-Page-Website (HTML/CSS/Vanilla JS) für OA Dr. Ewald Walder, Facharzt für
Orthopädie und Unfallchirurgie in Wien. Migriert von React zu reinem HTML/CSS/JS.

## Architektur
- `/app/static-website/` = QUELLE DER WAHRHEIT (index.html, styles.css, script.js, AKV.jpg, logo.png, Anfahrt_Dr.Walder.png)
- `/app/frontend/public/` = vom Express-Server (serve.js, Port 3000) ausgelieferte Kopie
- WICHTIG: Nach jeder Änderung in static-website: `cp -r /app/static-website/* /app/frontend/public/`
- Kein Backend (FATAL ist hier normal – kein /app/backend Verzeichnis).
- Preview-URL: https://dental-dynamic-1.preview.emergentagent.com
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
- 2026-06-12: PREMIUM-REDESIGN (Schritt für Schritt, Referenz: ihre-zahnarztpraxis.at, Stil
  "premium, modern, dynamisch"). Alle Sections überarbeitet:
  - Globales Muster: Eyebrow mit Akzentlinie + Mixed-Weight-Titel (Outfit 300/700),
    Pill-Buttons mit Icon-Badge (.btn-pill: dark/ghost/primary).
  - Hero: tiefer Grün-Verlauf, Eyebrow-Linie, Mixed-Headline, 2 Pill-CTAs, Glas-Trust-Leiste,
    schwebende "Wahlarzt"-Info-Karte (rechts, ab <1100px ausgeblendet).
  - Über mich: Bildrahmen mit grünem Akzentblock (::before), schwebendes Arzt-Badge,
    Check-Punkte, grüner Pill-CTA.
  - Leistungen/Honorare/Kontakt/FAQ: Eyebrow + Mixed-Titel; Termin: grünes Banner mit
    weißer Eyebrow (.eyebrow-light) + dark Pill-CTA.
  - Barrierefrei-Modus für alle neuen Komponenten mit Overrides ergänzt; verifiziert.
- User lädt eigene Fotos hoch (Hero gesetzt; About hat gestrichelte .placeholder-box → durch <img> ersetzen).
- Barrierefrei-Modus: Feinschliff "reden wir später" (User).
- Buchung: openBooking() öffnet Setmore-Link in neuem Tab (unverändert); Maps via openMaps().
- 2026-06-12: Footer premium aufgewertet – grüner Top-Akzent, CTA-Band (Eyebrow + Mixed-Titel
  + grüner Pill-CTA + Telefon), 4-Spalten-Raster (Marke/Schnellzugriff/Kontakt mit Icons/Rechtliches),
  Bottom-Bar mit Copyright + "Nach oben"-Link. A11y-Overrides ergänzt.

## Backlog
- P1: Automatische Synchronisation static-website → frontend/public (Watcher / chokidar / bash watch),
  um manuelles `cp` zu vermeiden.
