const ProductModel = require('../models/ProductModel');

const servGetAllProducts = async () => {
  const allProducts = await ProductModel.getAllProducts();
  return allProducts;
};

const servByIdProducts = async (id) => {
  const findByIdProducts = await ProductModel.byIdProducts(id);
  return findByIdProducts;
};

module.exports = {
  servByIdProducts,
  servGetAllProducts,
};