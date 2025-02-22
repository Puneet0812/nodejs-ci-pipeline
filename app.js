const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Node.js CI Pipeline Example!');
});

function add(a, b) {
    return a + b;
}

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});

module.exports = add;  // Exporting the function for testing
