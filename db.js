let connect = function (){
  if (global.connectio) {
    return global.connection.connect();
  }

  const { Pool } = require("pg");
  const pool = nem Pool({
  connectionString: "postgres://lmebtmar:pqtbJf5kcznfPQ9xPqVwXNDF4r9_qpbK@kesavan.db.elephantsql.com/lmebtmar"
  });

  global.connection = pool;
  return pool.connect();
  }

module.exports = { connect }