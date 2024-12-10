import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Serve the HTML file
app.use(express.static(path.resolve('public')));

// Simulated data
let counter = 0;

// Increment the counter every second
setInterval(() => {
    counter++;
}, 1000);

app.get('/polling', (req, res) => {
    res.json({ message: `Current counter value: ${counter}` });
});

app.listen(PORT, () => {
    console.log(`Regular Polling server is running on http://localhost:${PORT}`);
});
