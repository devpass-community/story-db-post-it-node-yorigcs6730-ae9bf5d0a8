const { query } = require('../client/postgresql');

const getProducts = async() => {
    const products = query('select * from products');

    return products;
};

const insertProduct = async(productName) => {
    await query('INSERT INTO products(name) VALUES($1)', [productName])
};

module.exports = {
    getProducts,
    insertProduct
};
