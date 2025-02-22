const express = require('express');
const app = express();
const port = 3000;

// Simple GET route for the homepage
app.get('/', (req, res) => {
    res.send('Welcome to the Node.js CI Pipeline Example!');
});

// Function to add two numbers (for unit testing)
function add(a, b) {
    return a + b;
}

// Only start the server if this file is run directly
if (require.main === module) {
    const server = app.listen(port, () => {
        console.log(`App is running at http://localhost:${port}`);
    });

    // Gracefully close the server when tests finish
    process.on('SIGTERM', () => {
        server.close(() => {
            console.log('Server closed');
            process.exit(0);
        });
    });
}

module.exports = add; // Export the add function for testing

