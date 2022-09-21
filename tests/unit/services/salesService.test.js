const { expect } = require('chai');
const { func } = require('joi');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { servGetAllSales, servByIdSales, servCreateSale } = require('../../../src/services/SaleService');
const salesMock = require('../mocks/sales.model.mock');

describe('Testa a camada service-sales', async function () {
  it('testa se a função getAllSales funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([salesMock]);
    const sales = await servGetAllSales();
    expect(sales).to.equal(salesMock);
  })
  it('testa se a função byIdSales funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([salesMock[0]]);
    const sales = await servByIdSales(1);
    expect(sales).to.equal(salesMock[0])
  })
  it('testa se a função createSaleDate funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const saleId = await servCreateSale(1);
    expect(saleId).to.equal(1);
  })
    afterEach(sinon.restore);
})