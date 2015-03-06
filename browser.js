var http = require('http');
var util = require('util');
var file = 'test.json';
var consoleEl = document.getElementById('console');

function logger() {
  var str = util.format.apply(this, arguments);
  consoleEl.innerHTML += str + "\n";
}


function doRequest(file) {
  logger('requesting %s', file);
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
      logger('Finished request for %s', file);
      logger('The follwing line is now the reponse of %s:', file);
      logger(buffer);
    });
  });
}
doRequest('test.json');
doRequest('test2.json');
