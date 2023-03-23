FROM node:14-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build
EXPOSE 4200
RUN chmod -R 777 /usr/src/app
USER node
CMD ["ng", "serve", "--host", "0.0.0.0"]