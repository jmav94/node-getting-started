const express = require('express');
const app = express();

const products = [
  { id: 1, name: "product 1" },
  { id: 2, name: "product 2" }
]

// GET
app.get('/',(req,res) => {
  res.send('Hello this is an express server')
})

// GET api/products
app.get('/api/products', (req,res) => {
  res.json({
    products
  })
})

// GET api/products/1
app.get('/api/products/:id', (req, res) => {
  // find the product on the based on id
  const product = products.find(p => p.id === parseInt(req.params.id))
  // if there is no product you can send error back with 404 code
  if(!product) return res.status(404).send('No product found')

  // send the product back in the response
  return res.json(product)
})


// GET api/products/.. with params
app.get('/api/products/:id/customerId/:customerId', (req,res) =>{
  return res.send(req.params)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`App is running at PORT ${PORT}`))