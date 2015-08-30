FROM node:0.12.7

ADD . /data/app/
WORKDIR /data/app
RUN npm install
RUN npm install -g grunt-cli
RUN git config --global url."https://".insteadOf git://
RUN node_modules/bower/bin/bower install --allow-root
RUN npm install http-server -g
RUN grunt

CMD http-server /data/app/dist/
