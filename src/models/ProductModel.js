const connection = require('./connection');

const getAllProducts = async () => {
    const [products] = await connection.execute('SELECT * FROM StoreManager.products');
    return products;
};

const byIdProducts = async (id) => {
    const query = 'SELECT id, name FROM StoreManager.products WHERE id=?';
    const [[products]] = await connection.execute(query, [id]);
    return products;
};

const createProduct = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [newProduct] = await connection.execute(query, [name]);
    return ({ id: newProduct.insertId, name });
};
module.exports = {
  getAllProducts,
  byIdProducts,
  createProduct,
};