var path = require('path'),
    fs = require('fs');
        
function render(file, dataFormat, callback) {
        var filepath = path.join('./views/', file);
        console.log(filepath);
        fs.readFile(filepath, dataFormat, function (err, data) {
            if (err) return callback(err);
            callback(null, data);
        });
    }

function eff(err, res) {
    res.writeHead(202, {"Content-Type": "text/plain"});
        res.write("Eff... something went wrong");
        res.end();
}
exports.render = render;
exports.eff = eff;