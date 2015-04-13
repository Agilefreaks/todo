var connect = require('connect'),
  http = require('http'),
  app;

app = connect()
  .use(connect.static('app'))
  .use('/js/lib/', connect.static('node_modules/requirejs/'))
  .use('/js/templates/', connect.static('app/js/templates/'))
  .use('/node_modules', connect.static('node_modules'));

var port = process.env.PORT || 8080;

http.createServer(app).listen(port, function() {
  console.log('Running on http://localhost:' + port);
});
