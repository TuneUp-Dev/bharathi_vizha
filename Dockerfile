# Step 1: Build the React app
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Step 2: Serve the app using nginx
FROM nginx:alpine

# Copy the build output to nginx's default location
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to serve the application
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
