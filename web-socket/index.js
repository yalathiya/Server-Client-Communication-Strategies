import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

// Serve a basic HTML client
app.get('/', (req, res) => res.sendFile(new URL('./index.html', import.meta.url).pathname));

// WebSocket connection
wss.on('connection', (socket) => {
  console.log('New client connected.');

  // Broadcast messages to all clients
  socket.on('message', (message) => {
    console.log(`Received: ${message}`);
    wss.clients.forEach((client) => {
      if (client.readyState === client.OPEN) {
        client.send(message);
      }
    });
  });

  socket.on('close', () => console.log('Client disconnected.'));
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
