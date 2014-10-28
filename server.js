var connect = require('connect');
var serveStatic = require('serve-static');
var app = connect();

var http = require('http');

app.use(serveStatic('../angularjs'));
app.listen(5000);



// Wrong server code that does not work!  Fix is in angularjs directory server.js file

// var connect = require('connect');
// var http = require('http');



// connect()
//   .use(connect.static('/angularjs')).listen(5000);