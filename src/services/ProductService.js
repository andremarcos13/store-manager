const ProductModel = require('../models/ProductModel');

const servGetAllProducts = async () => {
  const allProducts = await ProductModel.getAllProducts();
  return allProducts;
};

const servByIdProducts = async (id) => {
  const findByIdProducts = await ProductModel.byIdProducts(id);
  return findByIdProducts;
};

const servCreateProduct = async (name) => {
  const createProducts = await ProductModel.createProduct(name);
  console.log('createProcutsserv', createProducts);
  return createProducts;
};

module.exports = {
  servByIdProducts,
  servGetAllProducts,
  servCreateProduct,
};