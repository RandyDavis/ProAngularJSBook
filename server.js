var connect = require('connect');
var http = require('http');



connect()
  .use(connect.static('/angularjs')).listen(5000);