FROM node:16.13.0

RUN apt-get update && apt-get install -y locales vim

ENV LANG ja_JP.UTF-8
ENV COLUMNS 131

ENV TZ Asia/Tokyo

WORKDIR /app

RUN yarn install
