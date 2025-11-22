# 🚀 Deployment Anleitung - Dr. Walder Website

## ✅ Was Sie erhalten haben

Ihre Website wurde erfolgreich von React/JSX zu **reinem HTML, CSS und JavaScript** konvertiert.

### 📁 Dateien im Ordner `/app/static-website/`:
- `index.html` - Die Hauptseite (komplette Website)
- `styles.css` - Alle Styles und Design
- `script.js` - JavaScript für Interaktivität
- `README.md` - Ausführliche Dokumentation
- `DEPLOYMENT-ANLEITUNG.md` - Diese Anleitung

### 📦 ZIP-Datei:
- `/app/dr-walder-website.zip` - Alle Dateien gepackt für einfachen Download

## 🌐 Wie Sie die Website auf Ihren Hoster hochladen

### Schritt 1: Dateien herunterladen
Laden Sie alle Dateien aus dem Ordner `/app/static-website/` herunter:
- `index.html`
- `styles.css`
- `script.js`

**Alternative:** Laden Sie die ZIP-Datei `/app/dr-walder-website.zip` herunter und entpacken Sie diese auf Ihrem Computer.

### Schritt 2: Zum Hoster hochladen

#### Option A: FTP Upload
1. Verbinden Sie sich mit Ihrem Hoster via FTP (z.B. mit FileZilla)
2. Navigieren Sie zum **Root-Verzeichnis** (oft `public_html/`, `www/` oder `httpdocs/`)
3. Laden Sie alle 3 Dateien hoch
4. Fertig! Ihre Website ist live unter Ihrer Domain

#### Option B: Hoster Control Panel
1. Melden Sie sich im Control Panel Ihres Hosters an (z.B. cPanel, Plesk)
2. Suchen Sie nach "Dateimanager" oder "File Manager"
3. Navigieren Sie zum Root-Verzeichnis
4. Laden Sie die Dateien hoch (Upload-Button)
5. Fertig!

### Schritt 3: Testen
Öffnen Sie Ihre Domain im Browser:
- `https://ihre-domain.at`
- Die Website sollte sofort funktionieren

## ⚙️ Wichtige Einstellungen

### ✅ Was funktioniert sofort:
- Alle Sektionen (Hero, About, Services, FAQ, Kontakt)
- Mobile Sticky Footer mit "Anrufen" und "Online-Termin" Buttons
- FAQ Accordion (Auf-/Zuklappen)
- Responsive Design (funktioniert auf allen Geräten)
- Setmore Online-Terminbuchung
- Google Fonts & Icons (via CDN geladen)

### 📞 Telefonnummer ändern
Die aktuelle Nummer ist: **01 / 214 14 31**

Um sie zu ändern:
1. Öffnen Sie `index.html` in einem Texteditor
2. Suchen Sie: `012141431` (ohne Leerzeichen und Schrägstrich)
3. Ersetzen Sie alle Vorkommen mit Ihrer neuen Nummer
4. Speichern und erneut hochladen

**Tipp:** Die Nummer ohne Leerzeichen für den `tel:` Link verwenden!

### 🔗 Booking-URL ändern
Die aktuelle Setmore-URL ist im Code hinterlegt.

Um sie zu ändern:
1. Öffnen Sie `script.js` in einem Texteditor
2. Finden Sie die Zeile: `const BOOKING_URL = '...'`
3. Ersetzen Sie die URL mit Ihrer eigenen Setmore-URL
4. Speichern und erneut hochladen

### 🎨 Farben anpassen
Öffnen Sie `styles.css` und suchen Sie nach:
- `#1E3A5F` - Dunkelblau (Hauptfarbe)
- `#14B8A6` - Teal/Türkis (Akzent)
- `#D97706` - Orange/Amber (Highlights)

Ersetzen Sie diese Hex-Codes mit Ihren Wunschfarben.

## 🖼️ Fotos hinzufügen

### Doktor-Foto im Hero-Bereich
1. Öffnen Sie `index.html`
2. Suchen Sie: `<div class="placeholder-box">` (im Hero-Bereich)
3. Ersetzen Sie den gesamten `<div>` mit:
```html
<img src="ihr-foto.jpg" alt="Dr. Ewald Walder" style="width: 100%; height: 100%; object-fit: cover; border-radius: 0.5rem;">
```
4. Laden Sie Ihr Foto (`ihr-foto.jpg`) in den gleichen Ordner hoch

### Praxis-Foto
Gleiche Vorgehensweise wie oben - suchen Sie nach "Praxis Foto" Platzhalter.

## 🗺️ Google Maps einbetten

1. Gehen Sie zu Google Maps
2. Suchen Sie Ihre Adresse: "Praterstraße 66/1/69b, 1020 Wien"
3. Klicken Sie auf "Teilen" → "Karte einbetten"
4. Kopieren Sie den `<iframe>` Code
5. Öffnen Sie `index.html`
6. Suchen Sie: `<div class="map-wrapper">`
7. Ersetzen Sie den gesamten Inhalt mit Ihrem `<iframe>` Code

## 🧪 Lokaler Test (optional)

Wenn Sie die Website vor dem Upload testen möchten:
1. Öffnen Sie `index.html` direkt im Browser (Doppelklick)
2. Oder verwenden Sie einen lokalen Webserver (z.B. Live Server in VS Code)

## 🆘 Häufige Probleme

### Problem: Website zeigt nur weißen Bildschirm
**Lösung:** Stellen Sie sicher, dass alle 3 Dateien im **gleichen Ordner** liegen.

### Problem: Icons werden nicht angezeigt
**Lösung:** Prüfen Sie Ihre Internetverbindung - Icons werden von einem CDN geladen.

### Problem: Mobile Buttons werden auf Desktop angezeigt
**Lösung:** Das sollte nicht passieren - die Buttons sind nur für Mobile gedacht. Leeren Sie den Browser-Cache.

### Problem: Telefonnummer funktioniert nicht auf Desktop
**Lösung:** Das ist normal - `tel:` Links funktionieren nur auf Smartphones.

## 📱 Mobile Features

Die Website ist voll responsive und bietet:
- Automatisch anpassendes Layout
- Sticky Footer nur auf Mobile (Anrufen + Online-Termin Buttons)
- Touch-freundliche Buttons und Links
- Optimierte Schriftgrößen für kleine Bildschirme

## 🎯 Nächste Schritte

1. ✅ Dateien auf Ihren Hoster hochladen
2. ✅ Website im Browser testen
3. ⚙️ Telefonnummer anpassen (wenn nötig)
4. 🖼️ Fotos hinzufügen (optional)
5. 🗺️ Google Maps einbetten (optional)
6. 🎨 Farben anpassen (optional)

## 💡 Support

Bei Fragen zu den Dateien:
- Alle Dateien sind gut strukturiert und kommentiert
- Sie können die Dateien mit jedem Texteditor öffnen und bearbeiten
- Keine Programmierkenntnisse erforderlich für grundlegende Änderungen

---

**Viel Erfolg mit Ihrer neuen Website! 🚀**
