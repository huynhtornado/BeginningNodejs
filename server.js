// Define dependences
const http = require('http');
const app = require('./app');

// Define PORT
const port = process.env.PORT || 8080;

// Create a Server
const server = http.createServer(app);

// Listen a port
server.listen(port);

/**
 * Note: Do you want use "npm start" to start app
 */