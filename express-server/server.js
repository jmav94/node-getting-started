const express = require('express');
const app = express();

// add json body parser middleware
app.use(express.json())

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

// POST /api/products
app.post('/api/products', (req,res)=> {

  // validate the name property
  if (!req.body.name) return res.status(400).send('Name is required field')

  // create a new product
  const product = {
    id: products.length + 1,
    name: req.body.name
  }

  // add a new product to our list
  products.push(product)

  // send the newly created product in response
  return res.status(200).send(product)

})

// DELETE /api/products/:id
app.delete('/api/products/:id', (req,res) => {
  // find the index of product ich we want to delete
  const product = products.find(p => p.id === parseInt(req.params.id));
  // if there is no product you can send error back with 404
  if(!product) return res.status(404).send('No product found')

  // find the index of th product
  const index = products.indexOf(product);

  // delete the product from array
  products.splice(index,1);
  // send a simple successfully deleted record
  return res.json({msg: `product is deleted with id ${req.params.id}`})
})

// PUT Endpoint
app.put('/api/products/:id',(req, res) => {
  // find the index of product ich we want to delete
  const product = products.find(p => p.id === parseInt(req.params.id));
  // if there is no product you can send error back with 404
  if (!product) return res.status(404).send('No product found')

  // create a new record to update
  const recordToUpdate = { id: product.id}
  // chack if user wants to update only name
  if(req.body.name){
    // add this name property to record to update
    recordToUpdate.name = req.body.name
  }
  // find the index of the product
  const index = products.indexOf(product)
  // update the array
  products[index] = recordToUpdate;
  // send the updated array
  return res.status(200).json(products)



})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`App is running at PORT ${PORT}`))