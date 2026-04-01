FROM node:20
WORKDIR /
COPY package*.json .
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "npm", "run", "start" ]
