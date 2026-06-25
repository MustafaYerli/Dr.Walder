# Deployment auf Render – Anleitung

Diese Website ist **rein statisch** (HTML/CSS/JS) und wird als **Render Static Site** deployt
(kostenlos, mit globalem CDN). Der Blueprint dafür ist `render.yaml` im Projekt-Root.

## Schritt für Schritt

1. **Code auf GitHub speichern**
   - Über die Funktion **„Save to Github"** im Chat das Projekt in ein GitHub-Repo pushen.

2. **Bei Render einloggen**
   - https://dashboard.render.com → mit GitHub-Account anmelden.

3. **Blueprint deployen**
   - Oben rechts **„New +"** → **„Blueprint"** wählen.
   - Das GitHub-Repo der Website auswählen.
   - Render erkennt automatisch die Datei `render.yaml` und legt den Service
     **`dr-walder-website`** an.
   - Auf **„Apply"** / **„Create"** klicken.

4. **Fertig**
   - Render veröffentlicht den Ordner `static-website/`.
   - Nach ~1 Minute ist die Seite live unter einer URL wie
     `https://dr-walder-website.onrender.com`.

## Eigene Domain (optional)
- Im Render-Dashboard beim Service → **Settings → Custom Domains** die eigene Domain
  (z. B. `dr-walder.at`) hinzufügen und die angezeigten DNS-Einträge beim Domain-Anbieter setzen.

## Wichtig
- Bei jedem Push auf den Haupt-Branch deployt Render automatisch neu.
- `staticPublishPath: ./static-website` zeigt auf den Ordner mit `index.html` und allen Unterseiten.
- Der Express-Server (`frontend/serve.js`) wird für Render **nicht** benötigt – er dient nur der
  lokalen Vorschau.
