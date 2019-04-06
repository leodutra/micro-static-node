var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')
 
// Serve up public/ftp folder
var serve = serveStatic('public', {'index': 'index.html'})
 
// Create server
var server = http.createServer(function onRequest (req, res) {
  serve(req, res, finalhandler(req, res))
})
 
// Listen
console.log('Server listening on port', 3000)
server.listen(3000)