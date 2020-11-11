FROM node:12.19.0

RUN mkdir -p /usr/api/app

WORKDIR /usr/api/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]