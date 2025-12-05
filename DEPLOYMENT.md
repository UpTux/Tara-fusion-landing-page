# GitHub Pages Deployment Setup

Diese Anleitung beschreibt, wie du GitHub Pages für dieses Projekt einrichtest.

## Voraussetzungen

1. Das Repository muss auf GitHub gehostet sein
2. Der `NEXT_PUBLIC_MAILERLITE_API_TOKEN` muss als Repository Secret angelegt sein

## Einrichtung

### 1. Repository Secret einrichten

Du hast bereits den `NEXT_PUBLIC_MAILERLITE_API_TOKEN` als Secret angelegt. ✅

### 2. GitHub Pages aktivieren

1. Gehe zu deinem Repository auf GitHub
2. Klicke auf **Settings** (Einstellungen)
3. Navigiere zu **Pages** im linken Menü
4. Unter **Source** (Quelle):
   - Wähle **GitHub Actions** aus dem Dropdown-Menü
   
Das war's! Die Konfiguration ist abgeschlossen.

### 3. Deployment auslösen

Die Pipeline wird automatisch ausgelöst bei:
- Jedem Push auf den `main` Branch
- Manuell über den "Actions" Tab → "Deploy Next.js to GitHub Pages" → "Run workflow"

## Nach dem ersten Deployment

Nach dem ersten erfolgreichen Deployment ist deine Website verfügbar unter:

```
https://tara-fusion.com/
```

Die Custom Domain ist bereits konfiguriert durch die `CNAME` Datei im `public/` Verzeichnis.

## Lokales Testen

Um die Produktions-Build lokal zu testen:

```bash
npm run build
npx serve out
```

## Wichtige Dateien

- `.github/workflows/deploy.yml` - GitHub Actions Pipeline
- `next.config.ts` - Next.js Konfiguration mit basePath für GitHub Pages
- `public/.nojekyll` - Verhindert Jekyll-Verarbeitung auf GitHub Pages

## Troubleshooting

### Custom Domain funktioniert nicht

Stelle sicher, dass:
1. Die `CNAME` Datei im `public/` Verzeichnis existiert und `tara-fusion.com` enthält
2. Die DNS-Einstellungen deiner Domain korrekt auf GitHub Pages zeigen
3. In den GitHub Repository Settings unter "Pages" die Custom Domain konfiguriert ist

### Workflow schlägt fehl

1. Überprüfe, ob der `NEXT_PUBLIC_MAILERLITE_API_TOKEN` Secret korrekt gesetzt ist
2. Stelle sicher, dass GitHub Pages in den Repository-Einstellungen aktiviert ist
3. Überprüfe die Logs im "Actions" Tab

### 404 Fehler nach Deployment

- Warte 1-2 Minuten nach dem Deployment
- Leere den Browser-Cache
- Überprüfe, ob die Custom Domain korrekt konfiguriert ist
