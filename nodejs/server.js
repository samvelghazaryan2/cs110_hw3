let http = require('http');
server = http.createServer (function(req, res) {
	if(req.url === '/cs/homework') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('Hello world!\n');
	}   else if(req.url === '/cs/homework/node') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('This is our third homework\n');
	}   else if(req.url === '/cs/homework/node/hw3') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('We started using node\n');
	}   else if(req.url === '/cs/homework/node/hw3/almost/done') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end('I have almost finished my homework!\n');
	}   else if(req.url === '/cs/homework/node/hw3/done') {
		res.writeHead(200, {'Content-Type' : 'text/plain'})
		res.end(' I havr finished my homework!!! :)\n');
	}   else {
		res.writeHead(404, {'Content-Type' : 'text/plain'})
		res.end('Page is not found!\n');
	}
}).listen(3001);