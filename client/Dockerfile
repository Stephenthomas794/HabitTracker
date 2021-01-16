FROM node:latest as build

MAINTAINER stephenthomas794@gmail.com

RUN mkdir -p /client/src/app

WORKDIR /client/src/app

COPY package.json /client/src/app

RUN npm install

COPY . /client/src/app

ENV REACT_APP_API_PROXY=

RUN npm run build

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

COPY --from=build /client/src/app/build /client/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
