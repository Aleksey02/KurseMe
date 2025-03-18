# Используем Node.js LTS
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходники
COPY . .

# Собираем проект
RUN npm run build

# Открываем порт
EXPOSE 5000

# Запускаем сервер
CMD ["npm", "run", "start"]
