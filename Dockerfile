# Use Node.js LTS version
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose the port used by the app
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
