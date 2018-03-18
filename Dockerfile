FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

ENV CON_POINT=127.0.0.1
ENV KEYSPACE=nearbytrevor

RUN ["npm", "install"]