const SaleModel = require('../models/SaleModel');

const servGetAllSales = async () => {
  const allSales = await SaleModel.getAllSales();
  return allSales;
};

const servByIdSales = async (id) => {
  const findByIdSales = await SaleModel.byIdSales(id);
  console.log('servFindByIdSales', findByIdSales);
  return findByIdSales;
};

const servCreateSale = async (products) => {
  const create = await SaleModel.createSale(products);
  return create;
};

module.exports = {
  servGetAllSales,
  servByIdSales,
  servCreateSale,
};