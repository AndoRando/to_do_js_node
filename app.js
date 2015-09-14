'use strict';

var express = require('express');
var app = express();

app.set('view engine', 'jade');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});


var http = require("http");
var server = http.createServer(app)

server.listen(3000);
