const express = require('express')
const service = require('./src/service/productService');

const app = express()
const port = 3000

app.use(express.json());

app.get('/product', async(request, response) => {
  const result = await service.getProducts();
  response.json({ info: `I want an ${result.rows[0].name}` })
})

app.post('/product', async(request, response) => {
  const product = request.body;
  const productName = product.name;
  await service.insertProduct(productName);
  response.json({ info: `Product ${productName} inserted!` })
})

app.listen(port, () => {
  console.log(`Server up and running on port: ${port}`)
})