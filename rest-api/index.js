const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // Logging middleware

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined')); // Log all HTTP requests

// In-memory database
let users = [];
let idCounter = 1;

// Create User
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    const newUser = { id: idCounter++, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Get All Users
app.get('/users', (req, res) => {
    res.json(users);
});

// Get User by ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) res.json(user);
    else res.status(404).json({ message: "User not found" });
});

// Update User by ID
app.put('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        const { name, email } = req.body;
        user.name = name || user.name;
        user.email = email || user.email;
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// Delete User by ID
app.delete('/users/:id', (req, res) => {
    const index = users.findIndex(u => u.id === parseInt(req.params.id));
    if (index !== -1) {
        users.splice(index, 1);
        res.json({ message: "User deleted" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
