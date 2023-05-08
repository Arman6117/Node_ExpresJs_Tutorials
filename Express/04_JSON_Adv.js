const express = require('express');
const {products} = require('../../../node-express-course//02-express-tutorial/data');


const app = express();

app.get('/', (req,res)=>{
    res.send(`<h1>Home Page</h1> <a href= '/api/products'>Products</a>`);

})

app.get('/api/products', (req,res)=>{
   const newProducts = products.map((product)=>{
    const {id,name,image} = product;
    return {id,name,image};
   })
   res.json(newProducts);
})
app.get('/api/products/1', (req,res)=>{
  const  singleProduct = products.find((product)=> product.id === 1)
   res.json(singleProduct);
})

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})