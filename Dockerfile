FROM node:16.14-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

RUN yarn --silent

# COPY . .
# EXPOSE 5000

CMD "yarn start:prod"