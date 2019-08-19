# Use an existing docker image as a base
FROM node:alpine

# set the working dir to /app
WORKDIR '/app'

# copy package.json to the container
COPY ./package.json ./

# install package.json modules in container
RUN npm install

# copy everything to container /app
COPY . .

# expose port 3000 to mount it to another port in local machine 
EXPOSE 3000

# start server inside container
CMD ["npm", "start"]