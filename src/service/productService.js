const { query } = require('../client/postgresql');

const getProducts = async() => {
    const products = query('select * from products');

    return products;
};

const insertProduct = async(productName) => {
    // Add your solution here!
};

module.exports = {
    getProducts,
    insertProduct
};
