const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'MySQL27!2021',
  database: 'election'
});

module.exports = db;