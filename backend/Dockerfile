# 1️⃣ Base Image
FROM node:22

# 2️⃣ Arbeitsverzeichnis setzen
WORKDIR /app

# 3️⃣ package.json + package-lock.json zuerst kopieren
COPY package*.json ./

# 4️⃣ Dependencies installieren
RUN npm ci

# 5️⃣ Restlichen Code kopieren
COPY . .

# 6️⃣ Projekt bauen
RUN npm run build

# 7️⃣ Port freigeben
EXPOSE 3000

# 8️⃣ Startbefehl
CMD ["node", "dist/main.js"]