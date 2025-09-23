// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`<h1>Hello World!</h1>
            <img src="https://storage.googleapis.com/dict-training-bucket-day1/kitten.jpg" alt="Kitten" />
        `);
});

app.listen(port, () => {
    console.log(`App running on port ${port}`);
});
