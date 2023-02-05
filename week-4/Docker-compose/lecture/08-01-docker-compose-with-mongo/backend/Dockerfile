FROM node:14

WORKDIR /myfolder/
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/

RUN yarn install
RUN yarn add dotenv
RUN yarn add coolsms-node-sdk

COPY . /myfolder/
CMD yarn dev