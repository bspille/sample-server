var http = require('http');
// where the server listens
var port1 = 7000;
var port2 = 7050;
// call these ports in the browser localhost:7000
// handles requests
function handleRequest1(request, response){
	// this will be triggered when the user goes to the port
	response.end('it works! path hit; ' + request.url + '\n'+ 'you are dilligent');
}
function handleRequest2(request, response){
	// this will be triggered when the user goes to the port
	response.end('it works! path hit; ' + request.url + '\n' + 'you have a bad attitude go back to the grind stone');
}
// create server
var server = http.createServer(handleRequest1);
var server = http.createServer(handleRequest2);
// start server
server.listen(port1, function(){
	console.log('server is listening on port: ' + port1);
});
server.listen(port2, function(){
	console.log('server is listening on ports: ' + port2);
});