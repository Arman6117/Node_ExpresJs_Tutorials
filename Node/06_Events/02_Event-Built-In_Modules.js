const http = require('http');

const server = http.createServer()

server.on('request', (req,res)=>{
    res.end("Welcome");
})

server.listen(3000)


// Some of built in modules uses the event emitter api ex is http module