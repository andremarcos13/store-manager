const connection = require('./connection');

// const serialize = (salesData) => ({
//     saleId: salesData.sale_id,
//     productId: salesData.product_id,
//     quantity: salesData.quantity,
//     date: salesData.date,
//   });

const getAllSales = async () => {
  const query = `SELECT sale_id as saleId, date, product_id as productId, quantity 
  FROM StoreManager.sales AS T LEFT JOIN StoreManager.sales_products AS B on (T.id = B.sale_id)
  ORDER BY sale_id,product_id ASC`;
  const [sales] = await connection.execute(query);
  // console.log('getAllSales', sales.map(serialize));
    // return sales.map(serialize);
    return sales;
};

const byIdSales = async (id) => {
  // const query = `SELECT sale_id, date, product_id, quantity 
  // FROM StoreManager.sales AS T LEFT JOIN StoreManager.sales_products AS B on (T.id = B.sale_id)
  // WHERE sale_id = ?
  // ORDER BY sale_id,product_id ASC`;
  const query = `SELECT  date, product_id as productId, quantity 
  FROM StoreManager.sales AS T LEFT JOIN StoreManager.sales_products AS B 
  on (T.id = B.sale_id) WHERE sale_id = ?;
  `;
  const [sales] = await connection.execute(query, [id]);
  console.log('byIdSales', sales);
  // return sales.map(serialize);
  return sales;
};

const createSaleDate = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUE (NOW())';
  const [{ insertId }] = await connection.execute(query);
  console.log('createsaledate insertId', [{ insertId }]);
  return insertId;
};

const createSale = async (products, newSaleId) => {
  // const saleId = await createSaleDate();
  console.log('model createSale products', products);
    console.log('model createSale saleId', newSaleId);
  const query = `INSERT INTO StoreManager.sales_products 
  (sale_id, product_id, quantity) VALUES (?,?,?)`;
  await Promise.all(products.map(async (elem) => {
    await connection.execute(query, [newSaleId, elem.productId, elem.quantity]);
    console.log('map sale model produto id', elem.productId);
        console.log('map sale model quantity', elem.quantity);
}));
  // console.log('model createSale', teste);
  console.log('teste Sale', newSaleId);
  return { id: newSaleId, itemsSold: products };
};

module.exports = {
  getAllSales,
  byIdSales,
  createSale,
  createSaleDate,
};