FROM node:carbon
RUN mkdir /nearby_service
ADD . /nearby_service
WORKDIR /nearby_service
RUN npm i -q
ENV PORT=3003 
EXPOSE 3003
CMD ["npm", "run-script", "dockerStart"]