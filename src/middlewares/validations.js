const ProductModel = require('../models/ProductModel');

const valitadeProductDB = async (salesBody) => {
  const findId = await
    Promise.all(salesBody.map(({ productId }) => ProductModel.byIdProducts(productId)));
  console.log('findId validation', findId);
  return !findId.some((elem) => elem === undefined);
};

const validateProductId = async (req, res, next) => {
  const salesBody = req.body;
  const socorroDeus = salesBody.every(({ productId }) => productId);
  console.log('socorro', socorroDeus);
  if (!socorroDeus) {
    return res.status(400).json({ message: '"productId" is required' });
  }
  const validateProduct = await valitadeProductDB(salesBody);
  console.log('validation validateProduct', validateProduct);
  if (!validateProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
//   salesBody.forEach(({ productId }) => {
//     if (!productId) {
//  return res.status(400).json({ message: '"productId" is required' }); 
// }
//   });
// for (let i = 0; i < salesBody.length; i += 1) {
//     console.log('teste', salesBody[i]);
//     if (salesBody[i].productId === undefined) {
//      return res.status(400).json({ message: '"productId" is required' });
//    } 
//   }
  //   for ([inicialização]; [condição]; [expressão final])
  //  declaração
  next();
};

const validateQuantity = (req, res, next) => {
  const salesBody = req.body;
  const socorroDeus = salesBody.every(({ quantity }) => quantity !== undefined);
  const socorroDeus2 = salesBody.every(({ quantity }) => quantity > 0);
  if (!socorroDeus) {
    return res.status(400).json({ message: '"quantity" is required' }); 
  }
  if (!socorroDeus2) {
   return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' }); 
  }

  next();
};

module.exports = {
  validateProductId,
  validateQuantity,
};