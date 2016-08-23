var connect = require('connect'),
  serveStatic = require('serve-static'),
  http = require('http'),
  app;
var port = process.env.PORT || 8080;

var serveApp = serveStatic('app');
var serveRequire = serveStatic('node_modules/requirejs/');
var serveTemplates = serveStatic('app/js/templates');
var serveNodeModules = serveStatic('node_modules');

app = connect()
  .use(serveApp)
  .use('/js/lib/', serveRequire)
  .use('/js/templates/', serveTemplates)
  .use('/node_modules', serveNodeModules);

http.createServer(app).listen(port, function () {
  console.log('Running on http://localhost:' + port);   // eslint-disable-line no-console
});
