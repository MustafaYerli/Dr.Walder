# Dr. Walder Website - Statische Version

Diese Website wurde von React/JSX zu reinem HTML, CSS und JavaScript konvertiert und kann auf jedem Standard-Webserver gehostet werden.

## 📁 Dateien

- **index.html** - Hauptdatei der Website (alle Inhalte)
- **styles.css** - Alle Styles und responsives Design
- **script.js** - JavaScript für Interaktivität (Accordion, Booking, etc.)
- **README.md** - Diese Datei

## 🚀 Deployment

### Einfaches Hosting
Laden Sie alle 3 Dateien (`index.html`, `styles.css`, `script.js`) in das Root-Verzeichnis Ihres Webservers hoch.

### Wichtig
- Die Dateien müssen im **gleichen Ordner** liegen
- `index.html` muss die Hauptdatei sein
- Keine zusätzlichen Ordner oder Build-Schritte nötig

## ✨ Features

✅ Komplett statisch - keine Server-Logik erforderlich  
✅ Mobile-optimiert mit Sticky Footer (Anrufen & Termin buchen)  
✅ Responsives Design (funktioniert auf allen Geräten)  
✅ Smooth Scrolling Navigation  
✅ FAQ Accordion (Auf-/Zuklappen)  
✅ Setmore Online-Terminbuchung integriert  
✅ Google Fonts (Inter) via CDN  
✅ Lucide Icons via CDN  

## 🎨 Externe Abhängigkeiten

Die Website verwendet **nur CDN-Links** (keine lokalen Dateien nötig):

- **Google Fonts**: Inter Schriftart
- **Lucide Icons**: Icon-Bibliothek

Diese werden automatisch geladen - keine Installation erforderlich!

## 📱 Mobile Features

- Sticky Footer nur auf Mobile sichtbar
- Direkter Anruf-Button: `tel:012141431`
- Online-Termin Button öffnet Setmore Booking

## 🔧 Anpassungen

### Telefonnummer ändern
Suchen Sie in `index.html` nach `012141431` und ersetzen Sie alle Vorkommen.

### Booking-URL ändern
Öffnen Sie `script.js` und ändern Sie die `BOOKING_URL` Variable.

### Farben anpassen
Öffnen Sie `styles.css` und ändern Sie die Farben:
- Primärfarbe (Dunkelblau): `#1E3A5F`
- Akzentfarbe (Teal): `#14B8A6`
- Highlight (Amber): `#D97706`

### Texte ändern
Alle Texte befinden sich direkt in `index.html` und können mit einem Texteditor geändert werden.

## 📋 Technische Details

- **Kein Framework**: Reines HTML, CSS, JavaScript
- **Keine Dependencies**: Alles via CDN geladen
- **Browser-Kompatibilität**: Alle modernen Browser
- **Performance**: Sehr schnell (wenige Dateien, keine Build-Zeit)

## 💡 Hinweise

- Die Platzhalter für Fotos und Karte sind absichtlich vorhanden
- Sie können eigene Bilder einfügen, indem Sie `<img>` Tags in die Platzhalter-Bereiche einfügen
- Für Google Maps: Ersetzen Sie den Platzhalter mit einem `<iframe>` von Google Maps

## 📞 Support

Bei Fragen zu den Dateien können Sie den Code direkt bearbeiten - alle Dateien sind gut kommentiert und strukturiert.
