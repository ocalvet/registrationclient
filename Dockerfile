FROM node:8.15 as builder

# Change cwd
WORKDIR /home/node/registrationclient/

# Copy files
COPY . .

# Installs dependencies
RUN npm install -g

# Start api
CMD npm start
