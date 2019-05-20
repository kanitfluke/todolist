FROM node:12.2.0-alpine

WORKDIR /usr/app

COPY ./app/package.json .
RUN npm install --quiet

COPY ./app/ .

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait