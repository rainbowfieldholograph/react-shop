FROM node:16.13.1

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

CMD ['npm', 'run', 'start:migrate']