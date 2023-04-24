# Set the base image
FROM node:latest

# Run the working directory
RUN mkdir - p /usr/src/app

# Set workdir
WORKDIR /usr/src/app

# Install dependencies
COPY package.json /usr/src/app

RUN npm install

# Copy code
COPY . /usr/src/app

# Expose the port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
