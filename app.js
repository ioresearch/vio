var server = require('./api/server.js');
var router = require('./api/router.js');
var routes = require('./routes/');

var reqHandler = {};
reqHandler["/"] = routes.index;
reqHandler["/auth"] = routes.auth;

server.start(reqHandler, router.route);