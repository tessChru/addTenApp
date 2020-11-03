const express = require('express');
const nodemon = require('nodemon');
const app = express();

const port = process.env.port || 7000;

app.get('/', (req, res) => {
    res.send('Welcome to the home page');
})

app.listen(port, () => {
    console.log('ADD TEN APP');
});

