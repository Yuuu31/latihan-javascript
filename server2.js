var http = require('http');
PORT = 3400;

var server = http.createServer(function(req,res){
    var body ='<p>hallo kita ngoding lagi nih</p>'

res.writeHead(200,{
    'content-length':body.length,
    'content-Type':'text/html',
    'pesan-head':'hallo kita ngoding lagi nih'
});

res.write(body);
res.end();

})
server.listen(3400);
console.log(`Port ${PORT} : Node.js Server...`);

