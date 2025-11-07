# Stage 1: Build React Frontend
FROM node:22 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
RUN npm run build

# Stage 2: Build NestJS Backend
FROM node:22 AS backend-build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 3: Production
FROM node:22
WORKDIR /app

# Copy backend build
COPY --from=backend-build /app/dist ./dist
COPY --from=backend-build /app/node_modules ./node_modules
COPY --from=backend-build /app/package*.json ./

# Copy frontend build to public folder
COPY --from=frontend-build /app/frontend/build ./public

EXPOSE 3000

CMD ["node", "dist/main"]