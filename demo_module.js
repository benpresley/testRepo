// JavaScript source code
'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var dt = require('./modules');
var uc = require('upper-case'); //tells line 10 to display text in all caps. see variable name on line 6 & 10

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(uc("The date and time are currently: " + dt.myDateTime()));
    res.end('');
}).listen(port);