/**
 *
 * Code is mostly based on: http://blog.modulus.io/build-your-first-http-server-in-nodejs
 */
'use strict';

const http = require('http');

const PORT = process.env.PORT || 8080;
const server = http.createServer(function handleRequest(request, response){
    response.end('Alive!');
});

server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
