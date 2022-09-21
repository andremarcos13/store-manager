const SaleService = require('../services/SaleService');

const ctrlGetAllSales = async (req, res) => {
  const sales = await SaleService.servGetAllSales();
  if (!sales) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(sales);
};

const ctrlByIdSales = async (req, res) => {
  const { id } = req.params;
  const sales = await SaleService.servByIdSales(id);
    console.log('ctrlByIdSales', sales);

  if (!sales || sales.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
    return res.status(200).json(sales);
};

const ctrlCreateSale = async (req, res) => {
  const products = req.body;
  console.log('controller body', products);
  const jc = await SaleService.servCreateSale(products);
  console.log('jesusajuda cntroller', jc);
  return res.status(201).json(jc);
};

module.exports = {
  ctrlGetAllSales,
  ctrlByIdSales,
  ctrlCreateSale,
};