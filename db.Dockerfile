FROM postgres:12

RUN apt-get update && apt-get install -y curl

USER postgres

ENV TZ Asia/Tokyo
ENV COLUMNS 131