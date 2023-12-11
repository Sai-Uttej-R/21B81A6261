const http = require('http')

const server = http.createServer(function(req, res){
    res.write('<h1>This is home page</h1>');
    res.end();
});

server.listen(8080, "localhost", ()=>{
    console.log("Server started and waiting for request at port 8080");
});