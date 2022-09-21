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
  console.log('parametro service', products);
  const newSaleId = await SaleModel.createSaleDate();
  const create = await SaleModel.createSale(products, newSaleId);
  console.log('create no service', create);
  return { id: newSaleId, itemsSold: products };
};

module.exports = {
  servGetAllSales,
  servByIdSales,
  servCreateSale,
};