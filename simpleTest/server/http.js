var http = require("http");
var fs = require("fs");
const port = 7000;
const plainContent = { "Content-Type": "text/plain" };

function serveStaticFile(res, path, contentType, responseCode) {
    if (!responseCode) responseCode = 200;

    fs.readFile(__dirname + path, function (err, data) {
        if (err) {
            console.info(err)
            res.writeHead(500, { "Content-Type": contentType });
            res.end("500 - Internal error");
        } else {
            res.writeHead(responseCode, { "Content-Type": contentType });
            res.end(data);
        }
    });
}

http.createServer((req, res) => {
    // normalize url by removing querystring, optional
    // trailing slash, and making lowercase
    var path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
    switch (path) {
        case "":
            serveStaticFile(res, "./../public/home.html", "text/html");
            // res.writeHead(200, plainContent);
            // res.end("homepage");
            break;
        case "/about":
            // res.writeHead(200, plainContent);
            // res.end("about page");
            serveStaticFile(res, "./../public/about.html", "text/html");
            break;
        case "/image":
            // res.writeHead(200, plainContent);
            // res.end("about page");
            serveStaticFile(res, "./../public/images/image.jpg", "image/jpeg");
            break;
        default:
            // res.writeHead(404, plainContent);
            // res.end("Not Found");
            serveStaticFile(res, "./../public/notfound.html", "text/html", 404);
            break;
    }
}).listen(port);

console.info(
    `server running on http://localhost:${port};  press Ctrl-C to terminate....'`
);
