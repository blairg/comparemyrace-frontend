FROM node:7.9.0-alpine

ARG STRAVA_CLIENT_SECRET

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn upgrade && yarn install

COPY . /usr/src/app

EXPOSE 3000

CMD [ "yarn", "webserver" ]
