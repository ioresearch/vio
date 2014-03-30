function route(reqHandler, reqPath, req, res) {
    if (typeof reqHandler[reqPath] === 'function') {
        reqHandler[reqPath](req, res);
    }
    else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not found");
        res.end();
    }
}


exports.route = route;