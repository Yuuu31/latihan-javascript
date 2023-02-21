var http = require('http');
var Port = 3400

var server = http.createServer(function (req, res) {
    res.end("Hallo, selamat datang di pembelajaran Node js");
});

server.listen(3400);

console.log("server running on http://localhost:3400");