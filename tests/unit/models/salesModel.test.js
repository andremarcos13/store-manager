const { expect } = require('chai');
const { func } = require('joi');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { getAllSales, byIdSales, createSaleDate, createSale } = require('../../../src/models/SaleModel');
const salesMock = require('../mocks/sales.model.mock');

describe('Testa a camada model-sales', async function () {
  it('testa se a função getAllSales funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([salesMock]);
    const sales = await getAllSales();
    expect(sales).to.equal(salesMock);
  })
  it('testa se a função byIdSales funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([salesMock[0]]);
    const sales = await byIdSales(1);
    expect(sales).to.equal(salesMock[0])
  })
  it('testa se a função createSaleDate funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const saleId = await createSaleDate(1);
    expect(saleId).to.equal(1);
  })
    afterEach(sinon.restore);
})