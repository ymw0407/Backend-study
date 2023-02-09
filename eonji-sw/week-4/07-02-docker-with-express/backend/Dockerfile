FROM node:14

WORKDIR /myfolder/
COPY . /myfolder/

RUN yarn install
RUN yarn add dotenv
RUN yarn add coolsms-node-sdk
CMD yarn dev