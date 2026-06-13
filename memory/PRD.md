# Dr. Ewald Walder – Statische Website (PRD)

## Problemstellung
Statische Single-Page-Website (HTML/CSS/Vanilla JS) für OA Dr. Ewald Walder, Facharzt für
Orthopädie und Unfallchirurgie in Wien. Premium, modern, dynamisch (Referenz: ihre-zahnarztpraxis.at).
Sprache des Users: DEUTSCH.

## Architektur
- `/app/static-website/` = EINZIGE QUELLE DER WAHRHEIT (index.html, styles.css, script.js, AKV.jpg, logo.png, Anfahrt_Dr.Walder.png)
- `/app/frontend/serve.js` = Express-Server (Port 3000), liefert AB 2026-06 **DIREKT** aus `/app/static-website/` aus.
  -> Kein manuelles `cp` nach `/app/frontend/public/` mehr nötig! Sync-Problem GELÖST.
- Kein Backend / keine DB (Site ist vollständig statisch).
- Test lokal via Screenshot-Tool auf http://localhost:3000

## Umgesetzt
- 2026-06: KOMPLETTES PREMIUM-REDESIGN aller Sections (Hero, Über mich, Leistungen, Honorare,
  Kontakt, FAQ, Footer). Design-System via CSS-Variablen (Marke #80cc28, Navy #1E3A5F, Outfit+Work Sans),
  Sticky Glass-Navbar, Pill-Buttons, Eyebrow + Mixed-Weight-Titel, Scroll-Reveal, Barrierefreier Modus.
- 2026-06: Footer premium (CTA-Band, 4-Spalten, Icon-Kontakt).
- 2026-06: **Google-Reviews-Badge im Hero** – runder Google-Logo-Kreis + „4,1 ★" + „51 Google Rezensionen"
  (.hero-google-badge, Sternefüllung via CSS-Var --rating: 82%). A11y-Override ergänzt. Statisch/manuell gepflegt.
- 2026-06: **serve.js auf direkte Auslieferung aus static-website umgestellt** (Sync-Problem behoben).
- 2026-06: **Unterseite gelenkschmerzen.html** (Leistung „Gelenkschmerzen") – informativ/aufklärend:
  Sub-Hero mit Breadcrumb, Überblick (prose-grid + Navy aside-card), betroffene Gelenke (4 Karten),
  Ursachen + Amber-Warnhinweis (.alert-note), Diagnostik (3 process-steps), Behandlungen (6 Karten),
  FAQ-Accordion, dark CTA-Band, med. Disclaimer. Erste Leistungskarte (index.html) verlinkt darauf (.service-card-link + „Mehr erfahren").
  Neue Styles: .subpage-hero/.breadcrumb/.prose/.aside-card/.alert-note/.med-disclaimer + A11y-Overrides.
- 2026-06: **Online-Terminbuchung entfernt → auf Telefon umgestellt.** `openBooking()` (script.js) wählt jetzt
  `tel:012141431` (Setmore-URL entfernt). Alle „Termin vereinbaren"-Buttons bleiben, wählen aber die Nummer.
  Texte angepasst (Termin-Section „Telefonische Terminvereinbarung", Hero/Header/mobiler Button, FAQ, Unterseite).
- 2026-06: **Hero-Bild für gelenkschmerzen.html** (`gelenkschmerzen-hero.jpg`, Unsplash – Physiotherapeut/Knie-Untersuchung)
  als Hintergrund mit grünem Verlauf (.subpage-hero::before) + container z-index; .subpage-title color:#fff (globale h1-Farbe überschrieb sonst). A11y: background-image none + ::before display:none.
  ACHTUNG (gelernt): NIE zwei search_replace auf DERSELBEN Datei im selben Parallel-Batch – ein Edit ging
  durch Race-Condition verloren (CSS-Block fehlte, musste sequenziell nachgetragen werden).
  ACHTUNG (gelernt): NIE zwei search_replace auf DERSELBEN Datei im selben Parallel-Batch – ein Edit ging
  durch Race-Condition verloren (CSS-Block fehlte, musste sequenziell nachgetragen werden).
- 2026-06: **Behandlungsablauf-Section** (id=ablauf, 4 nummerierte Schritt-Karten + CTA, weißer Hintergrund).
- 2026-06: **Wahlarzt-Erklärung "So bekommen Sie Geld zurück"** (id=wahlarzt, section-soft grün, 3 Schritt-Karten + "Gut zu wissen"-Note).
  - Neue Styles: .process-grid/.process-step/.process-number/.process-icon/.refund-note/.section-soft. A11y-Overrides ergänzt.
  - WICHTIG (gelernt): Scroll-Reveal (.reveal) wird NUR für Elemente im Selektor in script.js setupScrollReveal() beobachtet.
    Neue reveal-Komponenten MÜSSEN dort zum targets-Selektor hinzugefügt werden, sonst bleiben sie opacity:0 (unsichtbar).

## Offen / Backlog
- P0: Eigene Fotos des Users einbinden, sobald hochgeladen (z. B. „Über mich"-Platzhalter `.placeholder-box`).
- P2: Vollständige „Das sagen Patienten"-Section (User wollte zunächst nur Hero-Badge; ggf. später erweitern,
  ggf. mit Featurable-Widget für automatische Google-Reviews).
- P1: Barrierefreier Modus Feinschliff ("reden wir später").
- Hinweis: `/app/frontend/public/` wird nicht mehr ausgeliefert (kann perspektivisch gelöscht werden).
