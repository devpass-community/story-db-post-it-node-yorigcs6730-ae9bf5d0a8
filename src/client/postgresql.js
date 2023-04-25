const { Pool } = require('pg');
const config = require('../config/database');
const pool = new Pool(config.db);

const query = async(query) => {
  return await pool.query(query);
};

module.exports = {
  query
};
