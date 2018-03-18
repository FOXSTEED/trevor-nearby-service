FROM node:8.9.4
RUN mkdir /nearby_service
ADD . /nearby_service
WORKDIR /nearby_service
RUN npm i -q
EXPOSE 3003
CMD ["npm", "start"]