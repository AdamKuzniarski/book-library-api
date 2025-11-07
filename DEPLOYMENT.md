# 🚀 Deployment Guide: React Frontend + NestJS Backend

## Übersicht

Diese Anwendung kombiniert:

- **React Frontend** (im `frontend/` Ordner)
- **NestJS Backend** (im `src/` Ordner)

Das Frontend wird als statische Dateien vom NestJS-Server ausgeliefert.

---

## 📦 Lokale Entwicklung

### 1. Backend starten (Development Mode)

```bash
npm run start:dev
```

### 2. Frontend separat starten (Optional)

```bash
cd frontend
npm start
```

---

## 🏗️ Build-Prozess

### Option 1: Manueller Build

```bash
# 1. Frontend bauen
npm run build:frontend

# 2. Frontend nach public/ kopieren
npm run copy:frontend

# 3. Backend bauen
npm run build
```

### Option 2: Alles auf einmal bauen

```bash
npm run build:full
```

---

## 🐳 Docker Deployment

### 1. Docker Image bauen

```bash
docker build -t book-library-app .
```

### 2. Docker Image lokal testen

```bash
docker run -p 3000:3000 book-library-app
```

### 3. Docker Image pushen (zu Docker Hub)

```bash
# Tag setzen
docker tag book-library-app dein-username/book-library-app:latest

# Pushen
docker push dein-username/book-library-app:latest
```

---

## 🌐 Render.com Deployment

### Automatisches Deployment

1. Verbinde dein GitHub-Repository mit Render
2. Render erkennt automatisch das Dockerfile
3. Bei jedem Push wird automatisch deployed

### Manuelle Schritte

1. Gehe zu [render.com](https://render.com)
2. Erstelle einen neuen **Web Service**
3. Wähle dein Repository
4. Render verwendet automatisch das Dockerfile
5. Setze Environment Variables (falls nötig):
   - `JWT_SECRET`
   - `DATABASE_URL`

---

## 📁 Projektstruktur

```
book-library-api/
├── src/                    # NestJS Backend
├── frontend/               # React Frontend
│   └── build/             # Build-Output (nach npm run build)
├── public/                # Statische Dateien (vom Backend serviert)
├── Dockerfile             # Multi-Stage Build
└── package.json           # Backend Dependencies + Build Scripts
```

---

## ✅ Deployment Checklist

- [ ] React App in `frontend/` vorhanden
- [ ] `npm run build:full` funktioniert lokal
- [ ] Docker Image baut erfolgreich
- [ ] Environment Variables sind gesetzt
- [ ] Database Connection funktioniert
- [ ] Frontend ist unter `http://localhost:3000` erreichbar
- [ ] Backend API ist unter `http://localhost:3000/api` erreichbar

---

## 🔧 Troubleshooting

### Frontend wird nicht angezeigt

- Prüfe ob `public/` Ordner existiert und Dateien enthält
- Prüfe ob `ServeStaticModule` in `app.module.ts` konfiguriert ist

### Docker Build schlägt fehl

- Stelle sicher, dass `frontend/package.json` existiert
- Prüfe `.dockerignore` Datei

### API Routes funktionieren nicht

- Stelle sicher, dass API-Routes mit `/api` prefixed sind
- Oder verwende `exclude` in `ServeStaticModule`:
  ```typescript
  ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', 'public'),
    exclude: ['/api*'],
  });
  ```
