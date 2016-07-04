const fs = require("fs");
const url = require("url");
const http = require("http");
const PATH = 'src';

const PORT = process.env.PORT;
const HOST_IP = process.env.IP;

const server = http.createServer(function(req, res) {
    try {
        getResource(req, res);
    }
    catch (err) {
        console.log(err);
    }
});

server.listen(PORT, HOST_IP, function() {
    console.log('Server running');
});

function getResource(req, res) {

    var obj = url.parse(req.url);

    fs.readFile(`${PATH}/${obj.pathname}`, 'utf8', function(err, data) {
        if (err) {
            console.log(err);
            return;
        }

        var ct = obj.pathname.split('.')[1];

        res.setHeader('Content-Type', getContentType(ct));
        res.end(data);
    });

    return res;

};

function getContentType(type) {
    var ct = 'text/html';

    switch (type) {
        case "js":
            ct = 'text/javascript';
            break;
        case 'css':
            ct = 'text/css';
            break;
        case 'json':
            ct = 'application/json';
            break;
        case 'gif':
            ct = 'image/gif';
            break;
        case 'jpeg':
            ct = 'image/jpeg';
            break;
        case 'png':
            ct = 'image/png';
            break;
        default:
            ct = 'text/text';
    }

    return ct;
}