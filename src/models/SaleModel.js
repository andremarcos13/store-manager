const connection = require('./connection');

const serialize = (salesData) => ({
    saleId: salesData.sale_id,
    productId: salesData.product_id,
    quantity: salesData.quantity,
    date: salesData.date,
  });

const getAllSales = async () => {
  const query = `SELECT sale_id, date, product_id, quantity 
  FROM StoreManager.sales AS T LEFT JOIN StoreManager.sales_products AS B on (T.id = B.sale_id)
  ORDER BY sale_id,product_id ASC`;
  const [sales] = await connection.execute(query);
  console.log('getAllSales', sales.map(serialize));
    return sales.map(serialize);
    // return sales;
};

const byIdSales = async (id) => {
  // const query = `SELECT sale_id, date, product_id, quantity 
  // FROM StoreManager.sales AS T LEFT JOIN StoreManager.sales_products AS B on (T.id = B.sale_id)
  // WHERE sale_id = ?
  // ORDER BY sale_id,product_id ASC`;
  const query = `SELECT  date, product_id, quantity 
  FROM StoreManager.sales AS T LEFT JOIN StoreManager.sales_products AS B 
  on (T.id = B.sale_id) WHERE sale_id = ?;
  `;
  const [sales] = await connection.execute(query, [id]);
  console.log('byIdSales', sales);
  return sales.map(serialize);
  // return sales;
};

module.exports = {
  getAllSales,
  byIdSales,
};