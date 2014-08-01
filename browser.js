var http = require('http');

var file = 'test.json';

function doRequest(file) {
  console.log('requesting %s', file);
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
      console.log('The follwing line is now the reponse of %s:', file);
      console.log(buffer);
    });
  });
}
doRequest('test.json');
doRequest('test2.json');
