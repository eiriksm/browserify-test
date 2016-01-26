var fs = require('fs');
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Access-Control-Allow-Origin': '*'});
  var f = fs.readFileSync('./test.json');
  res.end(f);
  //res.end(new Buffer(2));
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
