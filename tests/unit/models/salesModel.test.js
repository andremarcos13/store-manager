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
    afterEach(sinon.restore);
})