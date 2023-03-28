FROM node:16.6.0

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm install mongoose

expose 3000

CMD [ "node", "app.js"]