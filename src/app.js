const express = require('express');

const app = express();

// não remova esse endpoint, é para o avaliador funcionar - blz
app.get('/', (_request, response) => {
  response.send();
});
const ProductController = require('./controllers/ProductController');

app.get('/products', ProductController.ctrlGetAllProducts);
app.get('/products/:id', ProductController.ctrlByIdProducts);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo server.js para executar sua aplicação 
module.exports = app;