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

const ctrlCreateProduct = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 5) {
    return res.status(422).json({
      message: '"name" length must be at least 5 characters long',
    });
  }
  const newProduct = await ProductService.servCreateProduct(name);
    return res.status(201).json(newProduct);
};
module.exports = {
  ctrlByIdProducts,
  ctrlGetAllProducts,
  ctrlCreateProduct,
};