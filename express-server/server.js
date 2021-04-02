const express = require('express');
const app = express();

// GET
app.get('/',(req,res) => {
  res.send('Hello this is an express server')
})

// GET api/products
app.get('/api/products', (req,res) => {
  res.json({
    products: [
      {id: 1, name: "product 1"},
      {id: 2, name: "product 2"}
    ]
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App is running at PORT ${PORT}`))