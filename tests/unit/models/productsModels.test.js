const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { getAllProducts, byIdProducts, createProduct } = require('../../../src/models/ProductModel');
const productsMock = require('../mocks/products.model.mock');

describe('Testa a camada model-products', function () {
  it('testa se a função getAllProducts funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock]);
    const products = await getAllProducts();
    expect(products).to.equal(productsMock)
  });
  it('testa se a função byIdProducts funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([[productsMock[0]]]);
    const products = await byIdProducts(1);
    expect(products).to.equal(productsMock[0]);
  });
  it('testa se a função createProduct funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock[2]]);
    const product = await createProduct('Escudo do Capitão América');
    expect(product).to.equal(productsMock[2]);
  });
  this.afterEach(sinon.restore);
})
