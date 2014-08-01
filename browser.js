var http = require('http');

var url = '/test.json'; // Should work with statically serving the dir.

if (global.location && global.location.origin && global.location.pathname) {
  url = global.location.origin + global.location.pathname + '/test.json';
  console.log('cool');
}

http.get(url, function(res) {
  var buffer = '';
  res.on('data', function(c) {
    buffer += c;
  });
  res.on('end', function() {
    console.log(buffer);
  });
});
