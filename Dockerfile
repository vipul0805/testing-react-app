# Node version
FROM node:10.19.0-alpine

# Make a directory where application will be stored
RUN mkdir -p /usr/src/app
# Set working directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

RUN npm build

EXPOSE 3000

CMD ["npm", "start"]