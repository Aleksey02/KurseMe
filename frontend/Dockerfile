# Билд фронтенда
FROM node:20 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Сервер для фронта
FROM nginx:stable
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist /usr/share/nginx/html
RUN apt-get update && apt-get install -y geoip-database \
    && apt-get clean && rm -rf /var/lib/apt/lists/*
CMD ["nginx", "-g", "daemon off;"]
