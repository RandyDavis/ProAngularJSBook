var connect = require('connect');



connect()
  .use(connect.static('/angularjs'));

// connect()
//   .use(connect.static(__dirname + '/public', { maxAge: oneDay }))