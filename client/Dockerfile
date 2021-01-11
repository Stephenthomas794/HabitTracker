FROM node:latest as build

MAINTAINER stephenthomas794@gmail.com

RUN mkdir -p /client/src/app

WORKDIR /client/src/app

COPY package.json /client/src/app

RUN npm install

COPY . /client/src/app

RUN npm run build


FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
