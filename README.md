# TARA Fusion - Landing Page

![TARA Fusion](https://img.shields.io/badge/TARA-Fusion-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.1-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)

Willkommen zur offiziellen Landing Page von **TARA Fusion** – einem innovativen, webbasierten Tool für die Durchführung von Bedrohungsanalysen und Risikobewertungen (Threat Analysis and Risk Assessment) für sicherheitskritische Systeme.

## 🎯 Über TARA Fusion

TARA Fusion ist eine umfassende Plattform, die den Sicherheitsbewertungsprozess für komplexe Systeme revolutioniert. Durch die Kombination von intuitiver Benutzeroberfläche, leistungsstarken Analysewerkzeugen und kollaborativen Funktionen ermöglicht TARA Fusion Sicherheitsexperten, Bedrohungen systematisch zu identifizieren, zu bewerten und zu mitigieren.

### 🚀 Hauptfunktionen

#### ✅ Visueller Attack Tree Editor
Erstellen und visualisieren Sie Angriffspfade mit einer intuitiven grafischen Oberfläche. Der Attack Tree Editor ermöglicht es Ihnen:
- Komplexe Angriffsszenarien visuell darzustellen
- Angriffsvektoren hierarchisch zu strukturieren
- Abhängigkeiten zwischen Angriffsschritten zu modellieren
- Interaktive Analysen durchzuführen

#### 🤖 Threat Generation (GEPLANT)
Nutzen Sie die Kraft der künstlichen Intelligenz zur Entdeckung potenzieller Bedrohungen:
- **Lokale KI-Integration** – Alle KI-Funktionen laufen ausschließlich lokal für maximale Datensicherheit
- Automatische Identifikation von Bedrohungsszenarien
- Intelligente Vorschläge für Angriffsvektoren
- Kontextbasierte Risikoanalyse

#### 📊 Umfassendes Risikomanagement
Verwalten Sie alle Aspekte Ihrer Sicherheitsbewertung an einem Ort:
- **Bedrohungsverfolgung** – Dokumentieren und priorisieren Sie identifizierte Bedrohungen
- **Asset-Management** – Erfassen Sie alle schützenswerten Ressourcen
- **Schadensszenarien** – Bewerten Sie potenzielle Auswirkungen
- **Mitigationsstrategien** – Planen und verfolgen Sie Gegenmaßnahmen

#### 👥 Multi-User Collaboration
Arbeiten Sie effizient im Team:
- Rollenbasierte Zugriffskontrolle (RBAC)
- Team- und Organisationsverwaltung
- Gemeinsame Bearbeitung von TARA-Projekten
- Versionskontrolle und Änderungsverfolgung

#### 📄 Dokumentations-Export
Nahtlose Integration in Ihre technische Dokumentation:
- Export im **sphinx-needs** kompatiblen Format
- Automatische Generierung von Sicherheitsdokumentationen
- Integration in bestehende Dokumentationssysteme
- Nachvollziehbare Audit-Trails

#### 📚 Threat Catalog Management
Bauen Sie wiederverwendbare Wissensdatenbanken auf:
- Erstellen und pflegen Sie Bedrohungskataloge
- Teilen Sie Best Practices innerhalb Ihrer Organisation
- Nutzen Sie vordefinierte Threat-Templates
- Kontinuierliche Erweiterung der Wissensbasis

## 🌐 Über diese Landing Page

Diese Landing Page wurde mit modernsten Web-Technologien entwickelt, um TARA Fusion optimal zu präsentieren:

### Technologie-Stack

- **Framework:** Next.js 15.1 mit Static Site Generation (SSG)
- **UI Library:** React 19.2
- **Sprache:** TypeScript 5.8
- **Styling:** Tailwind CSS 3.4
- **Deployment:** GitHub Pages

### Features der Landing Page

- 🎨 **Modernes, responsives Design** – Optimiert für alle Geräte
- ⚡ **Optimale Performance** – Durch SSG und moderne Build-Optimierungen
- 🔍 **SEO-optimiert** – Für maximale Sichtbarkeit
- ♿ **Barrierefrei** – Nach WCAG-Richtlinien
- 🌙 **Dark/Light Mode** – Benutzerfreundliche Theme-Unterstützung

## 🛠️ Lokale Entwicklung

### Voraussetzungen

- **Node.js** (Version 18.x oder höher)
- **npm** oder **yarn**

### Installation

1. **Repository klonen:**
   ```bash
   git clone <repository-url>
   cd Tara-fusion-landing-page
   ```

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

3. **Umgebungsvariablen konfigurieren:**
   
   Erstellen Sie eine `.env.local` Datei basierend auf `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   
   Fügen Sie Ihren Gemini API Key hinzu (falls erforderlich):
   ```
   GEMINI_API_KEY=your_api_key_here
   ```

4. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```
   
   Die Anwendung ist nun unter `http://localhost:3000` erreichbar.

### Build & Deployment

#### Lokaler Build

```bash
npm run build
```

Dieser Befehl erstellt eine optimierte Production-Version der Anwendung im `out/` Verzeichnis.

#### Production Server (lokal testen)

```bash
npm run start
```

#### GitHub Pages Deployment

Die Landing Page ist für automatisches Deployment auf GitHub Pages konfiguriert. Bei jedem Push in den `main` Branch wird die Seite automatisch neu gebaut und deployed.

## 📁 Projektstruktur

```
Tara-fusion-landing-page/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout
│   ├── page.tsx           # Homepage
│   └── privacy/           # Privacy Policy Seite
├── components/            # Wiederverwendbare React-Komponenten
│   ├── Footer.tsx
│   ├── ThemeCompare.tsx
│   └── ...
├── sections/              # Haupt-Sektionen der Landing Page
│   ├── Showcase.tsx
│   └── ...
├── public/                # Statische Assets
├── .env.example           # Beispiel für Umgebungsvariablen
├── next.config.ts         # Next.js Konfiguration
├── tailwind.config.ts     # Tailwind CSS Konfiguration
└── tsconfig.json          # TypeScript Konfiguration
```

## 🤝 Beitragen

Wir freuen uns über Beiträge zur Verbesserung der Landing Page! Bitte beachten Sie:

1. Forken Sie das Repository
2. Erstellen Sie einen Feature-Branch (`git checkout -b feature/AmazingFeature`)
3. Committen Sie Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Pushen Sie zum Branch (`git push origin feature/AmazingFeature`)
5. Öffnen Sie einen Pull Request

## 📝 Lizenz

Dieses Projekt ist proprietär. Alle Rechte vorbehalten.

## 📧 Kontakt

Für Fragen oder Feedback zu TARA Fusion, besuchen Sie bitte unsere Website oder kontaktieren Sie uns direkt.

---

**TARA Fusion** – Sicherheit durch systematische Analyse.