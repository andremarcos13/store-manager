const ProductService = require('../services/ProductService');

const ctrlGetAllProducts = async (req, res) => {
  const products = await ProductService.servGetAllProducts();
  if (!products) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(products);
};

const ctrlByIdProducts = async (req, res) => {
  const { id } = req.params;
  const products = await ProductService.servByIdProducts(id);
    if (!products) {
      return res.status(404).json({ message: 'Product not found' });
    }
  return res.status(200).json(products);
};

module.exports = {
  ctrlByIdProducts,
  ctrlGetAllProducts,
};