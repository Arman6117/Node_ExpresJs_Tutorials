const http  = require('http');

const server = http.createServer((req,res)=>{  // Creating the server and taking request and response in a callback (req and res are objects)

   if(req.url === '/')
   {
    res.end("Welcome to my page")
   }
    // res.write("Welcome to my Page"); // Write method will write the data on the page
    // res.end(); // To end the request

   if(req.url==='/about') //Getting the requested page
   {
    res.end("Welcome to about page")
   }
   
   res.end(
    `<h1>OPPS</h1>
    <p>Seems your page does not exists</p>
    <a href='/'>Back to Home</a>`
   )
})

server.listen(3000,()=>{
    console.log("Server listening on port 3000");
})