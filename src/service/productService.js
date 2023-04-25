const { connection } = require('../client/postgresql');

const getProducts = async() => {
    return await connection.query('SELECT * FROM products');


};

const insertProduct = async(productName) => {
    await connection.query('INSERT INTO products (name) VALUES ($1)', [productName])
};
module.exports = {
    getProducts,
    insertProduct
};
