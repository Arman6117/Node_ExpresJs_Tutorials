const express = require("express");
const app = express();

app.get('/', (req,res)=>{
    console.log("User is on the server !!");
    res.status(200).send("Home Page");
})
app.get('/about', (req,res)=>{
    
    res.status(200).send("About Page");
})
app.all('*', (req,res)=>{

    res.status(404).send("<h1>Resource not found</h1>");
})

app.listen(3000,()=>{
    console.log("Server is listening on port 3000..");
})


// ALL EXPRESS APP SERVER METHODS
// 1] app.get => Get the data/hit the route
// 1] app.post => Post the data
// 1] app.put => Update the data
// 1] app.use => Use the middle ware 
// 1] app.delete => Delete the data
// 1] app.all => Default route if user tries to access the route that does not exits we can use this method to handle that request