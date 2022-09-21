const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const productsMock = require('../mocks/products.model.mock');
const { ctrlGetAllProducts, ctrlByIdProducts, ctrlCreateProduct } = require('../../../src/controllers/ProductController');
// const ProductService = require('../services/ProductService');
const ProductService = require('../../../src/services/ProductService')

describe('Testa a camada controller-products', async function () {
  it('testa se a função ctrlGetAllProducts funciona como esperado', async function () {
    const res = {};
    const req = {}
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(connection, 'execute').resolves([productsMock]);
    await ctrlGetAllProducts(req,res);
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(productsMock)).to.be.true;;
  })
  it('testa se a função ctrlByIdProducts funciona como esperado', async function () {
    const res = {};
    const req = { params: { id: 1 } };
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(ProductService, 'servByIdProducts').resolves(productsMock[0]);
    await ctrlByIdProducts(req,res);
    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith(productsMock[0])).to.be.true;  })
});