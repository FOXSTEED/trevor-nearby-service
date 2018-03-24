FROM node:carbon
RUN mkdir /nearby_service
ADD . /nearby_service
WORKDIR /nearby_service
RUN npm i -q
ENV PORT=8000 
EXPOSE 8000
CMD ["npm", "run-script", "dockerStart"]