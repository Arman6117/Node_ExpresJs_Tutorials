const express = require("express");
const path = require('path');

const app = express();

app.use(express.static('./navbar-app'))

app.get('/', (req,res)=>{
res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send("Resource not found");
})

app.listen(3000,()=>{
    console.log(`Server is listening on port 3000..`);
})

