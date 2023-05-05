const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  }
  if (req.url === "/about") {
    //BLOCKING CODE THIS CODE WILL BLOCK OUR WEBSITE AND IT WILL ALSO BLOCK FOR OTHER USER WHO ARE NOT REQUESTING THIS PAGE 
     function f(){for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }

    res.end("About Page");}
  }
});

server.listen(3000, () => {
  console.log("Server listing on port 3000");
});
