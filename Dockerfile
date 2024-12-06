# Backend Dockerfile
FROM node:22-bookworm-slim
WORKDIR /app
COPY package*.json ./
RUN npm install --quiet
COPY . .
EXPOSE 5000
CMD ["node", "server.js"]