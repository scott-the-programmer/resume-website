# base image
FROM node:latest

# set working directory
WORKDIR /website

# add `/app/node_modules/.bin` to $PATH
ENV PATH /website/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@latest

# add app
COPY . /website

# start app
CMD ng serve --host 0.0.0.0
