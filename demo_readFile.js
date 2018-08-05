// JavaScript source code
'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var dt = require('./modules');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('factorialCal.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("The date and time are currently: " + dt.myDateTime());
        res.write(data);
        res.end('');
    });
}).listen(port);
