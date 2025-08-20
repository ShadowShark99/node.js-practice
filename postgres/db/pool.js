require('dotenv').config();

const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: process.env.DB_USER,
  database: "top_users",
  port: 5432
});