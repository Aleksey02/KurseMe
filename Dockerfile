# --- Сборка фронтенда ---
FROM node:18-alpine AS frontend

WORKDIR /app/frontend

# Копируем файлы package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем весь код фронтенда и собираем его
COPY . .
RUN npm run build

# --- Сборка бэкенда ---
FROM node:18-alpine AS backend

WORKDIR /app/backend

# Копируем файлы package.json и устанавливаем зависимости
COPY backend/package.json backend/package-lock.json ./
RUN npm install

# Копируем остальной код бэкенда
COPY backend ./

# Собираем NestJS
RUN npm run build

# --- Финальный контейнер ---
FROM node:18-alpine

WORKDIR /app

# Копируем бэкенд
COPY --from=backend /app/backend /app/backend

# Копируем фронтенд в папку, чтобы бэкенд мог его раздавать
COPY --from=frontend /app/frontend/dist /app/backend/public

# Устанавливаем переменные среды
ENV PORT=5000

# Открываем порт
EXPOSE 5000

# Запускаем бэкенд
CMD ["node", "backend/dist/main.js"]