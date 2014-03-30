var http = require('http'),
    url = require('url'),
    os = require('os'),
    ejs = require('ejs'),
    inspect = require('util').inspect;

function start(reqHandler, callback) {
    http.createServer(function (req, res) {
        var reqPath = url.parse(req.url).pathname;
        callback(reqHandler, reqPath, req, res);
    }).listen(3000);
}

exports.start = start;