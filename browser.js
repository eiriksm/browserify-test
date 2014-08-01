var http = require('http');

var file = 'test.json';

var opts = {
  port: window.location.port,
  path: window.location.pathname + file
};

http.get(opts, function(res) {
  var buffer = '';
  res.on('data', function(c) {
    buffer += c;
  });
  res.on('end', function() {
    console.log(buffer);
  });
});
