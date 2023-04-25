const { Pool } = require('pg');
const config = require('../config/database');
const connection = new Pool(config.db);


module.exports = {
  connection
};
