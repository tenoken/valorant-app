FROM node:14-alpine as build-step
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN npm run build

# Stage 2
#FROM nginxinc/nginx-unprivileged:1.22-perl
FROM nginx:1.15.8-alpine
COPY --from=build-step /usr/src/app/dist/valorant-app /usr/share/nginx/html
#RUN chmod -R 777 /usr/share/nginx/html
#RUN adduser -D -g '' newuser
#USER newuser
#CMD ["ng", "serve", "--host", "0.0.0.0"]


