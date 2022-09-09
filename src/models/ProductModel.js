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

module.exports = {
  getAllProducts,
  byIdProducts,
};