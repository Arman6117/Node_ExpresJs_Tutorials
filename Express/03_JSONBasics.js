const express = require('express');
const {products} = require('../../../node-express-course/02-express-tutorial/data');

const app = express();

app.get('/', (req,res)=>{
    res.status(200).json(products)
})



app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})