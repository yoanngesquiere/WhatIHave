FROM dockerfile/nodejs:latest

ADD . /data/app/
WORKDIR /data/app
RUN npm install
RUN npm install -g grunt-cli
