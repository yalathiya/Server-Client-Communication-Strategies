import express from 'express';
import path from 'path';

const app = express();
const PORT = 3001;

// provide static pages
app.use(express.static(path.resolve('public')));

// Simulated data
let message = 'Initial message';

app.get('/long-polling', (req, res) => {
    // Simulate server delay and data change
    setTimeout(() => {
        message = `Updated message at ${new Date().toLocaleTimeString()}`;
        res.json({ message });
    }, 6000); // Hold the request for 10 seconds
});

app.listen(PORT, () => {
    console.log(`Long Polling server is running on http://localhost:${PORT}`);
});
