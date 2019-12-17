FROM node:lts-jessie

WORKDIR /usr/src/resume-parser-api

COPY ./ ./

RUN npm install

RUN apt-get update -y

RUN apt-get install -y apt-utils

RUN apt-get install -y antiword

RUN apt-get install -y catdoc

RUN apt-get install -y poppler-utils

CMD ["/bin/bash"]