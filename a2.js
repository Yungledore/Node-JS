var http = require('http');
var fs = require('fs')
http.createServer(function(req,res){
    // open a file on the server and rreturn its content:
    fs.readFile('a1 copy.html',function(err,data){
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(8080);