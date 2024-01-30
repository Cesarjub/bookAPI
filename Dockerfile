FROM node:18-bookworm

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3005

CMD [ "npm", "start" ]