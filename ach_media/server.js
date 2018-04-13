/**
 * Static HTTP Server
 * Simple webserver for serving static images
 **/
// modules
var static = require('node-static'), port = 8080, http = require('http');
var file = new static.Server('./public', {cache:3600,gzip:true});
// Serve
http.createServer(function(req,res){req.addListener('end', function(){file.serve(req,res);}).resume();}).listen(port);
