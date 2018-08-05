// JavaScript source code
'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var dt = require('./modules');
var formidable = require('formidable');
var fs = reqire('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.path;
            var newpath = 'C:/Users/BenWin10/desktop' + files.filetoupload.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File Uploaded and Moved!');

                res.write('File uploaded');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("The date and time are currently: " + dt.myDateTime());
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type ="file" name="filetoupload"><br>');
        res.write('<input type+"submit">');
        return res.end('');
    }
}).listen(port);
