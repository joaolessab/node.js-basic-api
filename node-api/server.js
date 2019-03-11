const express = require('express');
const app = express();

//Creating routes
app.get('/', (req, res) => {
    res.send('Hello João');
});

app.listen(3001);