var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var port = 3000

var urlencodedParser = bodyParser.urlencoded({ extended: false })
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('Express Side');
});

app.post('/post', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.send('Got a POST request');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});