const express = require('express');
const nodemon = require('nodemon');
const app = express();

app.listen(7000, () => {
    console.log('ADD TEN APP');
});

app.get('/', (req, res) => {
    res.send('Welcome to the home page');
})