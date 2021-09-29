FROM node:14

ENV DOCKER_REGISTRY starwars.azurecr.io

WORKDIR /Users/melih.sahin/WebstormProjects/star-wars

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "serve"]
