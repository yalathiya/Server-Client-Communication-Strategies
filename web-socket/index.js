import https from 'https';
import fs from 'fs';
import { WebSocketServer } from 'ws';
import express from 'express';

// Create the Express app
const app = express();

// Serve static files (like the client.html)
app.use(express.static('public'));

// Load SSL certificates
const privateKey = fs.readFileSync('private-key.pem', 'utf8');
const certificate = fs.readFileSync('certificate.pem', 'utf8');

// Create HTTPS server (no ca.pem)
const server = https.createServer(
  {
    key: privateKey,
    cert: certificate,
  },
  app
);

// Create a WebSocket server
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('New secure WebSocket client connected');

  // Broadcast incoming messages to all connected clients
  ws.on('message', (message) => {
    console.log(`Received message: ${message}`);
    wss.clients.forEach((client) => {
      if (client.readyState === 1) client.send(message);
    });
  });

  // Send a welcome message to the new client
  ws.send('Welcome to the secure WebSocket server!');
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log('Secure WebSocket server is running on https://localhost:3000');
});
