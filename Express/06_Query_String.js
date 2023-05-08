const express = require('express');
const {products} = require('../../../node-express-course/02-express-tutorial/data');

const app = express();

app.get('/api/v1/query', (req,res)=>{
    const {search,limit}= req.query;

    let sortedProducts = [...products];
    if(search)
    {
        sortedProducts = products.filter((product)=>{
            return product.name.startsWith(search);
        })
    }
    if(limit)
    {
        sortedProducts = products.slice(0,Number(limit))
    }
    res.status(200).json(sortedProducts)
})





app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})
