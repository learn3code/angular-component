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
    var ct = obj.pathname.split('.')[1];

    if (ct) {
        fs.readFile(`${PATH}/${obj.pathname}`, 'utf8', function(err, data) {
            if (err) {
                console.log(err);
                return;
            }

            res.statusCode = 200;
            res.setHeader('Content-Type', getContentType(ct));
            res.end(data);
        });

    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
            <html><head>
            <title>404 Not Found</title>
            </head><body>
            <h1>Not Found</h1>
            <p>The requested URL ${req.url} was not found on this server.</p>
            </body></html>`);
    }

    return res;

};

function getContentType(type) {
    var ct = 'text/html';

    switch (type) {
        case "html":
            ct = 'text/html';
            break;
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