FROM node:14

WORKDIR /Users/melih.sahin/Apps/docker-apps

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]