var view = require('../api/render.js');

function index(req, res, err) {
        
    if (req.method === 'GET') {
        view.render('index.ejs', 'utf8', function (err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            if (err) view.eff(err, res);
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.write("404 Not found");
        res.end();
    }
}

exports.index = index;