import express from 'express';
import path from 'path';

const app = express();

// Serve the HTML file
app.use(express.static(path.resolve('public')));

// SSE endpoint
app.get('/time', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const sendTime = () => {
        const currentTime = new Date().toUTCString();
        res.write(`data: ${currentTime}\n\n`);
    };

    // Send the time every second
    const interval = setInterval(sendTime, 1000);

    // Cleanup on client disconnect
    req.on('close', () => {
        clearInterval(interval);
        res.end();
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
