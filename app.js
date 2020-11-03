const express = require('express');
const nodemon = require('nodemon');
const app = express();

const port = process.env.port || 7000;

app.get('/:num1/:num2', (req, res) => {         

    var num1 = req.params.num1;  
    var num2 = req.params.num2; 

    var responseObj = { "sum": + Number(num1) + Number(num2)}
    res.send('<h4>' + JSON.stringify(responseObj) + '</h4>');
});

app.get('/:num1', (req, res) => {         

    var num1 = req.params.num1;  

    var responseObj = { "sum": 10 + Number(num1)}
    res.send('<h4>' + JSON.stringify(responseObj) + '</h4>');
});

app.get('/', (req, res) => {
    res.send('<h2>Please add a number in the url</h2> ');
})

app.listen(port, () => {
    console.log('ADD TEN APP IS RUNNING');
});















    // var num = window.location.pathname
    // var splt = x.split('/')
    // console.log(splt);
    // splt.toString().split(',');

    // var arr = splt.toString().split(',');
    // console.log(arr);
    // var numbers = arr.filter(numOnly => {
    //     return numOnly
    // });
    // console.log(numbers);
    // if (numbers.length == 2) {
    //     var resOne = 10 + Number(numbers[0]);
    //     document.getElementById("demo").innerHTML = resOne;
    //     console.log(Number(numbers[0]) + Number(numbers[1]))
    // } else if (numbers.length == 1) {
    //     var res = 10 + Number(numbers[0]);
    //     document.getElementById("demo").innerHTML = res;
    //     console.log(10 + Number(numbers[0]));
    // } else {
    //     document.getElementById("demo").innerHTML = 'Incorrect input';
    //     console.log('Incorrect input');
    // }