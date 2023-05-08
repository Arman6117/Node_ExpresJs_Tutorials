const express = require('express');

const app = express();

const info = (req,res,next)=>{   // Middleware functions can access req,res object 
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(method,url,year);
    next() // Next is used to transfer the application to next middleware or function we can also terminate middleware function by sending our own response
    // res.send("Terminate");
}

// TERMINATION OF MIDDLE WARE IS MOST IMPORTANT IF WE DON'T OUR APP WILL GET STUCK

app.get('/',info,(req,res)=>{  // We need to invoke these function in middle of the our url / route path and callback function thats why they are called middle ware functions
    res.send("Home")
})
app.get('/about',info,(req,res)=>{
    res.send("About")
})


app.listen(3000,()=>{
    console.log("Server is listening on port 3000");
})


// We can write our logic in the middleware functions and access them any time we want we just need to write them once then we can access them many many times in various routes

// We can also set this function in separate file and access them using app.use by using this method we don't need to add middle ware function manually to all the routes