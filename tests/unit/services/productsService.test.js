const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { servGetAllProducts, servByIdProducts, servCreateProduct } = require('../../../src/services/ProductService');
const productsMock = require('../mocks/products.model.mock');

describe('Testa a camada model-products', function () {
  it('testa se a função getAllProducts funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock]);
    const products = await servGetAllProducts();
    expect(products).to.equal(productsMock)
  });
  it('testa se a função byIdProducts funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([[productsMock[0]]]);
    const products = await servByIdProducts(1);
    expect(products).to.equal(productsMock[0]);
  });
  it('testa se a função createProduct funciona como esperado', async function () {
    sinon.stub(connection, 'execute').resolves([productsMock[2]]);
    const product = await servCreateProduct('Escudo do Capitão América');
    console.log('teste', productsMock[2]);
    expect(product).to.equal(productsMock[2]);
  });
  this.afterEach(sinon.restore);
})

