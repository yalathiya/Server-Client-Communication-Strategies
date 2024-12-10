import express from 'express';
import path from 'path';

const app = express();

// Serve the HTML file
app.use(express.static(path.resolve('public')));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
