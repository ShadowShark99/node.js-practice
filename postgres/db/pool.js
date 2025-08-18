const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "kaden",
  database: "top_users",
  port: 5432
});