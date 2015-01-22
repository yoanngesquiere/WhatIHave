FROM dockerfile/nodejs:latest

ADD . /data/app/
WORKDIR /data/app
RUN npm install
RUN npm install -g grunt-cli
RUN npm install -g bower
RUN git config --global url."https://".insteadOf git://
RUN bower install --allow-root
