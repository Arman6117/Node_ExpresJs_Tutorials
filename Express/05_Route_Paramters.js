const express = require("express");
const {
  products,
} = require("../../../node-express-course/02-express-tutorial/data");

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1> <a href= '/api/products'>Products</a>`);
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProducts);
});
app.get("/api/products/:productId", (req, res) => {
  // Instead of hardcoding the value of parameters we use route parameters
  const { productId } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );
  if (!singleProduct) {
    return res.status(404).send("Does not exits");
  }
  res.json(singleProduct);
});

// Complex Route Parameter

app.get('/api/products/:productId/reviews/:reviewID', (req,res)=>{
    const {productId,reviewID} = req.params;

    const singleReview = products.find((review)=> review.id === Number(reviewID) );
    const singleProduct = products.find(
        (product) => product.id === Number(productId)
      );
     
    if(!singleReview || !singleProduct)
    {
        return res.status(404).send("Doest not exits")
    }
    res.json(singleProduct);
    res.json(singleReview);
})
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// Route parameter are basically place holder where user provides the parameter
