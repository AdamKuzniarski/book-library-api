# 📋 Quick Start Guide

## ✅ Was wurde konfiguriert:

1. ✅ `@nestjs/serve-static` installiert
2. ✅ `ServeStaticModule` in `app.module.ts` konfiguriert
3. ✅ `public/` Ordner erstellt
4. ✅ Build-Scripts in `package.json` hinzugefügt
5. ✅ Multi-Stage Dockerfile erstellt
6. ✅ `.dockerignore` Datei erstellt
7. ✅ API-Prefix `/api` bereits konfiguriert

## 🚀 Nächste Schritte:

### 1. React App erstellen (falls noch nicht vorhanden)

```bash
# React App im frontend/ Ordner erstellen
npx create-react-app frontend
```

### 2. Lokale Entwicklung

```bash
# Backend starten (mit Static Serving)
npm run start:dev

# Oder: Frontend separat entwickeln
cd frontend && npm start
```

### 3. Production Build

```bash
# Alles auf einmal bauen
npm run build:full
```

### 4. Docker Image bauen und testen

```bash
# Docker Image bauen
docker build -t book-library-app .

# Lokal testen
docker run -p 3000:3000 book-library-app
```

### 5. Deployment auf Render.com

```bash
# 1. Code zu GitHub pushen
git add .
git commit -m "Add React frontend deployment"
git push

# 2. Auf Render.com:
# - New Web Service
# - Connect Repository
# - Render erkennt Dockerfile automatisch
# - Deploy!
```

## 📝 Wichtige URLs:

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:3000/api`
- Swagger Docs: `http://localhost:3000/api/docs`
- Books API: `http://localhost:3000/api/books`

## 🔧 Verfügbare Scripts:

```bash
npm run build:frontend      # Nur React bauen
npm run copy:frontend       # React nach public/ kopieren
npm run build:full          # React + NestJS bauen
npm run start:dev           # Development Server
npm run start:prod          # Production Server
npm test                    # Tests ausführen
```

## 📁 Dateistruktur:

```
book-library-api/
├── src/                    # NestJS Backend
│   ├── app.module.ts      # ✅ ServeStaticModule konfiguriert
│   └── main.ts            # ✅ Global Prefix '/api'
├── frontend/              # React App (erstellen mit create-react-app)
│   ├── src/
│   ├── public/
│   └── build/            # Build Output
├── public/               # ✅ Static files (vom Backend serviert)
│   └── index.html        # ✅ Temporäre Landing Page
├── Dockerfile            # ✅ Multi-Stage Build
├── .dockerignore         # ✅ Optimierte Build
└── package.json          # ✅ Build Scripts

```

## ⚠️ Wichtige Hinweise:

1. **API Routes**: Alle Backend-Routes haben den Prefix `/api`
2. **Static Files**: Werden vom `public/` Ordner serviert
3. **React Router**: Wenn du React Router verwendest, musst du in NestJS ein Fallback konfigurieren
4. **Environment Variables**: Nicht vergessen in Production zu setzen!

## 🐛 Troubleshooting:

### Frontend wird nicht angezeigt?

```bash
# Prüfe ob public/ Dateien enthält
ls -la public/

# Baue Frontend neu
npm run build:full
```

### Docker Build schlägt fehl?

```bash
# Prüfe ob frontend/ existiert
ls -la frontend/

# Erstelle React App
npx create-react-app frontend
```

### API funktioniert nicht?

- Alle API-Calls müssen mit `/api` beginnen
- Beispiel: `fetch('/api/books')` ✅
- Nicht: `fetch('/books')` ❌

## 🎯 Next Steps für Production:

1. [ ] React App erstellen und testen
2. [ ] Environment Variables konfigurieren
3. [ ] Docker Image bauen
4. [ ] Auf Render deployen
5. [ ] Datenbank Connection testen
6. [ ] CORS konfigurieren (falls nötig)
7. [ ] HTTPS aktivieren

Viel Erfolg! 🚀
