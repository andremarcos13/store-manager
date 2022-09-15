const express = require('express');
require('dotenv').config();

const app = express();

// não remova esse endpoint, é para o avaliador funcionar - blz
app.get('/', (_request, response) => {
  response.send();
});
const ProductController = require('./controllers/ProductController');

app.use(express.json());

app.get('/products', ProductController.ctrlGetAllProducts);
app.get('/products/:id', ProductController.ctrlByIdProducts);
app.post('/products', ProductController.ctrlCreateProduct);

const SaleController = require('./controllers/SaleController');

app.get('/sales', SaleController.ctrlGetAllSales);
app.get('/sales/:id', SaleController.ctrlByIdSales);
app.post('/sales', SaleController.ctrlCreateSale);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo server.js para executar sua aplicação 
module.exports = app;