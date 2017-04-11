var http = require('http');
// where the server listens
var PORT1 = 7000;
// handles requests
function handleRequest(request, response){
	// this will be triggered when the user goes to the port
	response.end('it works! path hit; ' + request.url + '\n'+ 'you are dilligent');
}
// create server
var server = http.createServer(handleRequest);
// start server
server.listen(PORT1, function(){
	console.log('server is listening on port: ' + PORT1);
});
var http = require('http');
// where the server listens
var PORT2 = 7050;
// handles requests
function handleRequest(request, response){
	// this will be triggered when the user goes to the port
	response.end('it works! path hit; ' + request.url + '\n' + 'you have a bad attitude go back to the grind stone');
}
// create server
var server = http.createServer(handleRequest);
// start server
server.listen(PORT2, function(){
	console.log('server is listening on port: ' + PORT2);
});