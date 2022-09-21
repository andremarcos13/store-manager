const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productsMock = require('../mocks/products.model.mock');
const { ctrlGetAllProducts, ctrlByIdProducts, ctrlCreateProduct } = require('../../../src/controllers/ProductController');

describe('Testa a camada controller-products', async function () {
  it('testa se a função ctrlGetAllProducts funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock]);
    const products = await ctrlGetAllProducts();
    expect(products).to.equal(productsMock);
  })
  it('testa se a função ctrlByIdProducts funciona como esperado', async function () {
   sinon.stub(connection, 'execute').resolves([[productsMock[0]]]);
    const products = await byIdProducts(1);
    expect(products).to.equal(productsMock[0]);
  })
});