// var http = require('http');
// var port = process.env.port || 1337;
// http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World\n');
// }).listen(port);

// require('node-monkey').start({host: "http://remidataservice.cloudapp.net", port:"1337"});

var express = require('express');
var request = require('request');

var python_endpoint = 'http://10.104.164.174:7000';

var app = express();

app.get('/', function(req, res) {
  res.send('hello world');
});

app.post('/api/vend', function(req, res) {
  request.post(
      python_endpoint + '/api/vend',
      {},
      function (error, response, body) {
          console.log(error, response, body);
          res.status(200).end();
      }
  );
});

var port = 7000;
app.listen(port);
console.log('Server running on port: ' + port);

// messages = [
//   {
//     time:'2016-10-15 23:15:00',
//     sentiment:'0.5'
//   },
//   {
//
//   }
// ];
